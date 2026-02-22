export declare class AAScheduleSignalList extends HTMLElement {
    private _signals;
    get signals(): Date[];
    set signals(v: Date[]);
    connectedCallback(): void;
    private _render;
}
