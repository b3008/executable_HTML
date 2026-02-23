export type { SignalProtocolConfig } from "../aa-signal-protocol/aa-signal-protocol";
export declare function pad(n: number): string;
export declare function fmtDate(d: Date): string;
export declare function fmtTime(d: Date): string;
export declare const DAY_NAMES: string[];
export declare const MONTH_NAMES: string[];
/** Convert "HH:MM" to minute-of-day (0–1439). */
export declare function parseTimeToMinutes(str: string): number;
/** Parse semicolon-separated "HH:MM-HH:MM" ranges. */
export declare function parseTimeRanges(str: string): {
    start: number;
    end: number;
}[];
/** Convert duration micro-syntax ("30s", "15min", "2h", "1d") to minutes. */
export declare function parseDurationToMinutes(str: string): number;
/** Check if a Date falls on a weekend (Sat/Sun). */
export declare function isWeekend(d: Date): boolean;
/** Check if a day matches an activeDays specifier ("all", "weekdays", "weekends", or comma-separated day names). */
export declare function isDayActive(day: Date, activeDays: string): boolean;
/** Check if a day is in a comma-separated YYYY-MM-DD exclusion list. */
export declare function isDayExcluded(day: Date, excludeDates: string | null): boolean;
