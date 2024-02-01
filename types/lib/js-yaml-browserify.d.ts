export = Type;
export = Type;
declare function Type(tag: any, options: any): void;
declare class Type {
    constructor(tag: any, options: any);
    tag: any;
    kind: any;
    resolve: any;
    construct: any;
    instanceOf: any;
    predicate: any;
    represent: any;
    defaultStyle: any;
    styleAliases: {};
}
declare namespace Type {
    export { Type, Schema, FAILSAFE_SCHEMA, JSON_SCHEMA, CORE_SCHEMA, DEFAULT_SAFE_SCHEMA, DEFAULT_FULL_SCHEMA, load, loadAll, safeLoad, safeLoadAll, dump, safeDump, YAMLException, MINIMAL_SCHEMA, SAFE_SCHEMA, DEFAULT_SCHEMA, scan, parse, compose, addConstructor, isNothing, isObject, toArray, repeat, isNegativeZero, extend };
}
declare const Type: any;
declare const Schema: any;
declare const FAILSAFE_SCHEMA: any;
declare const JSON_SCHEMA: any;
declare const CORE_SCHEMA: any;
declare const DEFAULT_SAFE_SCHEMA: any;
declare const DEFAULT_FULL_SCHEMA: any;
declare function load(input: any, options: any): any;
declare function loadAll(input: any, iterator: any, options: any): any[] | undefined;
declare function safeLoad(input: any, options: any): any;
declare function safeLoadAll(input: any, iterator: any, options: any): any[] | undefined;
declare function dump(input: any, options: any): string;
declare function safeDump(input: any, options: any): string;
declare const YAMLException: any;
declare const MINIMAL_SCHEMA: any;
declare const SAFE_SCHEMA: any;
declare const DEFAULT_SCHEMA: any;
declare function scan(): never;
declare function parse(): never;
declare function compose(): never;
declare function addConstructor(): never;
declare function isNothing(subject: any): boolean;
declare function isObject(subject: any): boolean;
declare function toArray(sequence: any): any[];
declare function repeat(string: any, count: any): string;
declare function isNegativeZero(number: any): boolean;
declare function extend(target: any, source: any): any;
