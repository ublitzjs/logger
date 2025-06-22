type stdConsoleFn = (topic: string, ...data: any[]) => any;
type baseConsole = Record<"error" | "warn" | "log" | "info", stdConsoleFn>;
type lightConsoleFn = (label: string) => void;
type specConsole = Record<"group" | "time" | "timeEnd", lightConsoleFn> & {
  groupEnd(): void;
};
/**
 * Additional surprise for users - error: RED, log: GRAY, info: GREEN, warn: YELLOW, group: CYAN, time: MAGENTA
 * Remember - it is SLOWING DOWN YOUR SERVER (built on top of node:console it is quite inefficient).
 */
export var logger: baseConsole & specConsole;
