export default class AAAffectGrid extends BaseElement {
    static get category(): string;
    static get tag(): string;
    static get properties(): {
        'top-label': {
            type: StringConstructor;
            userDefined: boolean;
            value: string;
        };
        'bottom-label': {
            type: StringConstructor;
            userDefined: boolean;
            value: string;
        };
        'left-label': {
            type: StringConstructor;
            userDefined: boolean;
            value: string;
        };
        'center-label': {
            type: StringConstructor;
            userDefined: boolean;
            value: string;
        };
        'right-label': {
            type: StringConstructor;
            userDefined: boolean;
            value: string;
        };
        'top-left-label': {
            type: StringConstructor;
            userDefined: boolean;
            value: string;
        };
        'top-right-label': {
            type: StringConstructor;
            userDefined: boolean;
            value: string;
        };
        'bottom-left-label': {
            type: StringConstructor;
            userDefined: boolean;
            value: string;
        };
        'bottom-right-label': {
            type: StringConstructor;
            userDefined: boolean;
            value: string;
        };
        'left-top-label': {
            type: StringConstructor;
            userDefined: boolean;
            value: string;
        };
        'left-bottom-label': {
            type: StringConstructor;
            userDefined: boolean;
            value: string;
        };
        'right-top-label': {
            type: StringConstructor;
            userDefined: boolean;
            value: string;
        };
        'right-bottom-label': {
            type: StringConstructor;
            userDefined: boolean;
            value: string;
        };
        rows: {
            type: NumberConstructor;
            userDefined: boolean;
            value: number;
        };
        columns: {
            type: NumberConstructor;
            userDefined: boolean;
            value: number;
        };
        value: {
            type: ArrayConstructor;
        };
        name: {
            type: StringConstructor;
            userDefined: boolean;
        };
        diagram: {
            type: BooleanConstructor;
            value: boolean;
            userDefined: boolean;
        };
        'diagram-transparent': {
            type: BooleanConstructor;
            value: boolean;
            userDefined: boolean;
        };
    };
    static get acceptsElements(): any;
    static get observedAttributes(): string[];
    get x(): number;
    get y(): number;
    set value(arg: number[]);
    get value(): number[];
    set minLabel(arg: string);
    get minLabel(): string;
    set maxLabel(arg: string);
    get maxLabel(): string;
    set min(arg: any);
    set max(arg: any);
    topLeftLabel: string;
    topLabel: string;
    topRightLabel: string;
    leftTopLabel: string;
    leftLabel: string;
    leftBottomLabel: string;
    rightTopLabel: string;
    rightLabel: string;
    rightBottomLabel: string;
    bottomLeftLabel: string;
    bottomLabel: string;
    grid: Element;
    selectedCell: any;
    totalContainer: Element;
    get css(): any;
    get html(): any;
}
import BaseElement from "../aa-baseElement/baseElement.js";
//# sourceMappingURL=aa-affect-grid.d.ts.map