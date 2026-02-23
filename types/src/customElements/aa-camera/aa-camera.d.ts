import { AABaseElement, type AAPropertiesMap } from '../aa-base-element/aa-base-element';
export declare class AACamera extends AABaseElement {
    static get category(): string;
    static get tag(): string;
    static get properties(): AAPropertiesMap;
    static get acceptsElements(): null;
    static get observedAttributes(): string[];
    root: ShadowRoot;
    _stream: MediaStream | null;
    _videoEl: HTMLVideoElement | null;
    _canvasEl: HTMLCanvasElement | null;
    _imgEl: HTMLImageElement | null;
    _captureBtn: HTMLButtonElement | null;
    _retakeBtn: HTMLButtonElement | null;
    _flipBtn: HTMLButtonElement | null;
    get value(): string | null;
    set value(val: string | null);
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    _startCamera(): Promise<void>;
    _stopStream(): void;
    _capture(): void;
    _retake(): void;
    _flipCamera(): void;
    get css(): string;
    get htmlTemplate(): string;
}
