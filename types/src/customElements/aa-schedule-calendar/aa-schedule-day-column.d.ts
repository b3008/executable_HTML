import type { SignalProtocolConfig } from "./helpers";
export declare class AAScheduleDayColumn extends HTMLElement {
    private _day;
    private _signals;
    private _minHour;
    private _maxHour;
    private _isFirstColumn;
    private _config;
    get day(): Date;
    set day(v: Date);
    get signals(): Date[];
    set signals(v: Date[]);
    get minHour(): number;
    set minHour(v: number);
    get maxHour(): number;
    set maxHour(v: number);
    get isFirstColumn(): boolean;
    set isFirstColumn(v: boolean);
    get config(): SignalProtocolConfig | null;
    set config(v: SignalProtocolConfig | null);
    connectedCallback(): void;
    /** Convert minute-of-day to px offset from grid top. */
    private _minToPx;
    /** Get effective window ranges for this day. Returns an array of {start,end} in minutes. */
    private _getWindowRanges;
    /** Get the set of fixed times (in minutes-of-day) for this day. */
    private _getFixedTimesMinutes;
    private _render;
}
