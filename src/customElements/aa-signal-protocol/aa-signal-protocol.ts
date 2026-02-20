import { AABaseElement, type AAPropertiesMap } from '../aa-base-element/aa-base-element';

/**
 * Parse a duration micro-syntax string into milliseconds.
 * Supported formats: `30s`, `15min`, `2h`, `1d`
 */
function parseDuration(str: string): number {
    const match = str.trim().match(/^(\d+)(s|min|h|d)$/);
    if (!match) {
        throw new Error(`Invalid duration format: "${str}". Expected format like 30s, 15min, 2h, 1d`);
    }
    const value = parseInt(match[1], 10);
    const unit = match[2];
    switch (unit) {
        case 's': return value * 1000;
        case 'min': return value * 60 * 1000;
        case 'h': return value * 60 * 60 * 1000;
        case 'd': return value * 24 * 60 * 60 * 1000;
        default: throw new Error(`Unknown duration unit: ${unit}`);
    }
}

/**
 * Parse an HH:MM time string into { hours, minutes }.
 */
function parseTime(str: string): { hours: number; minutes: number } {
    const match = str.trim().match(/^(\d{1,2}):(\d{2})$/);
    if (!match) {
        throw new Error(`Invalid time format: "${str}". Expected HH:MM`);
    }
    return { hours: parseInt(match[1], 10), minutes: parseInt(match[2], 10) };
}

/**
 * Parse a time range like "08:00-12:00" into start/end minute-of-day.
 */
function parseTimeRange(str: string): { startMinutes: number; endMinutes: number } {
    const parts = str.trim().split('-');
    if (parts.length !== 2) {
        throw new Error(`Invalid time range: "${str}". Expected HH:MM-HH:MM`);
    }
    const start = parseTime(parts[0]);
    const end = parseTime(parts[1]);
    return {
        startMinutes: start.hours * 60 + start.minutes,
        endMinutes: end.hours * 60 + end.minutes,
    };
}

/**
 * Convert minute-of-day windows into an array of { startMinutes, endMinutes } ranges,
 * subtracting any exclusion ranges.
 */
function subtractExclusions(
    windows: { startMinutes: number; endMinutes: number }[],
    exclusions: { startMinutes: number; endMinutes: number }[]
): { startMinutes: number; endMinutes: number }[] {
    let result = [...windows];
    for (const excl of exclusions) {
        const next: { startMinutes: number; endMinutes: number }[] = [];
        for (const w of result) {
            if (excl.startMinutes >= w.endMinutes || excl.endMinutes <= w.startMinutes) {
                // No overlap
                next.push(w);
            } else {
                // Left portion
                if (excl.startMinutes > w.startMinutes) {
                    next.push({ startMinutes: w.startMinutes, endMinutes: excl.startMinutes });
                }
                // Right portion
                if (excl.endMinutes < w.endMinutes) {
                    next.push({ startMinutes: excl.endMinutes, endMinutes: w.endMinutes });
                }
            }
        }
        result = next;
    }
    return result;
}

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

const DAY_NAMES = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export class AASignalProtocol extends AABaseElement {

    static get tag(): string {
        return 'aa-signal-protocol';
    }

    static get properties(): AAPropertiesMap {
        return {
            ...AABaseElement.properties,

            'schedule-type': {
                type: String,
                userDefined: true,
            },
            'signals-per-day': {
                type: Number,
                userDefined: true,
            },
            'window-start': {
                type: String,
                userDefined: true,
            },
            'window-end': {
                type: String,
                userDefined: true,
            },
            'signal-windows': {
                type: String,
                userDefined: true,
            },
            'min-interval': {
                type: String,
                value: '15min',
                userDefined: true,
            },
            'signal-expiry': {
                type: String,
                value: '15min',
                userDefined: true,
            },
            'reminder-after': {
                type: String,
                userDefined: true,
            },
            'reminder-count': {
                type: Number,
                value: '1',
                userDefined: true,
            },
            'study-days': {
                type: Number,
                userDefined: true,
            },
            'start-date': {
                type: String,
                userDefined: true,
            },
            'end-date': {
                type: String,
                userDefined: true,
            },
            'active-days': {
                type: String,
                value: 'all',
                userDefined: true,
            },
            'fixed-times': {
                type: String,
                userDefined: true,
            },
            'fixed-times-label': {
                type: String,
                userDefined: true,
            },
            'exclude-dates': {
                type: String,
                userDefined: true,
            },
            'exclude-times': {
                type: String,
                userDefined: true,
            },
            'weekend-signals-per-day': {
                type: Number,
                userDefined: true,
            },
            'weekend-window-start': {
                type: String,
                userDefined: true,
            },
            'weekend-window-end': {
                type: String,
                userDefined: true,
            },
            'weekend-signal-windows': {
                type: String,
                userDefined: true,
            },
            'weekend-fixed-times': {
                type: String,
                userDefined: true,
            },
        };
    }

    static get observedAttributes(): string[] {
        return Object.keys(AASignalProtocol.properties);
    }

    declare name: string;
    declare scheduleType: string;
    declare signalsPerDay: string | null;
    declare windowStart: string | null;
    declare windowEnd: string | null;
    declare signalWindows: string | null;
    declare minInterval: string;
    declare signalExpiry: string;
    declare reminderAfter: string | null;
    declare reminderCount: string | null;
    declare studyDays: string | null;
    declare startDate: string | null;
    declare endDate: string | null;
    declare activeDays: string;
    declare fixedTimes: string | null;
    declare fixedTimesLabel: string | null;
    declare excludeDates: string | null;
    declare excludeTimes: string | null;
    declare weekendSignalsPerDay: string | null;
    declare weekendWindowStart: string | null;
    declare weekendWindowEnd: string | null;
    declare weekendSignalWindows: string | null;
    declare weekendFixedTimes: string | null;

    constructor() {
        super();
    }

    connectedCallback(): void {
        super.connectedCallback();
        this.validate();
        setTimeout(() => {
            this.dispatchEvent(new CustomEvent('protocolReady', { bubbles: true }));
        }, 0);
    }

    /**
     * Validate the protocol configuration and warn about issues.
     */
    validate(): string[] {
        const warnings: string[] = [];
        const scheduleType = this.scheduleType;

        // Rule 1: fixed requires fixed-times
        if (scheduleType === 'fixed') {
            if (!this.fixedTimes) {
                warnings.push('schedule-type="fixed" requires fixed-times attribute');
            }
        }

        // Rule 2: random/stratified-random require signals-per-day and windows
        if (scheduleType === 'random' || scheduleType === 'stratified-random') {
            if (!this.signalsPerDay) {
                warnings.push(`schedule-type="${scheduleType}" requires signals-per-day attribute`);
            }
            if (!this.signalWindows && (!this.windowStart || !this.windowEnd)) {
                warnings.push(`schedule-type="${scheduleType}" requires either signal-windows or both window-start and window-end`);
            }
        }

        // Rule 3: warn if both signal-windows and window-start/window-end are set
        if (this.signalWindows && (this.windowStart || this.windowEnd)) {
            warnings.push('signal-windows overrides window-start/window-end; both are set');
        }

        // Rule 4: feasibility check
        if ((scheduleType === 'random' || scheduleType === 'stratified-random') && this.signalsPerDay) {
            const windows = this._getEffectiveWindows(false);
            const totalMinutes = windows.reduce((sum, w) => sum + (w.endMinutes - w.startMinutes), 0);
            const perDay = parseInt(this.signalsPerDay, 10);
            const minIntervalMs = parseDuration(this.minInterval || '15min');
            const minIntervalMinutes = minIntervalMs / 60000;
            if (perDay > 0 && totalMinutes / perDay < minIntervalMinutes) {
                warnings.push(`Infeasible: total window duration (${totalMinutes}min) / signals-per-day (${perDay}) < min-interval (${minIntervalMinutes}min)`);
            }
        }

        // Rule 6: warn if active-days="weekdays" but weekend overrides present
        if (this.activeDays === 'weekdays') {
            if (this.weekendSignalsPerDay || this.weekendWindowStart || this.weekendWindowEnd || this.weekendSignalWindows || this.weekendFixedTimes) {
                warnings.push('active-days="weekdays" but weekend-* overrides are present (they will be ignored)');
            }
        }

        // Rule 7: validate exclude-dates format
        if (this.excludeDates) {
            const dates = this.excludeDates.split(',').map(d => d.trim());
            for (const d of dates) {
                if (!/^\d{4}-\d{2}-\d{2}$/.test(d) || isNaN(new Date(d).getTime())) {
                    warnings.push(`Invalid exclude-dates value: "${d}". Expected YYYY-MM-DD`);
                }
            }
        }

        // Rule 8: check that exclude-times don't completely cover signal windows
        if (this.excludeTimes) {
            const windows = this._getBaseWindows(false);
            const exclusions = this.excludeTimes.split(';').map(r => parseTimeRange(r));
            const effective = subtractExclusions(windows, exclusions);
            if (effective.length === 0) {
                warnings.push('exclude-times completely covers the signal window; no room for signals');
            }
        }

        for (const w of warnings) {
            console.warn(`[aa-signal-protocol "${this.name || ''}"] ${w}`);
        }

        return warnings;
    }

    /**
     * Get the base windows (before exclusions) for a day.
     * @param isWeekend - whether to use weekend overrides
     */
    _getBaseWindows(isWeekend: boolean): { startMinutes: number; endMinutes: number }[] {
        // Check for explicit signal-windows (or weekend override)
        const windowsAttr = isWeekend && this.weekendSignalWindows
            ? this.weekendSignalWindows
            : this.signalWindows;

        if (windowsAttr) {
            return windowsAttr.split(';').map(r => parseTimeRange(r));
        }

        // Fall back to window-start / window-end
        const start = isWeekend && this.weekendWindowStart
            ? this.weekendWindowStart
            : this.windowStart;
        const end = isWeekend && this.weekendWindowEnd
            ? this.weekendWindowEnd
            : this.windowEnd;

        if (start && end) {
            const s = parseTime(start);
            const e = parseTime(end);
            return [{ startMinutes: s.hours * 60 + s.minutes, endMinutes: e.hours * 60 + e.minutes }];
        }

        return [];
    }

    /**
     * Get the effective windows (after exclusions) for a day.
     */
    _getEffectiveWindows(isWeekend: boolean): { startMinutes: number; endMinutes: number }[] {
        let windows = this._getBaseWindows(isWeekend);

        if (this.excludeTimes) {
            const exclusions = this.excludeTimes.split(';').map(r => parseTimeRange(r));
            windows = subtractExclusions(windows, exclusions);
        }

        return windows;
    }

    /**
     * Check if a specific date is active (not excluded by active-days or exclude-dates).
     */
    _isDayActive(date: Date): boolean {
        const dayOfWeek = date.getDay(); // 0=Sun, 6=Sat
        const dayName = DAY_NAMES[dayOfWeek];

        // Check active-days
        const activeDays = this.activeDays || 'all';
        if (activeDays !== 'all') {
            if (activeDays === 'weekdays' && (dayOfWeek === 0 || dayOfWeek === 6)) return false;
            if (activeDays === 'weekends' && dayOfWeek !== 0 && dayOfWeek !== 6) return false;
            if (activeDays !== 'weekdays' && activeDays !== 'weekends') {
                const allowedDays = activeDays.split(',').map(d => d.trim());
                if (!allowedDays.includes(dayName)) return false;
            }
        }

        // Check exclude-dates
        if (this.excludeDates) {
            const dateStr = date.getFullYear() + '-' +
                String(date.getMonth() + 1).padStart(2, '0') + '-' +
                String(date.getDate()).padStart(2, '0');
            const excluded = this.excludeDates.split(',').map(d => d.trim());
            if (excluded.includes(dateStr)) return false;
        }

        return true;
    }

    /**
     * Get a structured protocol configuration object.
     */
    getProtocol(): SignalProtocolConfig {
        return {
            name: this.name,
            scheduleType: this.scheduleType as SignalProtocolConfig['scheduleType'],
            signalsPerDay: this.signalsPerDay ? parseInt(this.signalsPerDay, 10) : null,
            windowStart: this.windowStart || null,
            windowEnd: this.windowEnd || null,
            signalWindows: this.signalWindows || null,
            minInterval: this.minInterval || '15min',
            signalExpiry: this.signalExpiry || '15min',
            reminderAfter: this.reminderAfter || null,
            reminderCount: this.reminderCount ? parseInt(this.reminderCount, 10) : 1,
            studyDays: this.studyDays ? parseInt(this.studyDays, 10) : null,
            startDate: this.startDate || null,
            endDate: this.endDate || null,
            activeDays: this.activeDays || 'all',
            fixedTimes: this.fixedTimes || null,
            fixedTimesLabel: this.fixedTimesLabel || null,
            excludeDates: this.excludeDates || null,
            excludeTimes: this.excludeTimes || null,
            weekendSignalsPerDay: this.weekendSignalsPerDay ? parseInt(this.weekendSignalsPerDay, 10) : null,
            weekendWindowStart: this.weekendWindowStart || null,
            weekendWindowEnd: this.weekendWindowEnd || null,
            weekendSignalWindows: this.weekendSignalWindows || null,
            weekendFixedTimes: this.weekendFixedTimes || null,
        };
    }

    /**
     * Compute concrete signal times for a given date range.
     *
     * Iterates over each active day in [start, end], applies the scheduling algorithm,
     * and returns a sorted array of Date objects.
     *
     * For `random` and `stratified-random`, results are non-deterministic.
     * External systems should call this once and cache/persist the schedule.
     */
    getSignallingTimes(start: Date, end: Date): Date[] {
        const signals: Date[] = [];
        const current = new Date(start.getFullYear(), start.getMonth(), start.getDate());
        const endDay = new Date(end.getFullYear(), end.getMonth(), end.getDate());

        while (current <= endDay) {
            if (this._isDayActive(current)) {
                const isWeekend = current.getDay() === 0 || current.getDay() === 6;
                const daySignals = this._generateDaySignals(current, isWeekend);
                signals.push(...daySignals);
            }
            current.setDate(current.getDate() + 1);
        }

        signals.sort((a, b) => a.getTime() - b.getTime());
        return signals;
    }

    /**
     * Generate signals for a single day.
     */
    _generateDaySignals(day: Date, isWeekend: boolean): Date[] {
        const signals: Date[] = [];
        const scheduleType = this.scheduleType;

        // Get effective signal count for this day
        const signalsPerDayAttr = isWeekend && this.weekendSignalsPerDay
            ? this.weekendSignalsPerDay
            : this.signalsPerDay;
        const signalsPerDay = signalsPerDayAttr ? parseInt(String(signalsPerDayAttr), 10) : 0;

        // Get effective windows
        const windows = this._getEffectiveWindows(isWeekend);

        // Get min-interval in minutes
        const minIntervalMs = parseDuration(this.minInterval || '15min');
        const minIntervalMinutes = minIntervalMs / 60000;

        // Generate scheduled (non-fixed) signals
        if (scheduleType === 'fixed') {
            // fixed-time only: all signals come from fixed-times
        } else if (scheduleType === 'random') {
            const randomSignals = this._generateRandomSignals(day, windows, signalsPerDay, minIntervalMinutes);
            signals.push(...randomSignals);
        } else if (scheduleType === 'stratified-random') {
            const stratifiedSignals = this._generateStratifiedRandomSignals(day, windows, signalsPerDay, minIntervalMinutes);
            signals.push(...stratifiedSignals);
        }

        // Append fixed-times signals (independent of random schedule)
        const fixedTimesAttr = isWeekend && this.weekendFixedTimes
            ? this.weekendFixedTimes
            : this.fixedTimes;

        if (fixedTimesAttr) {
            const times = fixedTimesAttr.split(',').map(t => t.trim());
            for (const t of times) {
                const parsed = parseTime(t);
                const d = new Date(day.getFullYear(), day.getMonth(), day.getDate(), parsed.hours, parsed.minutes);
                signals.push(d);
            }
        }

        return signals;
    }

    /**
     * Generate random signals uniformly distributed within effective windows.
     */
    _generateRandomSignals(
        day: Date,
        windows: { startMinutes: number; endMinutes: number }[],
        count: number,
        minIntervalMinutes: number,
    ): Date[] {
        if (windows.length === 0 || count <= 0) return [];

        // Flatten windows into total available minutes
        const totalMinutes = windows.reduce((sum, w) => sum + (w.endMinutes - w.startMinutes), 0);
        if (totalMinutes <= 0) return [];

        const signals: number[] = []; // minute-of-day values
        let attempts = 0;
        const maxAttempts = count * 100;

        while (signals.length < count && attempts < maxAttempts) {
            attempts++;
            // Pick a random minute within the total window span
            const randomOffset = Math.random() * totalMinutes;
            let minuteOfDay = 0;
            let accumulated = 0;
            for (const w of windows) {
                const windowSize = w.endMinutes - w.startMinutes;
                if (accumulated + windowSize > randomOffset) {
                    minuteOfDay = w.startMinutes + (randomOffset - accumulated);
                    break;
                }
                accumulated += windowSize;
            }

            // Check min-interval constraint
            const tooClose = signals.some(s => Math.abs(s - minuteOfDay) < minIntervalMinutes);
            if (!tooClose) {
                signals.push(minuteOfDay);
            }
        }

        return signals.map(m => {
            const hours = Math.floor(m / 60);
            const minutes = Math.floor(m % 60);
            return new Date(day.getFullYear(), day.getMonth(), day.getDate(), hours, minutes);
        });
    }

    /**
     * Generate stratified-random signals: divide windows into N equal blocks,
     * one random signal per block.
     */
    _generateStratifiedRandomSignals(
        day: Date,
        windows: { startMinutes: number; endMinutes: number }[],
        count: number,
        minIntervalMinutes: number,
    ): Date[] {
        if (windows.length === 0 || count <= 0) return [];

        const totalMinutes = windows.reduce((sum, w) => sum + (w.endMinutes - w.startMinutes), 0);
        if (totalMinutes <= 0) return [];

        const blockSize = totalMinutes / count;
        const signals: number[] = [];

        for (let i = 0; i < count; i++) {
            const blockStart = i * blockSize;
            const blockEnd = (i + 1) * blockSize;

            // Pick a random point within this block
            let randomOffset = blockStart + Math.random() * (blockEnd - blockStart);

            // Map offset back to minute-of-day considering windows
            let minuteOfDay = this._offsetToMinuteOfDay(windows, randomOffset);

            // Apply min-interval constraint with retry within block
            let attempts = 0;
            while (attempts < 50) {
                const tooClose = signals.some(s => Math.abs(s - minuteOfDay) < minIntervalMinutes);
                if (!tooClose) break;
                randomOffset = blockStart + Math.random() * (blockEnd - blockStart);
                minuteOfDay = this._offsetToMinuteOfDay(windows, randomOffset);
                attempts++;
            }

            signals.push(minuteOfDay);
        }

        return signals.map(m => {
            const hours = Math.floor(m / 60);
            const minutes = Math.floor(m % 60);
            return new Date(day.getFullYear(), day.getMonth(), day.getDate(), hours, minutes);
        });
    }

    /**
     * Convert a linear offset (in minutes across all windows) to a minute-of-day value.
     */
    _offsetToMinuteOfDay(
        windows: { startMinutes: number; endMinutes: number }[],
        offset: number,
    ): number {
        let accumulated = 0;
        for (const w of windows) {
            const windowSize = w.endMinutes - w.startMinutes;
            if (accumulated + windowSize > offset) {
                return w.startMinutes + (offset - accumulated);
            }
            accumulated += windowSize;
        }
        // Fallback: end of last window
        return windows[windows.length - 1].endMinutes;
    }

    toJSON(): any {
        const result: any = {};
        const tagName = this.tagName.toLowerCase();
        result[tagName] = this.getAttributes();

        if (this.childNodes.length) {
            result[tagName].childNodes = [];
            this.childNodes.forEach(childNode => {
                const el = AABaseElement.nodeToJSON(childNode);
                if (el) {
                    result[tagName].childNodes.push(el);
                }
            });
        }

        return result;
    }
}

export { parseDuration, parseTime, parseTimeRange, subtractExclusions };

AABaseElement.registerAAElement('aa-signal-protocol', AASignalProtocol);
