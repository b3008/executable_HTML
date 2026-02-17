import { AABaseElement, html, type AAPropertiesMap } from '../aa-base-element/aa-base-element';
export class AAAffectGrid extends AABaseElement {

    static get category(): string {
        return "response item";
    }

    static get tag(): string {
        return 'aa-affect-grid';
    }

    static get properties(): AAPropertiesMap {
        return {

            ...super.properties,

            'top-label': {
                type: String,
                userDefined: true,
                value: ''
            },

            'bottom-label': {
                type: String,
                userDefined: true,
                value: ''
            },

            'left-label': {
                type: String,
                userDefined: true,
                value: ''
            },

            'center-label': {
                type: String,
                userDefined: true,
                value: ''
            },

            'right-label': {
                type: String,
                userDefined: true,
                value: ''
            },

            'top-left-label': {
                type: String,
                userDefined: true,
                value: ''
            },

            'top-right-label': {
                type: String,
                userDefined: true,
                value: ''
            },

            'bottom-left-label': {
                type: String,
                userDefined: true,
                value: ''
            },

            'bottom-right-label': {
                type: String,
                userDefined: true,
                value: ''
            },

            'left-top-label': {
                type: String,
                userDefined: true,
                value: ''
            },

            'left-bottom-label': {
                type: String,
                userDefined: true,
                value: ''
            },

            'right-top-label': {
                type: String,
                userDefined: true,
                value: ''
            },

            'right-bottom-label': {
                type: String,
                userDefined: true,
                value: ''
            },

            rows: {
                type: Number,
                userDefined: true,
                value: 11
            },

            columns: {
                type: Number,
                userDefined: true,
                value: 11
            },

            value: {
                type: Array,

            },

            required: {
                type: Boolean,
                userDefined: true,
                value: false
            }

        }
    }

    static get acceptsElements(): null {
        return null
    }

    static get observedAttributes(): string[] {
        return Object.keys(AAAffectGrid.properties);
    }



    get x(): number | null {
        let val = this.getAttribute("value");
        if (!val) return null;
        return parseInt(val.split(",")[0]);
    }

    get y(): number | null {
        let val = this.getAttribute("value");
        if (!val) return null;
        return parseInt(val.split(",")[1]);
    }

    get value(): [number, number] | null {
        let val = this.getAttribute("value");
        if (!val) return null

        let s = val.split(",");
        return [parseInt(s[0]), parseInt(s[1])];
    }
    set value(val: any) {
        this.setAttribute('value', val);

    }

    get minLabel(): string | null {
        return this.getAttribute('min-label');
    }

    get maxLabel(): string | null {
        return this.getAttribute('max-label');
    }

    set minLabel(val: any) {
        this.setAttribute('min-label', val);
    }

    set maxLabel(val: any) {
        this.setAttribute('max-label', val);
    }

    set min(val: any) {
        this.setAttribute('min', val);
    }

    set max(val: any) {
        this.setAttribute('max', val);
    }

    root: ShadowRoot;
    grid: HTMLElement | null = null;
    selectedCell: HTMLElement | null = null;
    totalContainer: HTMLElement | null = null;

    constructor() {
        super();
        this.root = this.attachShadow({ mode: 'open' });



    }



    connectedCallback(): void {
        super.connectedCallback();
        if (this.topLeftLabel === null) this.topLeftLabel = '';
        if (this.topLabel === null) this.topLabel = '';
        if (this.topRightLabel === null) this.topRightLabel = '';
        if (this.leftTopLabel === null) this.leftTopLabel = '';
        if (this.leftLabel === null) this.leftLabel = '';
        if (this.leftBottomLabel === null) this.leftBottomLabel = '';
        if (this.rightTopLabel === null) this.rightTopLabel = '';
        if (this.rightLabel === null) this.rightLabel = '';
        if (this.rightBottomLabel === null) this.rightBottomLabel = '';
        if (this.bottomLeftLabel === null) this.bottomLeftLabel = '';
        if (this.bottomLabel === null) this.bottomLabel = '';
        // if (this.bottomRightLabel === null) this.bottomRightLabel = '';

        this.root.innerHTML = this.css + this.html;

        // this.topLeft = this.root.querySelector('.top-left');

        // this.topRight = this.root.querySelector('.top-right');
        // this.leftMargin =  this.root.querySelector('.left-margin');
        // this.rightMargin = this.root.querySelector('.right-margin');




        this.grid = this.root.querySelector('.grid');
        this.grid!.addEventListener("mousedown", (e: Event) => {
            let currentValue = this.value;

            let cell = e.target as HTMLElement;
            this.value = [cell.dataset.x, cell.dataset.y];


            if (this.selectedCell) {
                this.selectedCell.classList.remove('selected');
            }
            this.selectedCell = cell;
            this.selectedCell.classList.add('selected');

            let newValue = this.value;


            if (!currentValue) this.dispatchEvent(new CustomEvent("change", { bubbles: true }))
            else {
                if ((currentValue[0] != newValue![0]) || (currentValue[1] != newValue![1])) {
                    this.dispatchEvent(new CustomEvent("change", { bubbles: true }));
                }
            }


        });

        this.totalContainer = this.root.querySelector('.total-container');

        this.totalContainer!.style.height = window.getComputedStyle(this.totalContainer!).width;
        (this.root.querySelector(".leftLabels") as HTMLElement).style.width = window.getComputedStyle(this.grid!).height;
        (this.root.querySelector(".rightLabels") as HTMLElement).style.width = window.getComputedStyle(this.grid!).height;

        //register a resize observer for top container
        if (ResizeObserver) {
            new ResizeObserver(() => {

                this.totalContainer!.style.height = window.getComputedStyle(this.totalContainer!).width;
                (this.root.querySelector(".leftLabels") as HTMLElement).style.width = window.getComputedStyle(this.grid!).height;
                (this.root.querySelector(".rightLabels") as HTMLElement).style.width = window.getComputedStyle(this.grid!).height;

            }).observe(this.root.querySelector('.top-label')!);
        }
        // else{
        //     console.warn("ResizeObserver is not defined here");
        // }




    }

    get css(): string {
        return html`<style>
        :host{
            display:block;
            font-family: "Roboto Flex", Roboto, Noto, sans-serif;
            font-size: 0.8em;
        }
        .top-section{
            height:40px;
            width:100%;

        }
        .top-left{
            text-align:left;
        }
        .top-label{
            text-align:center;
            width:100% !important;
        }
        .top-right{
            text-align:right;
        }


        .bottom-left{
            text-align:left;
        }
        .bottom-label{
            text-align:center;
            border:solid 0px;
            width: 100% !important;
        }
        .bottom-right{
            text-align:right;
        }
        .top-left-corner{
            width:40px;
            height:40px;
        }
        .top-right-corner{
            width:40px;
            height:40px;
        }
        .bottom-left-corner{
            width:40px;
            height:40px;
        }
        .bottom-right-corner{
            width:40px;
            height:40px;
        }
        .middle-section{

            flex-grow:2;
        }
        .bottom-section{

            height:40px;
            width:100%;
        }
        .left-margin{
            width:40px;
            height:100%;
        }
        .right-margin{
            width:40px;
            height:100%;
        }
        .grid{
            display:grid;
            grid-template-columns: repeat(${this.columns}, ${100 / this.columns}%);

            flex-grow:2;
            width:100%;
            height:100%;
        }
        .cell{
            border:solid thin;
            /* transition:background-color 0.2s; */
        }
        .cell.top{
            border-top:solid 2px;
        }
        .cell.bottom{
            border-bottom:solid 2px;
        }
        .cell.left{
            border-left:solid 2px;
        }
        .cell.right{
            border-right: solid 2px;
        }
        .cell.selected{
            background-color: #6750a4; //default primary color for material design
        }

        </style>
        `;
    }

    get html(): string {


        let grid = '';
        for (let j = 0; j < this.rows; j++) {
            for (let i = 0; i < this.columns; i++) {
                grid += html`<div class="cell  ${j == 0 ? 'top' : ''} ${j == this.rows - 1 ? `bottom` : ''}  ${i == 0 ? `left` : ''}  ${i == this.columns - 1 ? `right` : ''}" data-x="${i + 1 - Math.round(this.columns / 2)}" data-y="${Math.round(this.rows / 2) - j - 1}">
            </div>`;
            }
        }

        let source = html`
            <div class="total-container" style="position:relative; display:flex; flex-direction:column;">

                <div class="top-section" style="display:flex; flex-direction:row">
                    <div class="top-left-corner"></div>
                    <div style="width:100%; display:flex; flex-direction:row; justify-content:space-between">
                        <div class="top-left label" style="width:33.3%">${this.topLeftLabel}</div>
                        <div class="top-label" style="width:33.3%; text-align:center">${this.topLabel}</div>
                        <div class="top-right label" style="width:33.3%">${this.topRightLabel}</div>
                    </div>
                    <div class="top-right-corner"></div>
                </div>


                <div class="middle-section" style="display:flex; flex-direction:row">
                    <div class="left-margin" style="display:flex; flex-direction:column;"></div>
                    <div class="grid" style="padding:0px">${grid}</div>
                    <div class="right-margin" style="display:flex; flex-direction:column"></div>
                </div>


                <div class="bottom-section" style="display:flex; flex-direction:row;margin-top:10px">
                <div class="bottom-left-corner" ></div>
                <div style="width:100%; display:flex; flex-direction:row; justify-content:space-between">
                    <div class="bottom-left label" style="width:33.3%">${this.bottomLeftLabel}</div>
                    <div class="bottom-label" style="width:33.3%">${this.bottomLabel}</div>
                    <div class="bottom-right label" style="width:33.3%">${this.bottomRightLabel}</div>

                </div>
                    <div class="bottom-right-corner"></div>

                </div>

                <div class="leftLabels" style="position:absolute; bottom:30px; left:0px;  display:flex; flex-direction:row; justify-content:space-between; transform:rotate(-90deg); transform-origin:top left;">
                    <div style="width:33.3%; text-align:left; ">${this.leftBottomLabel}</div>
                    <div style="width:33.3%; text-align:center; flex-grow:2">${this.leftLabel}</div>
                    <div style="width:33.3%;text-align:right">${this.leftTopLabel}</div>
                </div>

                <div class="rightLabels" style="position:absolute; bottom:50px; right:20px; display:flex; flex-direction:row; justify-content:space-between; transform:rotate(90deg); transform-origin:bottom right;">
                    <div style="width:33.3%; text-align:left">${this.rightTopLabel}</div>
                    <div style="width:33.3%; text-align:center; flex-grow:2">${this.rightLabel}</div>
                    <div style="width:33.3%; text-align:right">${this.rightBottomLabel}</div>
                </div>

            </div>

        `;

        return source;
    }


}

AABaseElement.registerAAElement('aa-affect-grid', AAAffectGrid);
