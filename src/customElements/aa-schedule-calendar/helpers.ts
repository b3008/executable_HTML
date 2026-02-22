export type { SignalProtocolConfig } from "../aa-signal-protocol/aa-signal-protocol";

export function pad(n: number): string {
  return String(n).padStart(2, "0");
}

export function fmtDate(d: Date): string {
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}

export function fmtTime(d: Date): string {
  return `${pad(d.getHours())}:${pad(d.getMinutes())}`;
}

export const DAY_NAMES = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export const MONTH_NAMES = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

/** Convert "HH:MM" to minute-of-day (0–1439). */
export function parseTimeToMinutes(str: string): number {
  const [h, m] = str.split(":").map(Number);
  return h * 60 + (m || 0);
}

/** Parse semicolon-separated "HH:MM-HH:MM" ranges. */
export function parseTimeRanges(str: string): { start: number; end: number }[] {
  return str
    .split(";")
    .map((s) => s.trim())
    .filter(Boolean)
    .map((r) => {
      const [a, b] = r.split("-");
      return { start: parseTimeToMinutes(a), end: parseTimeToMinutes(b) };
    });
}

/** Convert duration micro-syntax ("30s", "15min", "2h", "1d") to minutes. */
export function parseDurationToMinutes(str: string): number {
  const m = str.match(/^(\d+(?:\.\d+)?)\s*(s|sec|min|h|hr|d)$/i);
  if (!m) return 0;
  const val = parseFloat(m[1]);
  switch (m[2].toLowerCase()) {
    case "s":
    case "sec":
      return val / 60;
    case "min":
      return val;
    case "h":
    case "hr":
      return val * 60;
    case "d":
      return val * 1440;
    default:
      return 0;
  }
}

/** Check if a Date falls on a weekend (Sat/Sun). */
export function isWeekend(d: Date): boolean {
  const dow = d.getDay();
  return dow === 0 || dow === 6;
}

const DAY_NAME_MAP: Record<string, number> = {
  sun: 0, mon: 1, tue: 2, wed: 3, thu: 4, fri: 5, sat: 6,
  sunday: 0, monday: 1, tuesday: 2, wednesday: 3, thursday: 4, friday: 5, saturday: 6,
};

/** Check if a day matches an activeDays specifier ("all", "weekdays", "weekends", or comma-separated day names). */
export function isDayActive(day: Date, activeDays: string): boolean {
  const ad = activeDays.trim().toLowerCase();
  if (ad === "" || ad === "all") return true;
  if (ad === "weekdays") return !isWeekend(day);
  if (ad === "weekends") return isWeekend(day);
  const names = ad.split(",").map((s) => s.trim());
  const dow = day.getDay();
  return names.some((n) => DAY_NAME_MAP[n] === dow);
}

/** Check if a day is in a comma-separated YYYY-MM-DD exclusion list. */
export function isDayExcluded(day: Date, excludeDates: string | null): boolean {
  if (!excludeDates) return false;
  const key = fmtDate(day);
  return excludeDates
    .split(",")
    .map((s) => s.trim())
    .includes(key);
}
