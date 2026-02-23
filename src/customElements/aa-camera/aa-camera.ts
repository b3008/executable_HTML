import { AABaseElement, html, type AAPropertiesMap } from '../aa-base-element/aa-base-element';

export class AACamera extends AABaseElement {

    static get category(): string {
        return "response item";
    }

    static get tag(): string {
        return 'aa-camera';
    }

    static get properties(): AAPropertiesMap {
        return {
            name: {
                type: String,
                userDefined: true
            },
            'facing': {
                type: String,
                userDefined: true,
                value: "environment",
                valuesAllowed: ["environment", "user"]
            },
            'value': {
                type: String,
                userDefined: false
            },
            'width': {
                type: Number,
                userDefined: true,
                value: 640
            },
            'height': {
                type: Number,
                userDefined: true,
                value: 480
            }
        }
    }

    static get acceptsElements(): null {
        return null;
    }

    static get observedAttributes(): string[] {
        return Object.keys(AACamera.properties);
    }

    root: ShadowRoot;
    _stream: MediaStream | null = null;
    _videoEl: HTMLVideoElement | null = null;
    _canvasEl: HTMLCanvasElement | null = null;
    _imgEl: HTMLImageElement | null = null;
    _captureBtn: HTMLButtonElement | null = null;
    _retakeBtn: HTMLButtonElement | null = null;
    _flipBtn: HTMLButtonElement | null = null;

    get value(): string | null {
        return this.getAttribute('value');
    }

    set value(val: string | null) {
        if (val) {
            this.setAttribute('value', val);
        } else {
            this.removeAttribute('value');
        }
        let memory = this.getMemory();
        if (memory) memory.setData(AABaseElement.getVariableName(this), val);
    }

    constructor() {
        super();
        this.root = this.attachShadow({ mode: 'open' });
    }

    connectedCallback(): void {
        super.connectedCallback();
        this.root.innerHTML = this.css + this.htmlTemplate;

        this._videoEl = this.root.querySelector('.preview') as HTMLVideoElement;
        this._canvasEl = this.root.querySelector('.canvas') as HTMLCanvasElement;
        this._imgEl = this.root.querySelector('.captured') as HTMLImageElement;
        this._captureBtn = this.root.querySelector('.capture-btn') as HTMLButtonElement;
        this._retakeBtn = this.root.querySelector('.retake-btn') as HTMLButtonElement;
        this._flipBtn = this.root.querySelector('.flip-btn') as HTMLButtonElement;

        this._captureBtn.addEventListener('click', () => this._capture());
        this._retakeBtn.addEventListener('click', () => this._retake());
        this._flipBtn.addEventListener('click', () => this._flipCamera());

        this._startCamera();
    }

    disconnectedCallback(): void {
        this._stopStream();
    }

    async _startCamera(): Promise<void> {
        this._stopStream();
        try {
            const facingMode = this.getAttribute('facing') || 'environment';
            this._stream = await navigator.mediaDevices.getUserMedia({
                video: { facingMode: facingMode }
            });
            if (this._videoEl) {
                this._videoEl.srcObject = this._stream;
            }
        } catch (err) {
            console.error('aa-camera: could not access camera', err);
        }
    }

    _stopStream(): void {
        if (this._stream) {
            this._stream.getTracks().forEach(track => track.stop());
            this._stream = null;
        }
    }

    _capture(): void {
        if (!this._videoEl || !this._canvasEl || !this._imgEl) return;

        const w = Number(this.getAttribute('width')) || 640;
        const h = Number(this.getAttribute('height')) || 480;
        this._canvasEl.width = w;
        this._canvasEl.height = h;

        const ctx = this._canvasEl.getContext('2d');
        if (!ctx) return;
        ctx.drawImage(this._videoEl, 0, 0, w, h);

        const dataUrl = this._canvasEl.toDataURL('image/jpeg');
        this.value = dataUrl;

        this._imgEl.src = dataUrl;
        this._imgEl.style.display = 'block';
        this._videoEl.style.display = 'none';

        if (this._captureBtn) this._captureBtn.style.display = 'none';
        if (this._flipBtn) this._flipBtn.style.display = 'none';
        if (this._retakeBtn) this._retakeBtn.style.display = 'inline-block';

        this.dispatchEvent(new CustomEvent('change'));
    }

    _retake(): void {
        this.value = null;

        if (this._imgEl) {
            this._imgEl.style.display = 'none';
            this._imgEl.src = '';
        }
        if (this._videoEl) {
            this._videoEl.style.display = 'block';
        }
        if (this._captureBtn) this._captureBtn.style.display = 'inline-block';
        if (this._flipBtn) this._flipBtn.style.display = 'inline-block';
        if (this._retakeBtn) this._retakeBtn.style.display = 'none';

        this._startCamera();
    }

    _flipCamera(): void {
        const current = this.getAttribute('facing') || 'environment';
        const next = current === 'environment' ? 'user' : 'environment';
        this.setAttribute('facing', next);
        this._startCamera();
    }

    get css(): string {
        return html`<style>
        :host {
            display: block;
            overflow: hidden;
        }
        .container {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 12px;
        }
        .preview, .captured {
            width: 100%;
            max-width: 640px;
            border-radius: 8px;
            background: #000;
            object-fit: cover;
        }
        .canvas {
            display: none;
        }
        .captured {
            display: none;
        }
        .controls {
            display: flex;
            gap: 12px;
            justify-content: center;
            flex-wrap: wrap;
        }
        .controls button {
            font-family: sans-serif;
            font-size: 16px;
            padding: 10px 20px;
            border: 1px solid #ccc;
            border-radius: 6px;
            background: #fff;
            cursor: pointer;
            transition: background 0.15s;
        }
        .controls button:hover {
            background: #f0f0f0;
        }
        .capture-btn {
            background: #4CAF50 !important;
            color: #fff;
            border-color: #4CAF50 !important;
        }
        .capture-btn:hover {
            background: #43A047 !important;
        }
        </style>`;
    }

    get htmlTemplate(): string {
        return html`
        <div class="container">
            <video class="preview" autoplay playsinline></video>
            <canvas class="canvas"></canvas>
            <img class="captured" alt="Captured photo">
            <div class="controls">
                <button class="flip-btn" type="button">\u27F2 Flip</button>
                <button class="capture-btn" type="button">\uD83D\uDCF7 Capture</button>
                <button class="retake-btn" type="button" style="display:none">\u21BA Retake</button>
            </div>
        </div>`;
    }
}

AABaseElement.registerAAElement('aa-camera', AACamera);
