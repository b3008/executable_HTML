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
    static get acceptsElements(): null;
    static get observedAttributes(): string[];
    get x(): number | null;
    get y(): number | null;
    set value(val: number[] | null);
    get value(): number[] | null;
    set minLabel(val: string | null);
    get minLabel(): string | null;
    set maxLabel(val: string | null);
    get maxLabel(): string | null;
    set min(val: any);
    set max(val: any);
    root: ShadowRoot;
    topLeftLabel: string | undefined;
    topLabel: string | undefined;
    topRightLabel: string | undefined;
    leftTopLabel: string | undefined;
    leftLabel: string | undefined;
    leftBottomLabel: string | undefined;
    rightTopLabel: string | undefined;
    rightLabel: string | undefined;
    rightBottomLabel: string | undefined;
    bottomLeftLabel: string | undefined;
    bottomLabel: string | undefined;
    grid: Element | null | undefined;
    selectedCell: any;
    totalContainer: Element | null | undefined;
    get css(): any;
    get html(): any;
}
import BaseElement from '../aa-baseElement/baseElement.js';
