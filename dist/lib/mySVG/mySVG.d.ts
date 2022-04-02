export class mySVG {
    static bezier(p1x: any, p1y: any, p2x: any, p2y: any): any;
    model(node: any): any;
    elementsFound: any[];
    render(node: any): any;
    svg: any;
    renderKey(): any;
    download(filename: any): void;
    get modellingFunctions(): {
        'AA-SESSION': (node: any) => Container;
        'AA-SEQUENCE': (node: any) => Container;
        'AA-SCREEN': (node: any) => any;
        'AA-CHOOSE': (node: any) => Container;
        'AA-FUNCTION-RANDOM': (node: any) => Container;
        'AA-WHEN': (node: any) => any;
        'AA-OTHERWISE': (node: any) => any;
        DIV: (node: any) => Container;
    };
    get examples(): {
        'AA-SEQUENCE': {
            html: string;
            comment: string;
        };
        'AA-SCREEN': {
            html: string;
            comment: string;
        };
        'AA-FUNCTION-RANDOM': {
            html: string;
            comment: string;
        };
        'AA-CHOOSE': {
            html: string;
            comment: string;
        };
    };
}
declare class Container {
    constructor(type: any, node: any);
    x(v: any): any;
    _x: any;
    y(v: any): any;
    _y: any;
    dy(v: any): any;
    getItemStartPoints(item: any): any;
    getItemEndPoints(item: any): any;
    getStartPoints(): any;
    getEndPoints(): any;
    width(v: any): any;
    height(v: any): any;
    addTo(svgjs: any): Container;
    gap: number;
    c: any[];
    type: any;
    myNode: any;
    group: any;
    push(item: any): void;
    makeLines(endPoints: any, startPoints: any): any;
    renderLines(): any;
    applyItemsAfterwards(): void;
    breakLine(): any;
}
export {};
//# sourceMappingURL=mySVG.d.ts.map