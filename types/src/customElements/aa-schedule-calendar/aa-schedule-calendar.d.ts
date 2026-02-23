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
import type { SignalProtocolConfig } from "./helpers";
import "./aa-schedule-warnings";
import "./aa-schedule-stats";
import "./aa-schedule-week-grid";
import "./aa-schedule-signal-list";
export declare class AAScheduleCalendar extends HTMLElement {
    private _signals;
    private _rangeStart;
    private _rangeEnd;
    private _windowStart;
    private _windowEnd;
    private _warnings;
    private _showRegenerate;
    private _generation;
    private _config;
    /** Callback invoked when the user clicks "Regenerate". */
    onregenerate: (() => void) | null;
    get signals(): Date[];
    set signals(v: Date[]);
    get rangeStart(): Date;
    set rangeStart(v: Date);
    get rangeEnd(): Date;
    set rangeEnd(v: Date);
    get windowStart(): string;
    set windowStart(v: string);
    get windowEnd(): string;
    set windowEnd(v: string);
    get warnings(): string[];
    set warnings(v: string[]);
    get showRegenerate(): boolean;
    set showRegenerate(v: boolean);
    get config(): SignalProtocolConfig | null;
    set config(v: SignalProtocolConfig | null);
    /** Update signals and re-render. */
    refresh(signals: Date[], warnings?: string[]): void;
    connectedCallback(): void;
    private _render;
    /** Build the visual key panel HTML. Only includes items relevant to the active config. */
    private _buildKeyPanel;
}
