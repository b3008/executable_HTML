import { html } from "../aa-base-element/aa-base-element";
import { pad, fmtDate } from "./helpers";
import type { SignalProtocolConfig } from "./helpers";
import type { AAScheduleDayColumn } from "./aa-schedule-day-column";
import "./aa-schedule-day-column";

const PX_PER_HOUR = 52;

export class AAScheduleWeekGrid extends HTMLElement {
  private _signals: Date[] = [];
  private _rangeStart: Date = new Date();
  private _rangeEnd: Date = new Date();
  private _minHour = 6;
  private _maxHour = 23;
  private _config: SignalProtocolConfig | null = null;

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

  private _render(): void {
    if (!this.isConnected) return;

    const gridHeight = (this._maxHour - this._minHour) * PX_PER_HOUR;

    // Group signals by date
    const byDate = new Map<string, Date[]>();
    for (const s of this._signals) {
      const key = fmtDate(s);
      if (!byDate.has(key)) byDate.set(key, []);
      byDate.get(key)!.push(s);
    }

    // Enumerate days in range
    const days: Date[] = [];
    const cur = new Date(
      this._rangeStart.getFullYear(),
      this._rangeStart.getMonth(),
      this._rangeStart.getDate(),
    );
    const endDay = new Date(
      this._rangeEnd.getFullYear(),
      this._rangeEnd.getMonth(),
      this._rangeEnd.getDate(),
    );
    while (cur <= endDay) {
      days.push(new Date(cur));
      cur.setDate(cur.getDate() + 1);
    }

    // Time gutter labels
    let gutterLabels = "";
    for (let h = this._minHour; h <= this._maxHour; h++) {
      const top = (h - this._minHour) * PX_PER_HOUR;
      if (h > this._minHour) {
        gutterLabels += html`<div style="position:absolute;top:${top - 7}px;right:8px;font-size:10px;color:#70757a;font-family:sans-serif;white-space:nowrap;">${pad(h)}:00</div>`;
      }
    }

    // Day column tags
    const colTags = days
      .map(() => html`<aa-schedule-day-column></aa-schedule-day-column>`)
      .join("");

    this.innerHTML = html`<div style="display:flex;overflow-x:auto;border:1px solid #dadce0;border-radius:8px;background:#fff;">
      <div style="width:48px;flex-shrink:0;border-right:1px solid #dadce0;">
        <div style="height:56px;"></div>
        <div style="position:relative;height:${gridHeight}px;">${gutterLabels}</div>
      </div>
      ${colTags}
    </div>`;

    // Push data to each day column
    const columns = this.querySelectorAll("aa-schedule-day-column");
    columns.forEach((col, i) => {
      const dayCol = col as AAScheduleDayColumn;
      const day = days[i];
      dayCol.isFirstColumn = i === 0;
      dayCol.minHour = this._minHour;
      dayCol.maxHour = this._maxHour;
      dayCol.config = this._config;
      dayCol.day = day;
      dayCol.signals = byDate.get(fmtDate(day)) || [];
    });
  }
}

customElements.define("aa-schedule-week-grid", AAScheduleWeekGrid);
