/// <reference types="@svgdotjs/svg.js" />
export class mySVG {
    static bezier(p1x: any, p1y: any, p2x: any, p2y: any): import("@svgdotjs/svg.js").Path;
    model(node: any): any;
    elementsFound: any[];
    render(node: any): SVGSVGElement | undefined;
    svg: SVGSVGElement | undefined;
    renderKey(): SVGSVGElement;
    download(filename: any): void;
    get modellingFunctions(): {
        'AA-SESSION': (node: any) => Container;
        'AA-SEQUENCE': (node: any) => Container;
        'AA-SCREEN': (node: any) => import("@svgdotjs/svg.js").G;
        'AA-CHOOSE': (node: any) => Container;
        'AA-FUNCTION-RANDOM': (node: any) => Container;
        'AA-WHEN': (node: any) => import("@svgdotjs/svg.js").G;
        'AA-OTHERWISE': (node: any) => import("@svgdotjs/svg.js").G;
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
    x(v: any): import("@svgdotjs/svg.js").NumberAlias | undefined;
    _x: any;
    y(v: any): import("@svgdotjs/svg.js").NumberAlias | undefined;
    _y: any;
    dy(v: any): any;
    getItemStartPoints(item: any): any;
    getItemEndPoints(item: any): any;
    getStartPoints(): any;
    getEndPoints(): any;
    width(v: any): import("@svgdotjs/svg.js").NumberAlias | undefined;
    height(v: any): import("@svgdotjs/svg.js").NumberAlias | undefined;
    addTo(svgjs: any): this;
    gap: number;
    c: any[];
    type: any;
    myNode: any;
    group: import("@svgdotjs/svg.js").G;
    push(item: any): void;
    makeLines(endPoints: any, startPoints: any): import("@svgdotjs/svg.js").G;
    renderLines(): import("@svgdotjs/svg.js").G;
    applyItemsAfterwards(): void;
    breakLine(): any;
}
export {};
