import type { SignalProtocolConfig } from "./helpers";
import "./aa-schedule-day-column";
export declare class AAScheduleWeekGrid extends HTMLElement {
    private _signals;
    private _rangeStart;
    private _rangeEnd;
    private _minHour;
    private _maxHour;
    private _config;
    get signals(): Date[];
    set signals(v: Date[]);
    get rangeStart(): Date;
    set rangeStart(v: Date);
    get rangeEnd(): Date;
    set rangeEnd(v: Date);
    get minHour(): number;
    set minHour(v: number);
    get maxHour(): number;
    set maxHour(v: number);
    get config(): SignalProtocolConfig | null;
    set config(v: SignalProtocolConfig | null);
    connectedCallback(): void;
    private _render;
}
