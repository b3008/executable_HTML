import { AABaseElement, type AAPropertiesMap } from '../aa-base-element/aa-base-element';
/**
 * Parse a duration micro-syntax string into milliseconds.
 * Supported formats: `30s`, `15min`, `2h`, `1d`
 */
declare function parseDuration(str: string): number;
/**
 * Parse an HH:MM time string into { hours, minutes }.
 */
declare function parseTime(str: string): {
    hours: number;
    minutes: number;
};
/**
 * Parse a time range like "08:00-12:00" into start/end minute-of-day.
 */
declare function parseTimeRange(str: string): {
    startMinutes: number;
    endMinutes: number;
};
/**
 * Convert minute-of-day windows into an array of { startMinutes, endMinutes } ranges,
 * subtracting any exclusion ranges.
 */
declare function subtractExclusions(windows: {
    startMinutes: number;
    endMinutes: number;
}[], exclusions: {
    startMinutes: number;
    endMinutes: number;
}[]): {
    startMinutes: number;
    endMinutes: number;
}[];
export interface SignalProtocolConfig {
    name: string;
    scheduleType: 'fixed' | 'random' | 'stratified-random';
    signalsPerDay: number | null;
    windowStart: string | null;
    windowEnd: string | null;
    signalWindows: string | null;
    minInterval: string;
    signalExpiry: string;
    reminderAfter: string | null;
    reminderCount: number;
    studyDays: number | null;
    startDate: string | null;
    endDate: string | null;
    activeDays: string;
    fixedTimes: string | null;
    fixedTimesLabel: string | null;
    excludeDates: string | null;
    excludeTimes: string | null;
    weekendSignalsPerDay: number | null;
    weekendWindowStart: string | null;
    weekendWindowEnd: string | null;
    weekendSignalWindows: string | null;
    weekendFixedTimes: string | null;
}
export declare class AASignalProtocol extends AABaseElement {
    static get tag(): string;
    static get properties(): AAPropertiesMap;
    static get observedAttributes(): string[];
    name: string;
    scheduleType: string;
    signalsPerDay: string | null;
    windowStart: string | null;
    windowEnd: string | null;
    signalWindows: string | null;
    minInterval: string;
    signalExpiry: string;
    reminderAfter: string | null;
    reminderCount: string | null;
    studyDays: string | null;
    startDate: string | null;
    endDate: string | null;
    activeDays: string;
    fixedTimes: string | null;
    fixedTimesLabel: string | null;
    excludeDates: string | null;
    excludeTimes: string | null;
    weekendSignalsPerDay: string | null;
    weekendWindowStart: string | null;
    weekendWindowEnd: string | null;
    weekendSignalWindows: string | null;
    weekendFixedTimes: string | null;
    constructor();
    connectedCallback(): void;
    /**
     * Validate the protocol configuration and warn about issues.
     */
    validate(): string[];
    /**
     * Get the base windows (before exclusions) for a day.
     * @param isWeekend - whether to use weekend overrides
     */
    _getBaseWindows(isWeekend: boolean): {
        startMinutes: number;
        endMinutes: number;
    }[];
    /**
     * Get the effective windows (after exclusions) for a day.
     */
    _getEffectiveWindows(isWeekend: boolean): {
        startMinutes: number;
        endMinutes: number;
    }[];
    /**
     * Check if a specific date is active (not excluded by active-days or exclude-dates).
     */
    _isDayActive(date: Date): boolean;
    /**
     * Get a structured protocol configuration object.
     */
    getProtocol(): SignalProtocolConfig;
    /**
     * Compute concrete signal times for a given date range.
     *
     * Iterates over each active day in [start, end], applies the scheduling algorithm,
     * and returns a sorted array of Date objects.
     *
     * For `random` and `stratified-random`, results are non-deterministic.
     * External systems should call this once and cache/persist the schedule.
     */
    getSignallingTimes(start: Date, end: Date): Date[];
    /**
     * Generate signals for a single day.
     */
    _generateDaySignals(day: Date, isWeekend: boolean): Date[];
    /**
     * Generate random signals uniformly distributed within effective windows.
     */
    _generateRandomSignals(day: Date, windows: {
        startMinutes: number;
        endMinutes: number;
    }[], count: number, minIntervalMinutes: number): Date[];
    /**
     * Generate stratified-random signals: divide windows into N equal blocks,
     * one random signal per block.
     */
    _generateStratifiedRandomSignals(day: Date, windows: {
        startMinutes: number;
        endMinutes: number;
    }[], count: number, minIntervalMinutes: number): Date[];
    /**
     * Convert a linear offset (in minutes across all windows) to a minute-of-day value.
     */
    _offsetToMinuteOfDay(windows: {
        startMinutes: number;
        endMinutes: number;
    }[], offset: number): number;
    toJSON(): any;
}
export { parseDuration, parseTime, parseTimeRange, subtractExclusions };
