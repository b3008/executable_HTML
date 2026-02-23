import { html } from "../aa-base-element/aa-base-element";
import {
  fmtTime,
  DAY_NAMES,
  MONTH_NAMES,
  isWeekend,
  isDayActive,
  isDayExcluded,
  parseTimeToMinutes,
  parseTimeRanges,
  parseDurationToMinutes,
} from "./helpers";
import type { SignalProtocolConfig } from "./helpers";

const PX_PER_HOUR = 52;

export class AAScheduleDayColumn extends HTMLElement {
  private _day: Date = new Date();
  private _signals: Date[] = [];
  private _minHour = 6;
  private _maxHour = 23;
  private _isFirstColumn = false;
  private _config: SignalProtocolConfig | null = null;

  get day(): Date {
    return this._day;
  }
  set day(v: Date) {
    this._day = v;
    this._render();
  }

  get signals(): Date[] {
    return this._signals;
  }
  set signals(v: Date[]) {
    this._signals = v;
    this._render();
  }

  get minHour(): number {
    return this._minHour;
  }
  set minHour(v: number) {
    this._minHour = v;
    this._render();
  }

  get maxHour(): number {
    return this._maxHour;
  }
  set maxHour(v: number) {
    this._maxHour = v;
    this._render();
  }

  get isFirstColumn(): boolean {
    return this._isFirstColumn;
  }
  set isFirstColumn(v: boolean) {
    this._isFirstColumn = v;
    this._render();
  }

  get config(): SignalProtocolConfig | null {
    return this._config;
  }
  set config(v: SignalProtocolConfig | null) {
    this._config = v;
    this._render();
  }

  connectedCallback(): void {
    this._render();
  }

  // --- helpers ---------------------------------------------------------------

  /** Convert minute-of-day to px offset from grid top. */
  private _minToPx(minuteOfDay: number): number {
    return ((minuteOfDay - this._minHour * 60) / 60) * PX_PER_HOUR;
  }

  /** Get effective window ranges for this day. Returns an array of {start,end} in minutes. */
  private _getWindowRanges(): { start: number; end: number }[] | null {
    const cfg = this._config;
    if (!cfg) return null;
    const wknd = isWeekend(this._day);

    // Explicit signal-windows (semicolon-separated ranges)
    const windows = wknd ? (cfg.weekendSignalWindows || cfg.signalWindows) : cfg.signalWindows;
    if (windows) return parseTimeRanges(windows);

    // Fallback to windowStart/windowEnd
    const ws = wknd ? (cfg.weekendWindowStart || cfg.windowStart) : cfg.windowStart;
    const we = wknd ? (cfg.weekendWindowEnd || cfg.windowEnd) : cfg.windowEnd;
    if (ws && we) {
      return [{ start: parseTimeToMinutes(ws), end: parseTimeToMinutes(we) }];
    }
    return null;
  }

  /** Get the set of fixed times (in minutes-of-day) for this day. */
  private _getFixedTimesMinutes(): number[] {
    const cfg = this._config;
    if (!cfg) return [];
    const wknd = isWeekend(this._day);
    const ft = wknd ? (cfg.weekendFixedTimes || cfg.fixedTimes) : cfg.fixedTimes;
    if (!ft) return [];
    return ft.split(",").map((s) => s.trim()).filter(Boolean).map(parseTimeToMinutes);
  }

  // --- render ----------------------------------------------------------------

  private _render(): void {
    if (!this.isConnected) return;

    const day = this._day;
    const cfg = this._config;
    const gridHeight = (this._maxHour - this._minHour) * PX_PER_HOUR;

    const wknd = isWeekend(day);
    const isMonday = day.getDay() === 1 && !this._isFirstColumn;
    const dayName = DAY_NAMES[day.getDay()];
    const monthName = MONTH_NAMES[day.getMonth()];

    // --- Layer 7 & 8: check day status -------
    const excluded = cfg ? isDayExcluded(day, cfg.excludeDates) : false;
    const inactive = cfg ? !isDayActive(day, cfg.activeDays) : false;
    const dimColumn = excluded || inactive;

    const sorted = dimColumn
      ? []
      : [...this._signals].sort((a, b) => a.getTime() - b.getTime());
    const hasSignals = sorted.length > 0;

    const colBg = wknd ? "#f8f9fa" : "#fff";
    const leftBorder = isMonday ? "2px solid #dadce0" : "1px solid #ebebeb";
    const dateColor = hasSignals
      ? wknd ? "#0b8043" : "#1a73e8"
      : "#70757a";
    const opacity = dimColumn ? "0.35" : "1";

    // Fixed-time set for styling signal blocks
    const fixedMinutes = this._getFixedTimesMinutes();
    const fixedSet = new Set(fixedMinutes);

    // Signal expiry height
    let blockHeight = 20;
    if (cfg && cfg.signalExpiry) {
      const expiryMin = parseDurationToMinutes(cfg.signalExpiry);
      if (expiryMin > 0) {
        blockHeight = Math.max(14, Math.min(80, Math.round((expiryMin / 60) * PX_PER_HOUR)));
      }
    }

    // Min-interval buffer in px
    let bufferPx = 0;
    if (cfg && cfg.minInterval) {
      const intervalMin = parseDurationToMinutes(cfg.minInterval);
      if (intervalMin > 0) {
        bufferPx = Math.round((intervalMin / 60) * PX_PER_HOUR);
      }
    }

    // Reminder info
    let reminderOffsetMin = 0;
    let reminderCount = 0;
    if (cfg && cfg.reminderAfter) {
      reminderOffsetMin = parseDurationToMinutes(cfg.reminderAfter);
      reminderCount = cfg.reminderCount || 1;
    }

    // --- Hour grid lines ---
    let gridLines = "";
    for (let h = this._minHour; h <= this._maxHour; h++) {
      const top = (h - this._minHour) * PX_PER_HOUR;
      if (h > this._minHour) {
        gridLines += html`<div style="position:absolute;top:${top}px;left:0;right:0;border-top:1px solid #ebebeb;"></div>`;
      }
      if (h < this._maxHour) {
        const halfTop = top + PX_PER_HOUR / 2;
        gridLines += html`<div style="position:absolute;top:${halfTop}px;left:0;right:0;border-top:1px dotted #f5f5f5;"></div>`;
      }
    }

    // --- Layer 1: Window boundary shading ---
    let windowShading = "";
    if (cfg) {
      const ranges = this._getWindowRanges();
      if (ranges && ranges.length > 0) {
        // Shade outside all window ranges
        const gridStartMin = this._minHour * 60;
        const gridEndMin = this._maxHour * 60;

        // Build "active" intervals, then shade the gaps
        const sorted_ranges = [...ranges].sort((a, b) => a.start - b.start);
        let cursor = gridStartMin;
        for (const r of sorted_ranges) {
          const shadeStart = Math.max(cursor, gridStartMin);
          const shadeEnd = Math.min(r.start, gridEndMin);
          if (shadeEnd > shadeStart) {
            const top = this._minToPx(shadeStart);
            const height = this._minToPx(shadeEnd) - top;
            windowShading += `<div style="position:absolute;top:${Math.round(top)}px;left:0;right:0;height:${Math.round(height)}px;background:rgba(0,0,0,0.04);z-index:0;pointer-events:none;"></div>`;
          }
          cursor = r.end;
        }
        // Shade after last range
        if (cursor < gridEndMin) {
          const top = this._minToPx(cursor);
          const height = this._minToPx(gridEndMin) - top;
          windowShading += `<div style="position:absolute;top:${Math.round(top)}px;left:0;right:0;height:${Math.round(height)}px;background:rgba(0,0,0,0.04);z-index:0;pointer-events:none;"></div>`;
        }
      }
    }

    // --- Layer 2: Exclude-times hatched bands ---
    let excludeBands = "";
    if (cfg && cfg.excludeTimes && !dimColumn) {
      const ranges = parseTimeRanges(cfg.excludeTimes);
      for (const r of ranges) {
        const top = this._minToPx(r.start);
        const height = this._minToPx(r.end) - top;
        if (height > 0) {
          excludeBands += `<div title="Excluded: ${Math.floor(r.start / 60)}:${String(r.start % 60).padStart(2, "0")}\u2013${Math.floor(r.end / 60)}:${String(r.end % 60).padStart(2, "0")}" style="position:absolute;top:${Math.round(top)}px;left:0;right:0;height:${Math.round(height)}px;background:repeating-linear-gradient(135deg,transparent,transparent 3px,rgba(211,47,47,0.12) 3px,rgba(211,47,47,0.12) 6px);z-index:1;pointer-events:none;"></div>`;
        }
      }
    }

    // --- Layer 9: Fixed-times dotted lines ---
    let fixedLines = "";
    if (cfg && fixedMinutes.length > 0 && !dimColumn) {
      for (const fm of fixedMinutes) {
        const top = this._minToPx(fm);
        const hrs = Math.floor(fm / 60);
        const mins = fm % 60;
        const label = `${String(hrs).padStart(2, "0")}:${String(mins).padStart(2, "0")}`;
        fixedLines += `<div style="position:absolute;top:${Math.round(top)}px;left:0;right:0;border-top:1px dotted rgba(156,39,176,0.4);z-index:2;pointer-events:none;"></div>`;
        fixedLines += `<div style="position:absolute;top:${Math.round(top) - 9}px;left:1px;font-size:8px;color:rgba(156,39,176,0.7);font-family:sans-serif;z-index:2;pointer-events:none;">${label}</div>`;
      }
    }

    // --- Layers 3–6: Signal blocks, expiry, buffers, reminders ---
    let blocks = "";
    for (const sig of sorted) {
      const minuteOfDay = sig.getHours() * 60 + sig.getMinutes();
      const top = this._minToPx(minuteOfDay);
      const time = fmtTime(sig);
      const isFixed = fixedSet.has(minuteOfDay);
      const blockBg = isFixed
        ? (wknd ? "rgba(11,128,67,0.55)" : "rgba(26,115,232,0.55)")
        : (wknd ? "#0b8043" : "#1a73e8");
      const border = isFixed ? "2px dashed #fff" : "none";
      const label = isFixed && cfg?.fixedTimesLabel
        ? ` \u00b7 ${cfg.fixedTimesLabel}`
        : "";

      // Layer 5: Min-interval buffer
      if (bufferPx > 0) {
        blocks += `<div style="position:absolute;top:${Math.round(top - bufferPx)}px;left:4px;right:4px;height:${bufferPx}px;border:1px dashed rgba(0,0,0,0.12);border-bottom:none;border-radius:4px 4px 0 0;background:rgba(26,115,232,0.03);z-index:3;pointer-events:none;"></div>`;
        blocks += `<div style="position:absolute;top:${Math.round(top + blockHeight)}px;left:4px;right:4px;height:${bufferPx}px;border:1px dashed rgba(0,0,0,0.12);border-top:none;border-radius:0 0 4px 4px;background:rgba(26,115,232,0.03);z-index:3;pointer-events:none;"></div>`;
      }

      // Layer 3 & 4: Signal block (height from expiry)
      blocks += html`<div title="${dayName} ${day.getDate()} ${monthName} at ${time}${isFixed ? " (fixed)" : ""}" style="position:absolute;top:${Math.round(top)}px;left:2px;right:2px;height:${blockHeight}px;background:${blockBg};border:${border};color:#fff;font-size:10px;font-weight:500;font-family:sans-serif;line-height:${blockHeight}px;padding:0 4px;border-radius:4px;overflow:hidden;white-space:nowrap;z-index:4;box-shadow:0 1px 2px rgba(0,0,0,.2);box-sizing:border-box;">${time}${label}</div>`;

      // Layer 6: Reminder markers
      if (reminderOffsetMin > 0 && reminderCount > 0) {
        for (let r = 1; r <= reminderCount; r++) {
          const rMin = minuteOfDay + reminderOffsetMin * r;
          const rTop = this._minToPx(rMin);
          blocks += `<div title="Reminder ${r} at +${Math.round(reminderOffsetMin * r)}min" style="position:absolute;top:${Math.round(rTop) - 3}px;left:2px;width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-bottom:6px solid rgba(255,152,0,0.8);z-index:6;pointer-events:none;"></div>`;
        }
      }
    }

    // --- Header with status badges ---
    let headerExtra = "";
    if (excluded) {
      headerExtra = `<div style="font-size:8px;color:#c62828;font-weight:600;letter-spacing:.3px;">EXCLUDED</div>`;
    } else if (inactive) {
      headerExtra = `<div style="font-size:8px;color:#9e9e9e;font-weight:600;letter-spacing:.3px;">INACTIVE</div>`;
    }
    const dateDecoration = excluded ? "line-through" : "none";

    this.style.cssText = `flex:1;min-width:72px;position:relative;border-left:${leftBorder};background:${colBg};opacity:${opacity};`;
    this.innerHTML = `<div style="height:56px;padding:6px 4px 2px;text-align:center;border-bottom:1px solid #dadce0;font-family:sans-serif;">
      <div style="font-size:10px;color:#70757a;text-transform:uppercase;letter-spacing:.5px;">${dayName}</div>
      <div style="font-size:22px;font-weight:${hasSignals ? 500 : 400};color:${dateColor};line-height:1.3;text-decoration:${dateDecoration};">${day.getDate()}</div>
      <div style="font-size:9px;color:#70757a;">${monthName}</div>
      ${headerExtra}
    </div>
    <div style="position:relative;height:${gridHeight}px;">${gridLines}${windowShading}${excludeBands}${fixedLines}${blocks}</div>`;
  }
}

customElements.define("aa-schedule-day-column", AAScheduleDayColumn);
