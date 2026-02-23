import { html } from "../aa-base-element/aa-base-element";
import { fmtDate } from "./helpers";

export class AAScheduleStats extends HTMLElement {
  private _signals: Date[] = [];
  private _rangeStart: Date = new Date();
  private _rangeEnd: Date = new Date();

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

  connectedCallback(): void {
    this._render();
  }

  private _render(): void {
    if (!this.isConnected) return;
    const totalDays =
      Math.round(
        (this._rangeEnd.getTime() - this._rangeStart.getTime()) / 86400000,
      ) + 1;
    const activeDates = new Set(this._signals.map(fmtDate));
    const avg =
      activeDates.size > 0
        ? (this._signals.length / activeDates.size).toFixed(1)
        : "0";
    this.innerHTML = html`<div style="display:flex;gap:28px;margin-bottom:16px;font-family:sans-serif;font-size:13px;flex-wrap:wrap;">
      <div><strong>${this._signals.length}</strong> total signals</div>
      <div><strong>${activeDates.size}</strong> / ${totalDays} days active</div>
      <div><strong>${avg}</strong> signals / active day</div>
    </div>`;
  }
}

customElements.define("aa-schedule-stats", AAScheduleStats);
