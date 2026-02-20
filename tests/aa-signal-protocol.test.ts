import { AASignalProtocol, parseDuration, parseTime, parseTimeRange, subtractExclusions } from '../src/customElements/aa-signal-protocol/aa-signal-protocol.ts';
import { assert } from '@esm-bundle/chai';

var container: any;

describe('aa-signal-protocol', () => {

    before(function () {
        container = document.querySelector('#container');
        if (!container) {
            container = document.createElement('div');
            container.id = 'container';
            document.body.appendChild(container);
        }
    });

    beforeEach(function () {
        container.innerHTML = '';
    });

    describe('parseDuration', function () {
        it('parses seconds', () => {
            assert.equal(parseDuration('30s'), 30000);
        });

        it('parses minutes', () => {
            assert.equal(parseDuration('15min'), 900000);
        });

        it('parses hours', () => {
            assert.equal(parseDuration('2h'), 7200000);
        });

        it('parses days', () => {
            assert.equal(parseDuration('1d'), 86400000);
        });

        it('throws on invalid format', () => {
            let threw = false;
            try {
                parseDuration('5m');
            } catch (e) {
                threw = true;
            }
            assert.isTrue(threw, 'should throw on invalid duration format');
        });

        it('throws on empty string', () => {
            let threw = false;
            try {
                parseDuration('');
            } catch (e) {
                threw = true;
            }
            assert.isTrue(threw, 'should throw on empty string');
        });
    });

    describe('parseTime', function () {
        it('parses HH:MM format', () => {
            const result = parseTime('09:30');
            assert.equal(result.hours, 9);
            assert.equal(result.minutes, 30);
        });

        it('parses single-digit hour', () => {
            const result = parseTime('8:00');
            assert.equal(result.hours, 8);
            assert.equal(result.minutes, 0);
        });

        it('throws on invalid format', () => {
            let threw = false;
            try {
                parseTime('9am');
            } catch (e) {
                threw = true;
            }
            assert.isTrue(threw);
        });
    });

    describe('parseTimeRange', function () {
        it('parses a time range', () => {
            const result = parseTimeRange('08:00-12:00');
            assert.equal(result.startMinutes, 480);
            assert.equal(result.endMinutes, 720);
        });

        it('throws on invalid range', () => {
            let threw = false;
            try {
                parseTimeRange('08:00');
            } catch (e) {
                threw = true;
            }
            assert.isTrue(threw);
        });
    });

    describe('subtractExclusions', function () {
        it('subtracts an exclusion from the middle of a window', () => {
            const windows = [{ startMinutes: 480, endMinutes: 1200 }]; // 08:00-20:00
            const exclusions = [{ startMinutes: 720, endMinutes: 780 }]; // 12:00-13:00
            const result = subtractExclusions(windows, exclusions);
            assert.equal(result.length, 2);
            assert.equal(result[0].startMinutes, 480);
            assert.equal(result[0].endMinutes, 720);
            assert.equal(result[1].startMinutes, 780);
            assert.equal(result[1].endMinutes, 1200);
        });

        it('returns empty array when exclusion covers entire window', () => {
            const windows = [{ startMinutes: 480, endMinutes: 720 }];
            const exclusions = [{ startMinutes: 480, endMinutes: 720 }];
            const result = subtractExclusions(windows, exclusions);
            assert.equal(result.length, 0);
        });

        it('returns original windows when no overlap', () => {
            const windows = [{ startMinutes: 480, endMinutes: 720 }];
            const exclusions = [{ startMinutes: 780, endMinutes: 840 }];
            const result = subtractExclusions(windows, exclusions);
            assert.equal(result.length, 1);
            assert.equal(result[0].startMinutes, 480);
            assert.equal(result[0].endMinutes, 720);
        });

        it('handles multiple exclusions from multiple windows', () => {
            const windows = [
                { startMinutes: 480, endMinutes: 720 },  // 08:00-12:00
                { startMinutes: 780, endMinutes: 1200 },  // 13:00-20:00
            ];
            const exclusions = [
                { startMinutes: 600, endMinutes: 660 },  // 10:00-11:00
                { startMinutes: 1020, endMinutes: 1080 }, // 17:00-18:00
            ];
            const result = subtractExclusions(windows, exclusions);
            assert.equal(result.length, 4);
        });
    });

    describe('element registration', function () {
        it('is registered as a custom element', () => {
            assert.isNotNull(customElements.get('aa-signal-protocol'));
        });

        it('can be created via document.createElement', () => {
            const el = document.createElement('aa-signal-protocol');
            assert.equal(el.tagName, 'AA-SIGNAL-PROTOCOL');
        });
    });

    describe('attribute parsing', function () {
        it('reads core schedule attributes', () => {
            container.innerHTML = `
                <aa-signal-protocol
                    id="p1"
                    name="test-protocol"
                    schedule-type="stratified-random"
                    signals-per-day="6"
                    window-start="08:00"
                    window-end="22:00">
                </aa-signal-protocol>`;
            const el = document.querySelector('#p1') as AASignalProtocol;
            assert.equal(el.name, 'test-protocol');
            assert.equal(el.scheduleType, 'stratified-random');
            assert.equal(el.signalsPerDay, '6');
            assert.equal(el.windowStart, '08:00');
            assert.equal(el.windowEnd, '22:00');
        });

        it('reads timing constraint attributes with defaults', () => {
            container.innerHTML = `
                <aa-signal-protocol
                    id="p1"
                    name="test"
                    schedule-type="fixed"
                    fixed-times="08:00">
                </aa-signal-protocol>`;
            const el = document.querySelector('#p1') as AASignalProtocol;
            assert.equal(el.minInterval, '15min');
            assert.equal(el.signalExpiry, '15min');
        });

        it('reads weekend override attributes', () => {
            container.innerHTML = `
                <aa-signal-protocol
                    id="p1"
                    name="test"
                    schedule-type="stratified-random"
                    signals-per-day="6"
                    window-start="08:00"
                    window-end="20:00"
                    weekend-signals-per-day="4"
                    weekend-window-start="10:00"
                    weekend-window-end="21:00">
                </aa-signal-protocol>`;
            const el = document.querySelector('#p1') as AASignalProtocol;
            assert.equal(el.weekendSignalsPerDay, '4');
            assert.equal(el.weekendWindowStart, '10:00');
            assert.equal(el.weekendWindowEnd, '21:00');
        });
    });

    describe('getProtocol', function () {
        it('returns a structured config object', () => {
            container.innerHTML = `
                <aa-signal-protocol
                    id="p1"
                    name="classic-esm"
                    schedule-type="stratified-random"
                    signals-per-day="8"
                    window-start="09:00"
                    window-end="22:00"
                    min-interval="20min"
                    signal-expiry="15min"
                    reminder-after="5min"
                    study-days="14">
                </aa-signal-protocol>`;
            const el = document.querySelector('#p1') as AASignalProtocol;
            const config = el.getProtocol();

            assert.equal(config.name, 'classic-esm');
            assert.equal(config.scheduleType, 'stratified-random');
            assert.equal(config.signalsPerDay, 8);
            assert.equal(config.windowStart, '09:00');
            assert.equal(config.windowEnd, '22:00');
            assert.equal(config.minInterval, '20min');
            assert.equal(config.signalExpiry, '15min');
            assert.equal(config.reminderAfter, '5min');
            assert.equal(config.studyDays, 14);
            assert.equal(config.activeDays, 'all');
            assert.isNull(config.fixedTimes);
            assert.isNull(config.excludeDates);
        });

        it('returns null for unset numeric attributes', () => {
            container.innerHTML = `
                <aa-signal-protocol
                    id="p1"
                    name="minimal"
                    schedule-type="fixed"
                    fixed-times="08:00">
                </aa-signal-protocol>`;
            const el = document.querySelector('#p1') as AASignalProtocol;
            const config = el.getProtocol();
            assert.isNull(config.signalsPerDay);
            assert.isNull(config.studyDays);
            assert.isNull(config.weekendSignalsPerDay);
        });
    });

    describe('validation', function () {
        it('warns when fixed schedule lacks fixed-times', () => {
            container.innerHTML = `
                <aa-signal-protocol
                    id="p1"
                    name="bad"
                    schedule-type="fixed">
                </aa-signal-protocol>`;
            const el = document.querySelector('#p1') as AASignalProtocol;
            const warnings = el.validate();
            assert.isTrue(warnings.some(w => w.includes('fixed-times')));
        });

        it('warns when random schedule lacks signals-per-day', () => {
            container.innerHTML = `
                <aa-signal-protocol
                    id="p1"
                    name="bad"
                    schedule-type="random"
                    window-start="08:00"
                    window-end="20:00">
                </aa-signal-protocol>`;
            const el = document.querySelector('#p1') as AASignalProtocol;
            const warnings = el.validate();
            assert.isTrue(warnings.some(w => w.includes('signals-per-day')));
        });

        it('warns when random schedule lacks windows', () => {
            container.innerHTML = `
                <aa-signal-protocol
                    id="p1"
                    name="bad"
                    schedule-type="stratified-random"
                    signals-per-day="6">
                </aa-signal-protocol>`;
            const el = document.querySelector('#p1') as AASignalProtocol;
            const warnings = el.validate();
            assert.isTrue(warnings.some(w => w.includes('window')));
        });

        it('warns when both signal-windows and window-start/end are set', () => {
            container.innerHTML = `
                <aa-signal-protocol
                    id="p1"
                    name="redundant"
                    schedule-type="stratified-random"
                    signals-per-day="6"
                    window-start="08:00"
                    window-end="20:00"
                    signal-windows="08:00-12:00;13:00-20:00">
                </aa-signal-protocol>`;
            const el = document.querySelector('#p1') as AASignalProtocol;
            const warnings = el.validate();
            assert.isTrue(warnings.some(w => w.includes('overrides')));
        });

        it('warns on infeasible schedule', () => {
            container.innerHTML = `
                <aa-signal-protocol
                    id="p1"
                    name="infeasible"
                    schedule-type="stratified-random"
                    signals-per-day="100"
                    window-start="09:00"
                    window-end="10:00"
                    min-interval="30min">
                </aa-signal-protocol>`;
            const el = document.querySelector('#p1') as AASignalProtocol;
            const warnings = el.validate();
            assert.isTrue(warnings.some(w => w.includes('Infeasible')));
        });

        it('warns on weekdays with weekend overrides', () => {
            container.innerHTML = `
                <aa-signal-protocol
                    id="p1"
                    name="mismatch"
                    schedule-type="fixed"
                    fixed-times="08:00"
                    active-days="weekdays"
                    weekend-signals-per-day="4">
                </aa-signal-protocol>`;
            const el = document.querySelector('#p1') as AASignalProtocol;
            const warnings = el.validate();
            assert.isTrue(warnings.some(w => w.includes('weekend')));
        });

        it('warns on invalid exclude-dates', () => {
            container.innerHTML = `
                <aa-signal-protocol
                    id="p1"
                    name="bad-dates"
                    schedule-type="fixed"
                    fixed-times="08:00"
                    exclude-dates="not-a-date">
                </aa-signal-protocol>`;
            const el = document.querySelector('#p1') as AASignalProtocol;
            const warnings = el.validate();
            assert.isTrue(warnings.some(w => w.includes('Invalid exclude-dates')));
        });

        it('returns no warnings for valid fixed configuration', () => {
            container.innerHTML = `
                <aa-signal-protocol
                    id="p1"
                    name="valid-fixed"
                    schedule-type="fixed"
                    fixed-times="08:00,14:00,21:00"
                    study-days="14">
                </aa-signal-protocol>`;
            const el = document.querySelector('#p1') as AASignalProtocol;
            const warnings = el.validate();
            assert.equal(warnings.length, 0);
        });

        it('returns no warnings for valid stratified-random configuration', () => {
            container.innerHTML = `
                <aa-signal-protocol
                    id="p1"
                    name="valid-sr"
                    schedule-type="stratified-random"
                    signals-per-day="6"
                    window-start="08:00"
                    window-end="22:00"
                    min-interval="20min">
                </aa-signal-protocol>`;
            const el = document.querySelector('#p1') as AASignalProtocol;
            const warnings = el.validate();
            assert.equal(warnings.length, 0);
        });
    });

    describe('getSignallingTimes', function () {
        it('returns fixed-time signals for fixed schedule', () => {
            container.innerHTML = `
                <aa-signal-protocol
                    id="p1"
                    name="fixed-test"
                    schedule-type="fixed"
                    fixed-times="08:00,14:00,21:00">
                </aa-signal-protocol>`;
            const el = document.querySelector('#p1') as AASignalProtocol;
            const start = new Date(2025, 0, 6); // Mon Jan 6
            const end = new Date(2025, 0, 6);   // Same day
            const times = el.getSignallingTimes(start, end);

            assert.equal(times.length, 3);
            assert.equal(times[0].getHours(), 8);
            assert.equal(times[0].getMinutes(), 0);
            assert.equal(times[1].getHours(), 14);
            assert.equal(times[2].getHours(), 21);
        });

        it('returns correct number of signals per day for stratified-random', () => {
            container.innerHTML = `
                <aa-signal-protocol
                    id="p1"
                    name="sr-test"
                    schedule-type="stratified-random"
                    signals-per-day="6"
                    window-start="08:00"
                    window-end="22:00"
                    min-interval="15min">
                </aa-signal-protocol>`;
            const el = document.querySelector('#p1') as AASignalProtocol;
            const start = new Date(2025, 0, 6);
            const end = new Date(2025, 0, 6);
            const times = el.getSignallingTimes(start, end);
            assert.equal(times.length, 6);
        });

        it('returns correct number of signals per day for random', () => {
            container.innerHTML = `
                <aa-signal-protocol
                    id="p1"
                    name="random-test"
                    schedule-type="random"
                    signals-per-day="5"
                    window-start="08:00"
                    window-end="22:00"
                    min-interval="15min">
                </aa-signal-protocol>`;
            const el = document.querySelector('#p1') as AASignalProtocol;
            const start = new Date(2025, 0, 6);
            const end = new Date(2025, 0, 6);
            const times = el.getSignallingTimes(start, end);
            assert.equal(times.length, 5);
        });

        it('generates signals across multiple days', () => {
            container.innerHTML = `
                <aa-signal-protocol
                    id="p1"
                    name="multi-day"
                    schedule-type="fixed"
                    fixed-times="08:00,20:00">
                </aa-signal-protocol>`;
            const el = document.querySelector('#p1') as AASignalProtocol;
            const start = new Date(2025, 0, 6);
            const end = new Date(2025, 0, 8); // 3 days
            const times = el.getSignallingTimes(start, end);
            assert.equal(times.length, 6); // 2 per day x 3 days
        });

        it('skips excluded dates', () => {
            container.innerHTML = `
                <aa-signal-protocol
                    id="p1"
                    name="exclude-test"
                    schedule-type="fixed"
                    fixed-times="08:00"
                    exclude-dates="2025-01-07">
                </aa-signal-protocol>`;
            const el = document.querySelector('#p1') as AASignalProtocol;
            const start = new Date(2025, 0, 6);
            const end = new Date(2025, 0, 8); // 3 days
            const times = el.getSignallingTimes(start, end);
            assert.equal(times.length, 2); // day 7 excluded
        });

        it('respects active-days="weekdays"', () => {
            container.innerHTML = `
                <aa-signal-protocol
                    id="p1"
                    name="weekday-test"
                    schedule-type="fixed"
                    fixed-times="08:00"
                    active-days="weekdays">
                </aa-signal-protocol>`;
            const el = document.querySelector('#p1') as AASignalProtocol;
            // Mon Jan 6 to Sun Jan 12 = 7 days, 5 weekdays
            const start = new Date(2025, 0, 6);
            const end = new Date(2025, 0, 12);
            const times = el.getSignallingTimes(start, end);
            assert.equal(times.length, 5);
        });

        it('respects active-days="weekends"', () => {
            container.innerHTML = `
                <aa-signal-protocol
                    id="p1"
                    name="weekend-test"
                    schedule-type="fixed"
                    fixed-times="10:00"
                    active-days="weekends">
                </aa-signal-protocol>`;
            const el = document.querySelector('#p1') as AASignalProtocol;
            // Mon Jan 6 to Sun Jan 12 = 7 days, 2 weekend days (Sat 11, Sun 12)
            const start = new Date(2025, 0, 6);
            const end = new Date(2025, 0, 12);
            const times = el.getSignallingTimes(start, end);
            assert.equal(times.length, 2);
        });

        it('respects active-days with specific days', () => {
            container.innerHTML = `
                <aa-signal-protocol
                    id="p1"
                    name="specific-days"
                    schedule-type="fixed"
                    fixed-times="08:00"
                    active-days="Mon,Wed,Fri">
                </aa-signal-protocol>`;
            const el = document.querySelector('#p1') as AASignalProtocol;
            // Mon Jan 6 to Sun Jan 12 = 7 days; Mon, Wed, Fri = 3 active
            const start = new Date(2025, 0, 6);
            const end = new Date(2025, 0, 12);
            const times = el.getSignallingTimes(start, end);
            assert.equal(times.length, 3);
        });

        it('applies weekend overrides on weekend days', () => {
            container.innerHTML = `
                <aa-signal-protocol
                    id="p1"
                    name="weekend-override"
                    schedule-type="fixed"
                    fixed-times="08:00,12:00,18:00"
                    weekend-fixed-times="10:00">
                </aa-signal-protocol>`;
            const el = document.querySelector('#p1') as AASignalProtocol;
            // Sat Jan 11
            const start = new Date(2025, 0, 11);
            const end = new Date(2025, 0, 11);
            const times = el.getSignallingTimes(start, end);
            assert.equal(times.length, 1);
            assert.equal(times[0].getHours(), 10);
        });

        it('combines fixed-times with stratified-random signals', () => {
            container.innerHTML = `
                <aa-signal-protocol
                    id="p1"
                    name="mixed"
                    schedule-type="stratified-random"
                    signals-per-day="3"
                    window-start="10:00"
                    window-end="20:00"
                    min-interval="15min"
                    fixed-times="07:30,22:00">
                </aa-signal-protocol>`;
            const el = document.querySelector('#p1') as AASignalProtocol;
            const start = new Date(2025, 0, 6);
            const end = new Date(2025, 0, 6);
            const times = el.getSignallingTimes(start, end);
            assert.equal(times.length, 5); // 3 stratified + 2 fixed
        });

        it('signals fall within the specified windows', () => {
            container.innerHTML = `
                <aa-signal-protocol
                    id="p1"
                    name="window-check"
                    schedule-type="stratified-random"
                    signals-per-day="6"
                    window-start="09:00"
                    window-end="17:00"
                    min-interval="15min">
                </aa-signal-protocol>`;
            const el = document.querySelector('#p1') as AASignalProtocol;
            const start = new Date(2025, 0, 6);
            const end = new Date(2025, 0, 6);
            const times = el.getSignallingTimes(start, end);

            for (const t of times) {
                const minuteOfDay = t.getHours() * 60 + t.getMinutes();
                assert.isAtLeast(minuteOfDay, 540, 'signal should be at or after 09:00');
                assert.isAtMost(minuteOfDay, 1020, 'signal should be at or before 17:00');
            }
        });

        it('returns sorted times', () => {
            container.innerHTML = `
                <aa-signal-protocol
                    id="p1"
                    name="sort-check"
                    schedule-type="stratified-random"
                    signals-per-day="8"
                    window-start="08:00"
                    window-end="22:00"
                    min-interval="15min"
                    fixed-times="07:00,23:00">
                </aa-signal-protocol>`;
            const el = document.querySelector('#p1') as AASignalProtocol;
            const start = new Date(2025, 0, 6);
            const end = new Date(2025, 0, 8);
            const times = el.getSignallingTimes(start, end);

            for (let i = 1; i < times.length; i++) {
                assert.isTrue(times[i].getTime() >= times[i - 1].getTime(), 'times should be sorted');
            }
        });

        it('handles signal-windows with exclude-times', () => {
            container.innerHTML = `
                <aa-signal-protocol
                    id="p1"
                    name="excl-test"
                    schedule-type="stratified-random"
                    signals-per-day="4"
                    signal-windows="08:00-12:00;13:00-20:00"
                    exclude-times="10:00-10:30"
                    min-interval="15min">
                </aa-signal-protocol>`;
            const el = document.querySelector('#p1') as AASignalProtocol;
            const start = new Date(2025, 0, 6);
            const end = new Date(2025, 0, 6);
            const times = el.getSignallingTimes(start, end);
            assert.equal(times.length, 4);

            // Verify no signal falls in the excluded range
            for (const t of times) {
                const minuteOfDay = t.getHours() * 60 + t.getMinutes();
                assert.isFalse(minuteOfDay >= 600 && minuteOfDay < 630,
                    'signal should not fall in excluded range 10:00-10:30');
            }
        });

        it('returns empty array when no days are active', () => {
            container.innerHTML = `
                <aa-signal-protocol
                    id="p1"
                    name="no-active"
                    schedule-type="fixed"
                    fixed-times="08:00"
                    active-days="weekends">
                </aa-signal-protocol>`;
            const el = document.querySelector('#p1') as AASignalProtocol;
            // Mon-Fri only, but active-days=weekends
            const start = new Date(2025, 0, 6); // Monday
            const end = new Date(2025, 0, 10);  // Friday
            const times = el.getSignallingTimes(start, end);
            assert.equal(times.length, 0);
        });
    });

    describe('toJSON', function () {
        it('serializes the element to JSON', () => {
            container.innerHTML = `
                <aa-signal-protocol
                    id="p1"
                    name="json-test"
                    schedule-type="stratified-random"
                    signals-per-day="6"
                    window-start="08:00"
                    window-end="22:00">
                </aa-signal-protocol>`;
            const el = document.querySelector('#p1') as AASignalProtocol;
            const json = el.toJSON();

            assert.isNotNull(json);
            assert.isTrue('aa-signal-protocol' in json);
            assert.equal(json['aa-signal-protocol'].name, 'json-test');
            assert.equal(json['aa-signal-protocol']['schedule-type'], 'stratified-random');
        });
    });

    describe('protocolReady event', function () {
        it('dispatches protocolReady event on connected', (done) => {
            const el = document.createElement('aa-signal-protocol');
            el.setAttribute('name', 'event-test');
            el.setAttribute('schedule-type', 'fixed');
            el.setAttribute('fixed-times', '08:00');

            el.addEventListener('protocolReady', () => {
                done();
            });

            container.appendChild(el);
        });
    });

    describe('integration with aa-session', function () {
        it('wraps aa-session and both are queryable', () => {
            container.innerHTML = `
                <aa-signal-protocol
                    id="p1"
                    name="integration-test"
                    schedule-type="fixed"
                    fixed-times="08:00">
                    <aa-session name="mood-study" should-run="false">
                        <template><div>test</div></template>
                    </aa-session>
                </aa-signal-protocol>`;

            const protocol = container.querySelector('aa-signal-protocol');
            assert.isNotNull(protocol, 'protocol element should be queryable');

            const session = protocol.querySelector('aa-session');
            assert.isNotNull(session, 'session should be a child of protocol');
            assert.equal(session.getAttribute('name'), 'mood-study');
        });
    });

    describe('example configurations', function () {
        it('Classic Stratified-Random ESM', () => {
            container.innerHTML = `
                <aa-signal-protocol
                    id="p1"
                    name="classic-esm"
                    schedule-type="stratified-random"
                    signals-per-day="8"
                    window-start="09:00"
                    window-end="22:00"
                    min-interval="20min"
                    signal-expiry="15min"
                    reminder-after="5min"
                    study-days="14">
                </aa-signal-protocol>`;
            const el = document.querySelector('#p1') as AASignalProtocol;
            const config = el.getProtocol();
            assert.equal(config.scheduleType, 'stratified-random');
            assert.equal(config.signalsPerDay, 8);
            assert.equal(config.studyDays, 14);

            const warnings = el.validate();
            assert.equal(warnings.length, 0);
        });

        it('Weekday/Weekend Split with Blackout', () => {
            container.innerHTML = `
                <aa-signal-protocol
                    id="p1"
                    name="work-stress"
                    schedule-type="stratified-random"
                    signals-per-day="6"
                    signal-windows="08:00-12:00;13:00-20:00"
                    min-interval="30min"
                    signal-expiry="20min"
                    weekend-signals-per-day="4"
                    weekend-signal-windows="10:00-21:00"
                    start-date="2025-09-01"
                    end-date="2025-09-21">
                </aa-signal-protocol>`;
            const el = document.querySelector('#p1') as AASignalProtocol;
            const config = el.getProtocol();
            assert.equal(config.signalsPerDay, 6);
            assert.equal(config.weekendSignalsPerDay, 4);
            assert.equal(config.signalWindows, '08:00-12:00;13:00-20:00');
            assert.equal(config.weekendSignalWindows, '10:00-21:00');

            const warnings = el.validate();
            assert.equal(warnings.length, 0);
        });

        it('Fixed Diary + Random Signals', () => {
            container.innerHTML = `
                <aa-signal-protocol
                    id="p1"
                    name="mixed-protocol"
                    schedule-type="stratified-random"
                    signals-per-day="5"
                    window-start="10:00"
                    window-end="20:00"
                    min-interval="30min"
                    fixed-times="07:30,22:00"
                    fixed-times-label="diary"
                    study-days="7">
                </aa-signal-protocol>`;
            const el = document.querySelector('#p1') as AASignalProtocol;
            const config = el.getProtocol();
            assert.equal(config.fixedTimes, '07:30,22:00');
            assert.equal(config.fixedTimesLabel, 'diary');

            // Generate signals and verify fixed + random
            const start = new Date(2025, 0, 6);
            const end = new Date(2025, 0, 6);
            const times = el.getSignallingTimes(start, end);
            assert.equal(times.length, 7); // 5 stratified + 2 fixed

            const warnings = el.validate();
            assert.equal(warnings.length, 0);
        });

        it('Fixed-Time Only (No Randomness)', () => {
            container.innerHTML = `
                <aa-signal-protocol
                    id="p1"
                    name="daily-diary"
                    schedule-type="fixed"
                    fixed-times="08:00,14:00,21:00"
                    signal-expiry="30min"
                    reminder-after="15min"
                    reminder-count="2"
                    active-days="weekdays"
                    study-days="21">
                </aa-signal-protocol>`;
            const el = document.querySelector('#p1') as AASignalProtocol;
            const config = el.getProtocol();
            assert.equal(config.scheduleType, 'fixed');
            assert.equal(config.fixedTimes, '08:00,14:00,21:00');
            assert.equal(config.reminderCount, 2);
            assert.equal(config.activeDays, 'weekdays');

            const warnings = el.validate();
            assert.equal(warnings.length, 0);
        });
    });
});
