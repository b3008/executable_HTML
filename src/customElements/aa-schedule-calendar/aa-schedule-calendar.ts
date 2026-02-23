/**
 * <aa-schedule-calendar> – week-view calendar visualisation of signal times.
 *
 * This is a lightweight, presentation-only custom element (no shadow DOM).
 * It accepts complex data via JS properties and renders a Google-Calendar-style
 * week view together with a stats bar, text list and optional regenerate button.
 *
 * Internally composes:
 *   <aa-schedule-warnings>   — validation warning banners
 *   <aa-schedule-stats>      — signal count / active-day summary
 *   <aa-schedule-week-grid>  — the calendar grid itself
 *   <aa-schedule-signal-list> — tabular signal listing
 */

import { html } from "../aa-base-element/aa-base-element";
import type { SignalProtocolConfig } from "./helpers";
import type { AAScheduleWarnings } from "./aa-schedule-warnings";
import type { AAScheduleStats } from "./aa-schedule-stats";
import type { AAScheduleWeekGrid } from "./aa-schedule-week-grid";
import type { AAScheduleSignalList } from "./aa-schedule-signal-list";

// Side-effect imports: register the child custom elements.
import "./aa-schedule-warnings";
import "./aa-schedule-stats";
import "./aa-schedule-week-grid";
import "./aa-schedule-signal-list";

// --- hour-range helper ------------------------------------------------------

function computeHourRange(
  times: Date[],
  windowStart?: string,
  windowEnd?: string,
): { minHour: number; maxHour: number } {
  let minHour = 6;
  let maxHour = 23;
  if (times.length > 0) {
    const hours = times.map((s) => s.getHours());
    minHour = Math.max(0, Math.min(...hours) - 1);
    maxHour = Math.min(24, Math.max(...hours) + 2);
  }
  if (windowStart) {
    const h = parseInt(windowStart, 10);
    if (!isNaN(h)) minHour = Math.min(minHour, Math.max(0, h - 1));
  }
  if (windowEnd) {
    const h = parseInt(windowEnd, 10);
    if (!isNaN(h)) maxHour = Math.max(maxHour, Math.min(24, h + 1));
  }
  if (maxHour - minHour < 4) maxHour = Math.min(24, minHour + 4);
  return { minHour, maxHour };
}

// --- custom element ---------------------------------------------------------

export class AAScheduleCalendar extends HTMLElement {
  private _signals: Date[] = [];
  private _rangeStart: Date = new Date();
  private _rangeEnd: Date = new Date();
  private _windowStart = "";
  private _windowEnd = "";
  private _warnings: string[] = [];
  private _showRegenerate = false;
  private _generation = 1;
  private _config: SignalProtocolConfig | null = null;

  /** Callback invoked when the user clicks "Regenerate". */
  onregenerate: (() => void) | null = null;

  get signals(): Date[] {
    return this._signals;
  }
  set signals(v: Date[]) {
    this._signals = v;
    this._render();
  }

  get rangeStart(): Date {
    return this._rangeStart;
  }
  set rangeStart(v: Date) {
    this._rangeStart = v;
    this._render();
  }

  get rangeEnd(): Date {
    return this._rangeEnd;
  }
  set rangeEnd(v: Date) {
    this._rangeEnd = v;
    this._render();
  }

  get windowStart(): string {
    return this._windowStart;
  }
  set windowStart(v: string) {
    this._windowStart = v;
    this._render();
  }

  get windowEnd(): string {
    return this._windowEnd;
  }
  set windowEnd(v: string) {
    this._windowEnd = v;
    this._render();
  }

  get warnings(): string[] {
    return this._warnings;
  }
  set warnings(v: string[]) {
    this._warnings = v;
    this._render();
  }

  get showRegenerate(): boolean {
    return this._showRegenerate;
  }
  set showRegenerate(v: boolean) {
    this._showRegenerate = v;
    this._render();
  }

  get config(): SignalProtocolConfig | null {
    return this._config;
  }
  set config(v: SignalProtocolConfig | null) {
    this._config = v;
    this._render();
  }

  /** Update signals and re-render. */
  refresh(signals: Date[], warnings?: string[]): void {
    this._signals = signals;
    if (warnings !== undefined) this._warnings = warnings;
    this._generation++;
    this._render();
  }

  connectedCallback(): void {
    this._render();
  }

  // --- internal rendering ---------------------------------------------------

  private _render(): void {
    if (!this.isConnected) return;

    // Use config window values with fallback to explicit properties
    const ws = this._config?.windowStart || this._windowStart;
    const we = this._config?.windowEnd || this._windowEnd;

    const { minHour, maxHour } = computeHourRange(
      this._signals,
      ws,
      we,
    );

    const id = "sc-" + (this.id || Math.random().toString(36).slice(2, 8));

    // Build the static chrome (legend bar + regenerate button)
    let regenBtn = "";
    if (this._showRegenerate) {
      regenBtn = html`<button id="${id}-btn" style="display:inline-flex;align-items:center;gap:6px;padding:6px 14px;background:#1a73e8;color:#fff;border:none;border-radius:6px;font-size:13px;font-weight:500;font-family:sans-serif;cursor:pointer;white-space:nowrap;">&#x21bb; Regenerate<span style="font-size:11px;opacity:.7;">&thinsp;#<span id="${id}-counter">${this._generation}</span></span></button>`;
    }

    this.innerHTML = html`<div style="font-family:sans-serif;">
      <aa-schedule-warnings></aa-schedule-warnings>
      <aa-schedule-stats></aa-schedule-stats>
      <div style="display:flex;align-items:center;gap:8px;margin-bottom:10px;">
        <button id="${id}-key-btn" title="Show calendar key" style="width:28px;height:28px;border-radius:50%;border:1.5px solid #dadce0;background:#fff;color:#5f6368;font-size:15px;font-weight:700;font-family:sans-serif;cursor:pointer;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;line-height:1;">?</button>
        <span style="font-size:12px;color:#9e9e9e;flex:1;">Hover blocks for details</span>
        ${regenBtn}
      </div>
      <div id="${id}-key-panel" style="display:none;margin-bottom:14px;"></div>
      <aa-schedule-week-grid></aa-schedule-week-grid>
      <details open style="margin-top:24px;">
        <summary style="font-size:16px;font-weight:700;cursor:pointer;margin-bottom:8px;">Signal List (${this._signals.length} total)</summary>
        <div style="max-height:500px;overflow-y:auto;border:1px solid #eee;border-radius:4px;">
          <aa-schedule-signal-list></aa-schedule-signal-list>
        </div>
      </details>
    </div>`;

    // Push data to child components
    const warn = this.querySelector("aa-schedule-warnings") as AAScheduleWarnings;
    warn.warnings = this._warnings;

    const stats = this.querySelector("aa-schedule-stats") as AAScheduleStats;
    stats.rangeStart = this._rangeStart;
    stats.rangeEnd = this._rangeEnd;
    stats.signals = this._signals;

    const grid = this.querySelector("aa-schedule-week-grid") as AAScheduleWeekGrid;
    grid.rangeStart = this._rangeStart;
    grid.rangeEnd = this._rangeEnd;
    grid.minHour = minHour;
    grid.maxHour = maxHour;
    grid.config = this._config;
    grid.signals = this._signals;

    const list = this.querySelector("aa-schedule-signal-list") as AAScheduleSignalList;
    list.signals = this._signals;

    // Wire up key button
    const keyBtn = this.querySelector(`#${id}-key-btn`) as HTMLElement | null;
    const keyPanel = this.querySelector(`#${id}-key-panel`) as HTMLElement | null;
    if (keyBtn && keyPanel) {
      keyBtn.addEventListener("click", () => {
        const open = keyPanel.style.display !== "none";
        if (open) {
          keyPanel.style.display = "none";
          keyBtn.style.background = "#fff";
          keyBtn.style.color = "#5f6368";
        } else {
          keyPanel.innerHTML = this._buildKeyPanel();
          keyPanel.style.display = "block";
          keyBtn.style.background = "#1a73e8";
          keyBtn.style.color = "#fff";
        }
      });
    }

    // Wire up regenerate button
    if (this._showRegenerate) {
      const btn = this.querySelector(`#${id}-btn`);
      if (btn) {
        btn.addEventListener("click", () => {
          if (this.onregenerate) this.onregenerate();
          (btn as HTMLElement).style.background = "#0b8043";
          setTimeout(() => {
            (btn as HTMLElement).style.background = "#1a73e8";
          }, 200);
        });
      }
    }
  }

  /** Build the visual key panel HTML. Only includes items relevant to the active config. */
  private _buildKeyPanel(): string {
    const cfg = this._config;
    const S = (css: string) => `display:inline-block;vertical-align:middle;${css}`;
    const row = (swatch: string, title: string, desc: string) =>
      `<div style="display:flex;align-items:center;gap:10px;padding:6px 0;border-bottom:1px solid #f5f5f5;">
        <div style="flex-shrink:0;width:48px;height:28px;position:relative;display:flex;align-items:center;justify-content:center;">${swatch}</div>
        <div><span style="font-weight:600;font-size:12px;color:#202124;">${title}</span><br><span style="font-size:11px;color:#5f6368;">${desc}</span></div>
      </div>`;

    let rows = "";

    // Always: weekday signal block
    rows += row(
      `<div style="${S("width:42px;height:16px;background:#1a73e8;border-radius:3px;")}"></div>`,
      "Weekday signal",
      "Random or stratified signal scheduled on a weekday",
    );

    // Always: weekend signal block
    rows += row(
      `<div style="${S("width:42px;height:16px;background:#0b8043;border-radius:3px;")}"></div>`,
      "Weekend signal",
      "Signal scheduled on Saturday or Sunday",
    );

    if (cfg) {
      // Fixed signal
      if (cfg.fixedTimes) {
        const label = cfg.fixedTimesLabel || "fixed";
        rows += row(
          `<div style="${S("width:42px;height:16px;background:rgba(26,115,232,0.55);border:2px dashed #fff;border-radius:3px;box-sizing:border-box;")}"></div>`,
          `Fixed signal (${label})`,
          `Fires at exact times: ${cfg.fixedTimes}`,
        );
      }

      // Fixed-time line
      if (cfg.fixedTimes) {
        rows += row(
          `<div style="${S("width:42px;height:0;border-top:1px dotted rgba(156,39,176,0.5);")}"></div>`,
          "Fixed-time marker",
          "Dotted line at each fixed signal time with a time label",
        );
      }

      // Signal expiry
      if (cfg.signalExpiry && cfg.signalExpiry !== "0") {
        rows += row(
          `<div style="position:relative;width:42px;height:26px;">
            <div style="${S("width:42px;height:26px;background:#1a73e8;border-radius:3px;opacity:0.7;")}"></div>
            <div style="position:absolute;right:-2px;top:0;bottom:0;display:flex;flex-direction:column;justify-content:space-between;">
              <div style="font-size:7px;color:#5f6368;line-height:1;">\u2191</div>
              <div style="font-size:7px;color:#5f6368;line-height:1;">\u2193</div>
            </div>
          </div>`,
          `Signal expiry (${cfg.signalExpiry})`,
          "Block height represents the response window duration",
        );
      }

      // Window shading
      if (cfg.windowStart || cfg.windowEnd || cfg.signalWindows) {
        const windowDesc = cfg.signalWindows
          ? cfg.signalWindows.replace(/;/g, ", ")
          : `${cfg.windowStart || "?"}\u2013${cfg.windowEnd || "?"}`;
        rows += row(
          `<div style="${S("width:42px;height:20px;background:rgba(0,0,0,0.04);border:1px solid #e0e0e0;border-radius:2px;")}"></div>`,
          "Outside signal window",
          `Gray shading marks hours outside the active window (${windowDesc})`,
        );
      }

      // Exclude-times
      if (cfg.excludeTimes) {
        rows += row(
          `<div style="${S("width:42px;height:20px;background:repeating-linear-gradient(135deg,transparent,transparent 3px,rgba(211,47,47,0.12) 3px,rgba(211,47,47,0.12) 6px);border:1px solid rgba(211,47,47,0.2);border-radius:2px;")}"></div>`,
          "Excluded time range",
          `Diagonal hatching over blackout periods: ${cfg.excludeTimes.replace(/;/g, ", ")}`,
        );
      }

      // Min-interval buffer
      if (cfg.minInterval && cfg.minInterval !== "0") {
        rows += row(
          `<div style="${S("width:42px;height:20px;border:1px dashed rgba(0,0,0,0.15);border-radius:3px;background:rgba(26,115,232,0.03);")}"></div>`,
          `Min-interval buffer (${cfg.minInterval})`,
          "Dashed zone above and below each signal where no other signal can occur",
        );
      }

      // Reminder marker
      if (cfg.reminderAfter) {
        const count = cfg.reminderCount || 1;
        let triangles = "";
        for (let i = 0; i < Math.min(count, 3); i++) {
          triangles += `<div style="width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-bottom:7px solid rgba(255,152,0,0.8);margin-right:4px;"></div>`;
        }
        rows += row(
          `<div style="display:flex;align-items:center;">${triangles}</div>`,
          `Reminder (${cfg.reminderAfter} \u00d7 ${count})`,
          `Orange triangle(s) at reminder offset(s) after each signal`,
        );
      }

      // Excluded date
      if (cfg.excludeDates) {
        rows += row(
          `<div style="${S("width:42px;height:20px;background:#fff;border:1px solid #e0e0e0;border-radius:2px;opacity:0.35;display:flex;align-items:center;justify-content:center;")}"><span style="font-size:10px;color:#c62828;font-weight:700;text-decoration:line-through;">15</span></div>`,
          "Excluded date",
          `Column dimmed and crossed out on: ${cfg.excludeDates}`,
        );
      }

      // Inactive day
      if (cfg.activeDays && cfg.activeDays !== "all") {
        rows += row(
          `<div style="${S("width:42px;height:20px;background:#fff;border:1px solid #e0e0e0;border-radius:2px;opacity:0.35;display:flex;align-items:center;justify-content:center;")}"><span style="font-size:7px;color:#9e9e9e;font-weight:600;">INACTIVE</span></div>`,
          `Inactive day (active: ${cfg.activeDays})`,
          "Column dimmed on days outside the active-days schedule",
        );
      }
    }

    return `<div style="border:1px solid #dadce0;border-radius:8px;padding:12px 16px;background:#fafafa;max-width:440px;">
      <div style="font-size:13px;font-weight:700;color:#202124;margin-bottom:4px;font-family:sans-serif;">Calendar Key</div>
      <div style="font-family:sans-serif;">${rows}</div>
    </div>`;
  }
}

customElements.define("aa-schedule-calendar", AAScheduleCalendar);
