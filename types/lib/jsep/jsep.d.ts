declare const _default: {
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
} | undefined;
export default _default;
