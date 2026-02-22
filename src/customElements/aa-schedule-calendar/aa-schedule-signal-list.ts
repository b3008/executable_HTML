import { html } from "../aa-base-element/aa-base-element";
import { fmtDate, fmtTime, DAY_NAMES, MONTH_NAMES } from "./helpers";

export class AAScheduleSignalList extends HTMLElement {
  private _signals: Date[] = [];

  get signals(): Date[] {
    return this._signals;
  }
  set signals(v: Date[]) {
    this._signals = v;
    this._render();
  }

  connectedCallback(): void {
    this._render();
  }

  private _render(): void {
    if (!this.isConnected) return;

    if (this._signals.length === 0) {
      this.innerHTML = html`<p style="color:#888;font-family:sans-serif;">No signals generated for this date range.</p>`;
      return;
    }

    let rows = "";
    let prevDs = "";
    let idx = 0;
    for (const s of this._signals) {
      const ds = fmtDate(s);
      const newDay = ds !== prevDs;
      if (newDay) idx = 0;
      idx++;
      const we = s.getDay() === 0 || s.getDay() === 6;
      const bt = newDay && prevDs ? "border-top:1px solid #ddd;" : "";
      const rb = we ? "background:#fafafa;" : "";
      prevDs = ds;
      const dl = `${MONTH_NAMES[s.getMonth()]} ${s.getDate()}, ${s.getFullYear()}`;

      rows += html`<tr style="${bt}${rb}">
        <td style="padding:3px 10px;white-space:nowrap;color:${newDay ? "#333" : "#ccc"};">${newDay ? dl : ""}</td>
        <td style="padding:3px 10px;color:${newDay ? "#333" : "#ccc"};">${newDay ? DAY_NAMES[s.getDay()] : ""}</td>
        <td style="padding:3px 10px;font-variant-numeric:tabular-nums;">${fmtTime(s)}</td>
        <td style="padding:3px 10px;color:#888;">${idx}</td>
      </tr>`;
    }

    this.innerHTML = html`<table style="border-collapse:collapse;width:100%;font-family:sans-serif;font-size:13px;">
      <thead><tr>
        <th style="text-align:left;padding:6px 10px;border-bottom:2px solid #333;">Date</th>
        <th style="text-align:left;padding:6px 10px;border-bottom:2px solid #333;">Day</th>
        <th style="text-align:left;padding:6px 10px;border-bottom:2px solid #333;">Time</th>
        <th style="text-align:left;padding:6px 10px;border-bottom:2px solid #333;">#</th>
      </tr></thead>
      <tbody>${rows}</tbody>
    </table>`;
  }
}

customElements.define("aa-schedule-signal-list", AAScheduleSignalList);
