import { html } from "../aa-base-element/aa-base-element";

export class AAScheduleWarnings extends HTMLElement {
  private _warnings: string[] = [];

  get warnings(): string[] {
    return this._warnings;
  }
  set warnings(v: string[]) {
    this._warnings = v;
    this._render();
  }

  connectedCallback(): void {
    this._render();
  }

  private _render(): void {
    if (!this.isConnected) return;
    if (this._warnings.length === 0) {
      this.innerHTML = "";
      return;
    }
    const items = this._warnings
      .map(
        (w) => html`<div style="background:#fff3e0;border-left:3px solid #ff9800;padding:6px 12px;margin-bottom:4px;font-size:13px;font-family:sans-serif;">${w}</div>`,
      )
      .join("");
    this.innerHTML = html`<div style="margin-bottom:12px;">${items}</div>`;
  }
}

customElements.define("aa-schedule-warnings", AAScheduleWarnings);
