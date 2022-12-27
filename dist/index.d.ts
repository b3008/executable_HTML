export = parse;
export = parse;
declare function jsep(expr: any): any;
declare namespace jsep {
    export { version, toString, addUnaryOp, addBinaryOp, addLiteral, removeUnaryOp, removeAllUnaryOps, removeBinaryOp, removeAllBinaryOps, removeLiteral, removeAllLiterals, noConflict, Type, Schema, FAILSAFE_SCHEMA, JSON_SCHEMA, CORE_SCHEMA, DEFAULT_SAFE_SCHEMA, DEFAULT_FULL_SCHEMA, load, loadAll, safeLoad, safeLoadAll, dump, safeDump, YAMLException, MINIMAL_SCHEMA, SAFE_SCHEMA, DEFAULT_SCHEMA, scan, jsep as parse, compose, addConstructor, isNothing, isObject, toArray, repeat, isNegativeZero, extend, __esModule, executableHTML };
}
declare var version: string;
declare function toString(): string;
/**
 * @method jsep.addUnaryOp
 * @param {string} op_name The name of the unary op to add
 * @return jsep
 */
declare function addUnaryOp(op_name: string): {
    (expr: any): any;
    version: string;
    toString(): string;
    addUnaryOp(op_name: string): any;
    /**
     * @method jsep.addBinaryOp
     * @param {string} op_name The name of the binary op to add
     * @param {number} precedence The precedence of the binary op (can be a float)
     * @return jsep
     */
    addBinaryOp(op_name: string, precedence: number): any;
    /**
     * @method jsep.addLiteral
     * @param {string} literal_name The name of the literal to add
     * @param {*} literal_value The value of the literal
     * @return jsep
     */
    addLiteral(literal_name: string, literal_value: any): any;
    /**
     * @method jsep.removeUnaryOp
     * @param {string} op_name The name of the unary op to remove
     * @return jsep
     */
    removeUnaryOp(op_name: string): any;
    /**
     * @method jsep.removeAllUnaryOps
     * @return jsep
     */
    removeAllUnaryOps(): any;
    /**
     * @method jsep.removeBinaryOp
     * @param {string} op_name The name of the binary op to remove
     * @return jsep
     */
    removeBinaryOp(op_name: string): any;
    /**
     * @method jsep.removeAllBinaryOps
     * @return jsep
     */
    removeAllBinaryOps(): any;
    /**
     * @method jsep.removeLiteral
     * @param {string} literal_name The name of the literal to remove
     * @return jsep
     */
    removeLiteral(literal_name: string): any;
    /**
     * @method jsep.removeAllLiterals
     * @return jsep
     */
    removeAllLiterals(): any;
    noConflict(): any;
    Type: any;
    Schema: any;
    FAILSAFE_SCHEMA: any;
    JSON_SCHEMA: any;
    CORE_SCHEMA: any;
    DEFAULT_SAFE_SCHEMA: any;
    DEFAULT_FULL_SCHEMA: any;
    load: any;
    loadAll: any;
    safeLoad: any;
    safeLoadAll: any;
    dump: any;
    safeDump: any;
    YAMLException: any;
    MINIMAL_SCHEMA: any;
    SAFE_SCHEMA: any;
    DEFAULT_SCHEMA: any;
    scan: () => never;
    parse: any;
    compose: () => never;
    addConstructor: () => never;
    isNothing: (subject: any) => boolean;
    isObject: (subject: any) => boolean;
    toArray: (sequence: any) => any[];
    repeat: (string: any, count: any) => string;
    isNegativeZero: (number: any) => boolean;
    extend: (target: any, source: any) => any;
    /******/ readonly __esModule: boolean;
    executableHTML: any;
};
/**
 * @method jsep.addBinaryOp
 * @param {string} op_name The name of the binary op to add
 * @param {number} precedence The precedence of the binary op (can be a float)
 * @return jsep
 */
declare function addBinaryOp(op_name: string, precedence: number): {
    (expr: any): any;
    version: string;
    toString(): string;
    /**
     * @method jsep.addUnaryOp
     * @param {string} op_name The name of the unary op to add
     * @return jsep
     */
    addUnaryOp(op_name: string): any;
    addBinaryOp(op_name: string, precedence: number): any;
    /**
     * @method jsep.addLiteral
     * @param {string} literal_name The name of the literal to add
     * @param {*} literal_value The value of the literal
     * @return jsep
     */
    addLiteral(literal_name: string, literal_value: any): any;
    /**
     * @method jsep.removeUnaryOp
     * @param {string} op_name The name of the unary op to remove
     * @return jsep
     */
    removeUnaryOp(op_name: string): any;
    /**
     * @method jsep.removeAllUnaryOps
     * @return jsep
     */
    removeAllUnaryOps(): any;
    /**
     * @method jsep.removeBinaryOp
     * @param {string} op_name The name of the binary op to remove
     * @return jsep
     */
    removeBinaryOp(op_name: string): any;
    /**
     * @method jsep.removeAllBinaryOps
     * @return jsep
     */
    removeAllBinaryOps(): any;
    /**
     * @method jsep.removeLiteral
     * @param {string} literal_name The name of the literal to remove
     * @return jsep
     */
    removeLiteral(literal_name: string): any;
    /**
     * @method jsep.removeAllLiterals
     * @return jsep
     */
    removeAllLiterals(): any;
    noConflict(): any;
    Type: any;
    Schema: any;
    FAILSAFE_SCHEMA: any;
    JSON_SCHEMA: any;
    CORE_SCHEMA: any;
    DEFAULT_SAFE_SCHEMA: any;
    DEFAULT_FULL_SCHEMA: any;
    load: any;
    loadAll: any;
    safeLoad: any;
    safeLoadAll: any;
    dump: any;
    safeDump: any;
    YAMLException: any;
    MINIMAL_SCHEMA: any;
    SAFE_SCHEMA: any;
    DEFAULT_SCHEMA: any;
    scan: () => never;
    parse: any;
    compose: () => never;
    addConstructor: () => never;
    isNothing: (subject: any) => boolean;
    isObject: (subject: any) => boolean;
    toArray: (sequence: any) => any[];
    repeat: (string: any, count: any) => string;
    isNegativeZero: (number: any) => boolean;
    extend: (target: any, source: any) => any;
    /******/ readonly __esModule: boolean;
    executableHTML: any;
};
/**
 * @method jsep.addLiteral
 * @param {string} literal_name The name of the literal to add
 * @param {*} literal_value The value of the literal
 * @return jsep
 */
declare function addLiteral(literal_name: string, literal_value: any): {
    (expr: any): any;
    version: string;
    toString(): string;
    /**
     * @method jsep.addUnaryOp
     * @param {string} op_name The name of the unary op to add
     * @return jsep
     */
    addUnaryOp(op_name: string): any;
    /**
     * @method jsep.addBinaryOp
     * @param {string} op_name The name of the binary op to add
     * @param {number} precedence The precedence of the binary op (can be a float)
     * @return jsep
     */
    addBinaryOp(op_name: string, precedence: number): any;
    addLiteral(literal_name: string, literal_value: any): any;
    /**
     * @method jsep.removeUnaryOp
     * @param {string} op_name The name of the unary op to remove
     * @return jsep
     */
    removeUnaryOp(op_name: string): any;
    /**
     * @method jsep.removeAllUnaryOps
     * @return jsep
     */
    removeAllUnaryOps(): any;
    /**
     * @method jsep.removeBinaryOp
     * @param {string} op_name The name of the binary op to remove
     * @return jsep
     */
    removeBinaryOp(op_name: string): any;
    /**
     * @method jsep.removeAllBinaryOps
     * @return jsep
     */
    removeAllBinaryOps(): any;
    /**
     * @method jsep.removeLiteral
     * @param {string} literal_name The name of the literal to remove
     * @return jsep
     */
    removeLiteral(literal_name: string): any;
    /**
     * @method jsep.removeAllLiterals
     * @return jsep
     */
    removeAllLiterals(): any;
    noConflict(): any;
    Type: any;
    Schema: any;
    FAILSAFE_SCHEMA: any;
    JSON_SCHEMA: any;
    CORE_SCHEMA: any;
    DEFAULT_SAFE_SCHEMA: any;
    DEFAULT_FULL_SCHEMA: any;
    load: any;
    loadAll: any;
    safeLoad: any;
    safeLoadAll: any;
    dump: any;
    safeDump: any;
    YAMLException: any;
    MINIMAL_SCHEMA: any;
    SAFE_SCHEMA: any;
    DEFAULT_SCHEMA: any;
    scan: () => never;
    parse: any;
    compose: () => never;
    addConstructor: () => never;
    isNothing: (subject: any) => boolean;
    isObject: (subject: any) => boolean;
    toArray: (sequence: any) => any[];
    repeat: (string: any, count: any) => string;
    isNegativeZero: (number: any) => boolean;
    extend: (target: any, source: any) => any;
    /******/ readonly __esModule: boolean;
    executableHTML: any;
};
/**
 * @method jsep.removeUnaryOp
 * @param {string} op_name The name of the unary op to remove
 * @return jsep
 */
declare function removeUnaryOp(op_name: string): {
    (expr: any): any;
    version: string;
    toString(): string;
    /**
     * @method jsep.addUnaryOp
     * @param {string} op_name The name of the unary op to add
     * @return jsep
     */
    addUnaryOp(op_name: string): any;
    /**
     * @method jsep.addBinaryOp
     * @param {string} op_name The name of the binary op to add
     * @param {number} precedence The precedence of the binary op (can be a float)
     * @return jsep
     */
    addBinaryOp(op_name: string, precedence: number): any;
    /**
     * @method jsep.addLiteral
     * @param {string} literal_name The name of the literal to add
     * @param {*} literal_value The value of the literal
     * @return jsep
     */
    addLiteral(literal_name: string, literal_value: any): any;
    removeUnaryOp(op_name: string): any;
    /**
     * @method jsep.removeAllUnaryOps
     * @return jsep
     */
    removeAllUnaryOps(): any;
    /**
     * @method jsep.removeBinaryOp
     * @param {string} op_name The name of the binary op to remove
     * @return jsep
     */
    removeBinaryOp(op_name: string): any;
    /**
     * @method jsep.removeAllBinaryOps
     * @return jsep
     */
    removeAllBinaryOps(): any;
    /**
     * @method jsep.removeLiteral
     * @param {string} literal_name The name of the literal to remove
     * @return jsep
     */
    removeLiteral(literal_name: string): any;
    /**
     * @method jsep.removeAllLiterals
     * @return jsep
     */
    removeAllLiterals(): any;
    noConflict(): any;
    Type: any;
    Schema: any;
    FAILSAFE_SCHEMA: any;
    JSON_SCHEMA: any;
    CORE_SCHEMA: any;
    DEFAULT_SAFE_SCHEMA: any;
    DEFAULT_FULL_SCHEMA: any;
    load: any;
    loadAll: any;
    safeLoad: any;
    safeLoadAll: any;
    dump: any;
    safeDump: any;
    YAMLException: any;
    MINIMAL_SCHEMA: any;
    SAFE_SCHEMA: any;
    DEFAULT_SCHEMA: any;
    scan: () => never;
    parse: any;
    compose: () => never;
    addConstructor: () => never;
    isNothing: (subject: any) => boolean;
    isObject: (subject: any) => boolean;
    toArray: (sequence: any) => any[];
    repeat: (string: any, count: any) => string;
    isNegativeZero: (number: any) => boolean;
    extend: (target: any, source: any) => any;
    /******/ readonly __esModule: boolean;
    executableHTML: any;
};
/**
 * @method jsep.removeAllUnaryOps
 * @return jsep
 */
declare function removeAllUnaryOps(): {
    (expr: any): any;
    version: string;
    toString(): string;
    /**
     * @method jsep.addUnaryOp
     * @param {string} op_name The name of the unary op to add
     * @return jsep
     */
    addUnaryOp(op_name: string): any;
    /**
     * @method jsep.addBinaryOp
     * @param {string} op_name The name of the binary op to add
     * @param {number} precedence The precedence of the binary op (can be a float)
     * @return jsep
     */
    addBinaryOp(op_name: string, precedence: number): any;
    /**
     * @method jsep.addLiteral
     * @param {string} literal_name The name of the literal to add
     * @param {*} literal_value The value of the literal
     * @return jsep
     */
    addLiteral(literal_name: string, literal_value: any): any;
    /**
     * @method jsep.removeUnaryOp
     * @param {string} op_name The name of the unary op to remove
     * @return jsep
     */
    removeUnaryOp(op_name: string): any;
    removeAllUnaryOps(): any;
    /**
     * @method jsep.removeBinaryOp
     * @param {string} op_name The name of the binary op to remove
     * @return jsep
     */
    removeBinaryOp(op_name: string): any;
    /**
     * @method jsep.removeAllBinaryOps
     * @return jsep
     */
    removeAllBinaryOps(): any;
    /**
     * @method jsep.removeLiteral
     * @param {string} literal_name The name of the literal to remove
     * @return jsep
     */
    removeLiteral(literal_name: string): any;
    /**
     * @method jsep.removeAllLiterals
     * @return jsep
     */
    removeAllLiterals(): any;
    noConflict(): any;
    Type: any;
    Schema: any;
    FAILSAFE_SCHEMA: any;
    JSON_SCHEMA: any;
    CORE_SCHEMA: any;
    DEFAULT_SAFE_SCHEMA: any;
    DEFAULT_FULL_SCHEMA: any;
    load: any;
    loadAll: any;
    safeLoad: any;
    safeLoadAll: any;
    dump: any;
    safeDump: any;
    YAMLException: any;
    MINIMAL_SCHEMA: any;
    SAFE_SCHEMA: any;
    DEFAULT_SCHEMA: any;
    scan: () => never;
    parse: any;
    compose: () => never;
    addConstructor: () => never;
    isNothing: (subject: any) => boolean;
    isObject: (subject: any) => boolean;
    toArray: (sequence: any) => any[];
    repeat: (string: any, count: any) => string;
    isNegativeZero: (number: any) => boolean;
    extend: (target: any, source: any) => any;
    /******/ readonly __esModule: boolean;
    executableHTML: any;
};
/**
 * @method jsep.removeBinaryOp
 * @param {string} op_name The name of the binary op to remove
 * @return jsep
 */
declare function removeBinaryOp(op_name: string): {
    (expr: any): any;
    version: string;
    toString(): string;
    /**
     * @method jsep.addUnaryOp
     * @param {string} op_name The name of the unary op to add
     * @return jsep
     */
    addUnaryOp(op_name: string): any;
    /**
     * @method jsep.addBinaryOp
     * @param {string} op_name The name of the binary op to add
     * @param {number} precedence The precedence of the binary op (can be a float)
     * @return jsep
     */
    addBinaryOp(op_name: string, precedence: number): any;
    /**
     * @method jsep.addLiteral
     * @param {string} literal_name The name of the literal to add
     * @param {*} literal_value The value of the literal
     * @return jsep
     */
    addLiteral(literal_name: string, literal_value: any): any;
    /**
     * @method jsep.removeUnaryOp
     * @param {string} op_name The name of the unary op to remove
     * @return jsep
     */
    removeUnaryOp(op_name: string): any;
    /**
     * @method jsep.removeAllUnaryOps
     * @return jsep
     */
    removeAllUnaryOps(): any;
    removeBinaryOp(op_name: string): any;
    /**
     * @method jsep.removeAllBinaryOps
     * @return jsep
     */
    removeAllBinaryOps(): any;
    /**
     * @method jsep.removeLiteral
     * @param {string} literal_name The name of the literal to remove
     * @return jsep
     */
    removeLiteral(literal_name: string): any;
    /**
     * @method jsep.removeAllLiterals
     * @return jsep
     */
    removeAllLiterals(): any;
    noConflict(): any;
    Type: any;
    Schema: any;
    FAILSAFE_SCHEMA: any;
    JSON_SCHEMA: any;
    CORE_SCHEMA: any;
    DEFAULT_SAFE_SCHEMA: any;
    DEFAULT_FULL_SCHEMA: any;
    load: any;
    loadAll: any;
    safeLoad: any;
    safeLoadAll: any;
    dump: any;
    safeDump: any;
    YAMLException: any;
    MINIMAL_SCHEMA: any;
    SAFE_SCHEMA: any;
    DEFAULT_SCHEMA: any;
    scan: () => never;
    parse: any;
    compose: () => never;
    addConstructor: () => never;
    isNothing: (subject: any) => boolean;
    isObject: (subject: any) => boolean;
    toArray: (sequence: any) => any[];
    repeat: (string: any, count: any) => string;
    isNegativeZero: (number: any) => boolean;
    extend: (target: any, source: any) => any;
    /******/ readonly __esModule: boolean;
    executableHTML: any;
};
/**
 * @method jsep.removeAllBinaryOps
 * @return jsep
 */
declare function removeAllBinaryOps(): {
    (expr: any): any;
    version: string;
    toString(): string;
    /**
     * @method jsep.addUnaryOp
     * @param {string} op_name The name of the unary op to add
     * @return jsep
     */
    addUnaryOp(op_name: string): any;
    /**
     * @method jsep.addBinaryOp
     * @param {string} op_name The name of the binary op to add
     * @param {number} precedence The precedence of the binary op (can be a float)
     * @return jsep
     */
    addBinaryOp(op_name: string, precedence: number): any;
    /**
     * @method jsep.addLiteral
     * @param {string} literal_name The name of the literal to add
     * @param {*} literal_value The value of the literal
     * @return jsep
     */
    addLiteral(literal_name: string, literal_value: any): any;
    /**
     * @method jsep.removeUnaryOp
     * @param {string} op_name The name of the unary op to remove
     * @return jsep
     */
    removeUnaryOp(op_name: string): any;
    /**
     * @method jsep.removeAllUnaryOps
     * @return jsep
     */
    removeAllUnaryOps(): any;
    /**
     * @method jsep.removeBinaryOp
     * @param {string} op_name The name of the binary op to remove
     * @return jsep
     */
    removeBinaryOp(op_name: string): any;
    removeAllBinaryOps(): any;
    /**
     * @method jsep.removeLiteral
     * @param {string} literal_name The name of the literal to remove
     * @return jsep
     */
    removeLiteral(literal_name: string): any;
    /**
     * @method jsep.removeAllLiterals
     * @return jsep
     */
    removeAllLiterals(): any;
    noConflict(): any;
    Type: any;
    Schema: any;
    FAILSAFE_SCHEMA: any;
    JSON_SCHEMA: any;
    CORE_SCHEMA: any;
    DEFAULT_SAFE_SCHEMA: any;
    DEFAULT_FULL_SCHEMA: any;
    load: any;
    loadAll: any;
    safeLoad: any;
    safeLoadAll: any;
    dump: any;
    safeDump: any;
    YAMLException: any;
    MINIMAL_SCHEMA: any;
    SAFE_SCHEMA: any;
    DEFAULT_SCHEMA: any;
    scan: () => never;
    parse: any;
    compose: () => never;
    addConstructor: () => never;
    isNothing: (subject: any) => boolean;
    isObject: (subject: any) => boolean;
    toArray: (sequence: any) => any[];
    repeat: (string: any, count: any) => string;
    isNegativeZero: (number: any) => boolean;
    extend: (target: any, source: any) => any;
    /******/ readonly __esModule: boolean;
    executableHTML: any;
};
/**
 * @method jsep.removeLiteral
 * @param {string} literal_name The name of the literal to remove
 * @return jsep
 */
declare function removeLiteral(literal_name: string): {
    (expr: any): any;
    version: string;
    toString(): string;
    /**
     * @method jsep.addUnaryOp
     * @param {string} op_name The name of the unary op to add
     * @return jsep
     */
    addUnaryOp(op_name: string): any;
    /**
     * @method jsep.addBinaryOp
     * @param {string} op_name The name of the binary op to add
     * @param {number} precedence The precedence of the binary op (can be a float)
     * @return jsep
     */
    addBinaryOp(op_name: string, precedence: number): any;
    /**
     * @method jsep.addLiteral
     * @param {string} literal_name The name of the literal to add
     * @param {*} literal_value The value of the literal
     * @return jsep
     */
    addLiteral(literal_name: string, literal_value: any): any;
    /**
     * @method jsep.removeUnaryOp
     * @param {string} op_name The name of the unary op to remove
     * @return jsep
     */
    removeUnaryOp(op_name: string): any;
    /**
     * @method jsep.removeAllUnaryOps
     * @return jsep
     */
    removeAllUnaryOps(): any;
    /**
     * @method jsep.removeBinaryOp
     * @param {string} op_name The name of the binary op to remove
     * @return jsep
     */
    removeBinaryOp(op_name: string): any;
    /**
     * @method jsep.removeAllBinaryOps
     * @return jsep
     */
    removeAllBinaryOps(): any;
    removeLiteral(literal_name: string): any;
    /**
     * @method jsep.removeAllLiterals
     * @return jsep
     */
    removeAllLiterals(): any;
    noConflict(): any;
    Type: any;
    Schema: any;
    FAILSAFE_SCHEMA: any;
    JSON_SCHEMA: any;
    CORE_SCHEMA: any;
    DEFAULT_SAFE_SCHEMA: any;
    DEFAULT_FULL_SCHEMA: any;
    load: any;
    loadAll: any;
    safeLoad: any;
    safeLoadAll: any;
    dump: any;
    safeDump: any;
    YAMLException: any;
    MINIMAL_SCHEMA: any;
    SAFE_SCHEMA: any;
    DEFAULT_SCHEMA: any;
    scan: () => never;
    parse: any;
    compose: () => never;
    addConstructor: () => never;
    isNothing: (subject: any) => boolean;
    isObject: (subject: any) => boolean;
    toArray: (sequence: any) => any[];
    repeat: (string: any, count: any) => string;
    isNegativeZero: (number: any) => boolean;
    extend: (target: any, source: any) => any;
    /******/ readonly __esModule: boolean;
    executableHTML: any;
};
/**
 * @method jsep.removeAllLiterals
 * @return jsep
 */
declare function removeAllLiterals(): {
    (expr: any): any;
    version: string;
    toString(): string;
    /**
     * @method jsep.addUnaryOp
     * @param {string} op_name The name of the unary op to add
     * @return jsep
     */
    addUnaryOp(op_name: string): any;
    /**
     * @method jsep.addBinaryOp
     * @param {string} op_name The name of the binary op to add
     * @param {number} precedence The precedence of the binary op (can be a float)
     * @return jsep
     */
    addBinaryOp(op_name: string, precedence: number): any;
    /**
     * @method jsep.addLiteral
     * @param {string} literal_name The name of the literal to add
     * @param {*} literal_value The value of the literal
     * @return jsep
     */
    addLiteral(literal_name: string, literal_value: any): any;
    /**
     * @method jsep.removeUnaryOp
     * @param {string} op_name The name of the unary op to remove
     * @return jsep
     */
    removeUnaryOp(op_name: string): any;
    /**
     * @method jsep.removeAllUnaryOps
     * @return jsep
     */
    removeAllUnaryOps(): any;
    /**
     * @method jsep.removeBinaryOp
     * @param {string} op_name The name of the binary op to remove
     * @return jsep
     */
    removeBinaryOp(op_name: string): any;
    /**
     * @method jsep.removeAllBinaryOps
     * @return jsep
     */
    removeAllBinaryOps(): any;
    /**
     * @method jsep.removeLiteral
     * @param {string} literal_name The name of the literal to remove
     * @return jsep
     */
    removeLiteral(literal_name: string): any;
    removeAllLiterals(): any;
    noConflict(): any;
    Type: any;
    Schema: any;
    FAILSAFE_SCHEMA: any;
    JSON_SCHEMA: any;
    CORE_SCHEMA: any;
    DEFAULT_SAFE_SCHEMA: any;
    DEFAULT_FULL_SCHEMA: any;
    load: any;
    loadAll: any;
    safeLoad: any;
    safeLoadAll: any;
    dump: any;
    safeDump: any;
    YAMLException: any;
    MINIMAL_SCHEMA: any;
    SAFE_SCHEMA: any;
    DEFAULT_SCHEMA: any;
    scan: () => never;
    parse: any;
    compose: () => never;
    addConstructor: () => never;
    isNothing: (subject: any) => boolean;
    isObject: (subject: any) => boolean;
    toArray: (sequence: any) => any[];
    repeat: (string: any, count: any) => string;
    isNegativeZero: (number: any) => boolean;
    extend: (target: any, source: any) => any;
    /******/ readonly __esModule: boolean;
    executableHTML: any;
};
declare function noConflict(): {
    (expr: any): any;
    version: string;
    toString(): string;
    /**
     * @method jsep.addUnaryOp
     * @param {string} op_name The name of the unary op to add
     * @return jsep
     */
    addUnaryOp(op_name: string): any;
    /**
     * @method jsep.addBinaryOp
     * @param {string} op_name The name of the binary op to add
     * @param {number} precedence The precedence of the binary op (can be a float)
     * @return jsep
     */
    addBinaryOp(op_name: string, precedence: number): any;
    /**
     * @method jsep.addLiteral
     * @param {string} literal_name The name of the literal to add
     * @param {*} literal_value The value of the literal
     * @return jsep
     */
    addLiteral(literal_name: string, literal_value: any): any;
    /**
     * @method jsep.removeUnaryOp
     * @param {string} op_name The name of the unary op to remove
     * @return jsep
     */
    removeUnaryOp(op_name: string): any;
    /**
     * @method jsep.removeAllUnaryOps
     * @return jsep
     */
    removeAllUnaryOps(): any;
    /**
     * @method jsep.removeBinaryOp
     * @param {string} op_name The name of the binary op to remove
     * @return jsep
     */
    removeBinaryOp(op_name: string): any;
    /**
     * @method jsep.removeAllBinaryOps
     * @return jsep
     */
    removeAllBinaryOps(): any;
    /**
     * @method jsep.removeLiteral
     * @param {string} literal_name The name of the literal to remove
     * @return jsep
     */
    removeLiteral(literal_name: string): any;
    /**
     * @method jsep.removeAllLiterals
     * @return jsep
     */
    removeAllLiterals(): any;
    noConflict(): any;
    Type: any;
    Schema: any;
    FAILSAFE_SCHEMA: any;
    JSON_SCHEMA: any;
    CORE_SCHEMA: any;
    DEFAULT_SAFE_SCHEMA: any;
    DEFAULT_FULL_SCHEMA: any;
    load: any;
    loadAll: any;
    safeLoad: any;
    safeLoadAll: any;
    dump: any;
    safeDump: any;
    YAMLException: any;
    MINIMAL_SCHEMA: any;
    SAFE_SCHEMA: any;
    DEFAULT_SCHEMA: any;
    scan: () => never;
    parse: any;
    compose: () => never;
    addConstructor: () => never;
    isNothing: (subject: any) => boolean;
    isObject: (subject: any) => boolean;
    toArray: (sequence: any) => any[];
    repeat: (string: any, count: any) => string;
    isNegativeZero: (number: any) => boolean;
    extend: (target: any, source: any) => any;
    /******/ readonly __esModule: boolean;
    executableHTML: any;
};
declare var Type: any;
declare var Schema: any;
declare var FAILSAFE_SCHEMA: any;
declare var JSON_SCHEMA: any;
declare var CORE_SCHEMA: any;
declare var DEFAULT_SAFE_SCHEMA: any;
declare var DEFAULT_FULL_SCHEMA: any;
declare function load(input: any, options: any): any;
declare function loadAll(input: any, iterator: any, options: any): any[];
declare function safeLoad(input: any, options: any): any;
declare function safeLoadAll(input: any, iterator: any, options: any): any[];
declare function dump(input: any, options: any): string;
declare function safeDump(input: any, options: any): string;
declare var YAMLException: any;
declare var MINIMAL_SCHEMA: any;
declare var SAFE_SCHEMA: any;
declare var DEFAULT_SCHEMA: any;
declare function scan(): never;
declare function compose(): never;
declare function addConstructor(): never;
declare function isNothing(subject: any): boolean;
declare function isObject(subject: any): boolean;
declare function toArray(sequence: any): any[];
declare function repeat(string: any, count: any): string;
declare function isNegativeZero(number: any): boolean;
declare function extend(target: any, source: any): any;
declare var __esModule: boolean;
declare var executableHTML: any;
//# sourceMappingURL=index.d.ts.map