export declare class AAScheduleStats extends HTMLElement {
    private _signals;
    private _rangeStart;
    private _rangeEnd;
    get signals(): Date[];
    set signals(v: Date[]);
    get rangeStart(): Date;
    set rangeStart(v: Date);
    get rangeEnd(): Date;
    set rangeEnd(v: Date);
    connectedCallback(): void;
    private _render;
}
