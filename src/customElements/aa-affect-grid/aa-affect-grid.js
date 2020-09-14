import BaseElement from '../aa-baseElement/baseElement.js';
export default class AAAffectGrid extends BaseElement {



    static get properties() {
        return {

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

            value:{
                type: Array,

            }

        }
    }

    static get acceptsElements() {
        return null
    }

    static get observedAttributes() {
        return Object.keys(AAAffectGrid.properties);
    }




    get value() {
        if (!this.inputItem) {
            return this.getAttribute('value');
        }
        return this.inputItem.value;
    }
    set value(val) {
        this.setAttribute('value', val);
        if (this.inputItem) {
            this.inputItem.value = val;
        }

    }

    get minLabel() {
        return this.getAttribute('min-label');
    }

    get maxLabel() {
        return this.getAttribute('max-label');
    }

    set minLabel(val) {
        this.setAttribute('min-label', val);
        if (this.inputItem) {
            this.inputItem.minLabel = val;
        }
    }

    set maxLabel(val) {
        this.setAttribute('max-label', val);
        if (this.inputItem) {
            this.inputItem.maxLabel = val;
        }
    }

    set min(val) {
        this.setAttribute('min', val);
        if (this.inputItem) {
            this.inputItem.min = val;
        }
    }

    set max(val) {
        this.setAttribute('max', val);
        if (this.inputItem) {
            this.inputItem.max = val;
        }
    }


    constructor() {
        super();

        this.root = this.attachShadow({ mode: 'open' });

        
        
    }



    connectedCallback() {
        super.connectedCallback();


        this.root.innerHTML = this.css + this.html;

        this.topLeft = this.root.querySelector('.top-left');
        this.top = this.root.querySelector('.top');
        this.topRight = this.root.querySelector('.top-right');
        this.leftMargin =  this.root.querySelector('.left-margin');
        this.rightMargin = this.root.querySelector('.right-margin');
        

        

        this.grid = this.root.querySelector('.grid');
        this.grid.addEventListener("click", (e)=>{
            let cell = e.path[0];
            this.value = [cell.dataset.x, cell.dataset.y];
            console.log(this.value);
            console.log(typeof this.value)
        })
        
        this.totalContainer = this.root.querySelector('.total-container');

        this.totalContainer.style.height = window.getComputedStyle(this.totalContainer).width;
        this.root.querySelector(".leftLabels").style.width = window.getComputedStyle(this.grid).height;
        this.root.querySelector(".rightLabels").style.width = window.getComputedStyle(this.grid).height;
        
        //register a resize observer for top container
        let gridResizeObserver = new ResizeObserver( ()=>{
            console.log("resize");
            this.totalContainer.style.height = window.getComputedStyle(this.totalContainer).width;
            this.root.querySelector(".leftLabels").style.width = window.getComputedStyle(this.grid).height;
            this.root.querySelector(".rightLabels").style.width = window.getComputedStyle(this.grid).height;

        }).observe(this.top);


       


        
    }

    get css() {
        return `<style>
        :host{
            display:block;
            font-family: Roboto, Noto, sans-serif;
            
        }
        .top-section{
            height:40px;
            width:100%;
         
        }

        .top-left{
            text-align:left;
        }
        .top{
            text-align:center;
        }
        .top-right{
            text-align:right;
        }

        .bottom-left{
            text-align:left;
        }
        .bottom{
            text-align:center;
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


        .vertical-left{
            
            // transform:rotate(-90deg);
            // transform-origin: right bottom;
            white-space:pre;
        }

        .vertical-right{
            
            // transform: rotate(90deg) translate(0,-30px);
            // transform-origin: 0px 0px;
            // white-space:pre;
            border:solid thin;
        }

        .vertical-right-center{
            
            // transform: rotate(90deg) translate(0,-30px);;
            // transform-origin: 50% -50%;
            // white-space:pre;
            border:solid thin;
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
            grid-template-columns: repeat(${this.columns}, ${100/this.columns}%);
            border:solid thin;
            flex-grow:2;
            width:100%;
            height:100%;
        }
        .cell{
            border:solid thin;
        }

        .label{
            flex-grow:1
        }
        </style>
        `;
    }

    get html() {
        

        let grid ='';
        for(let j=0; j<this.rows; j++){
            for(let i=0; i<this.columns; i++){
                grid+=html`<div class="cell" data-x="${ Math.round(this.columns/2) - i -1 }" data-y="${ j+1 - Math.round(this.rows/2)}">
                ${ i+1 - Math.round(this.columns/2)  }, ${ Math.round(this.rows/2) - j-1}
            </div>`;
            }
        }

        let source = html`
            <div class="total-container" style="position:relative; display:flex; flex-direction:column; border:solid">
                
                <div class="top-section" style="display:flex; flex-direction:row">
                <div class="top-left-corner"></div>    
                <div class="top-left label">${this.topLeftLabel}</div>
                    <div class="top label">${this.topLabel}</div>
                    <div class="top-right label">${this.topRightLabel}</div>
                    <div class="top-right-corner"></div>    
                </div>
            
                
                <div class="middle-section" style="display:flex; flex-direction:row">
                    <div class="left-margin" style="display:flex; flex-direction:column; border:solid thick red"></div>
                    <div class="grid">${grid}</div>
                    <div class="right-margin" style="display:flex; flex-direction:column"></div>
                </div>
                

                <div class="bottom-section" style="display:flex; flex-direction:row">
                <div class="bottom-left-corner" ></div>    
                    <div class="bottom-left label">${this.bottomLeftLabel}</div>
                    <div class="bottom label">${this.bottomLabel}</div>
                    <div class="bottom-right label">${this.bottomRightLabel}</div>
                    <div class="bottom-right-corner"></div>    
                </div>

                <div class="leftLabels" style="position:absolute; bottom:20px; left:10px;  display:flex; flex-direction:row; transform:rotate(-90deg); transform-origin:top left;">
                    <div style="width:100% text-align:left; ">one</div>    
                    <div style="width:100%; text-align:center; flex-grow:2">two</div>    
                    <div style="width:100%l text-align:right">three</div>    
                </div>

                <div class="rightLabels" style="position:absolute; bottom:40px; right:30px; display:flex; flex-direction:row; transform:rotate(90deg); transform-origin:bottom right;">
                    <div style="width:100% text-align:left">seven</div>    
                    <div style="width:100%; text-align:center; flex-grow:2">eight</div>    
                    <div style="width:100%l text-align:right">nine</div>    
                </div>

            </div>
        
        `;
       
       console.log(source);
        
        return source;
    }


}

BaseElement.registerAAElement('aa-affect-grid', AAAffectGrid);