declare function _default(expr: any): any;
declare namespace _default {
    const version: string;
    function toString(): string;
    /**
     * @method jsep.addUnaryOp
     * @param {string} op_name The name of the unary op to add
     * @return jsep
     */
    function addUnaryOp(op_name: string): {
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
    };
    /**
     * @method jsep.addBinaryOp
     * @param {string} op_name The name of the binary op to add
     * @param {number} precedence The precedence of the binary op (can be a float)
     * @return jsep
     */
    function addBinaryOp(op_name: string, precedence: number): {
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
    };
    /**
     * @method jsep.addLiteral
     * @param {string} literal_name The name of the literal to add
     * @param {*} literal_value The value of the literal
     * @return jsep
     */
    function addLiteral(literal_name: string, literal_value: any): {
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
    };
    /**
     * @method jsep.removeUnaryOp
     * @param {string} op_name The name of the unary op to remove
     * @return jsep
     */
    function removeUnaryOp(op_name: string): {
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
    };
    /**
     * @method jsep.removeAllUnaryOps
     * @return jsep
     */
    function removeAllUnaryOps(): {
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
    };
    /**
     * @method jsep.removeBinaryOp
     * @param {string} op_name The name of the binary op to remove
     * @return jsep
     */
    function removeBinaryOp(op_name: string): {
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
    };
    /**
     * @method jsep.removeAllBinaryOps
     * @return jsep
     */
    function removeAllBinaryOps(): {
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
    };
    /**
     * @method jsep.removeLiteral
     * @param {string} literal_name The name of the literal to remove
     * @return jsep
     */
    function removeLiteral(literal_name: string): {
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
    };
    /**
     * @method jsep.removeAllLiterals
     * @return jsep
     */
    function removeAllLiterals(): {
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
    };
    function noConflict(): {
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
    };
}
export default _default;
//# sourceMappingURL=jsep.d.ts.map