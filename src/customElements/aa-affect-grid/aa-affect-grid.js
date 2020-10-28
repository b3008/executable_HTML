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

        if(this.topLeftLabel === null) this.topLeftLabel='';
        if(this.topLabel === null) this.topLabel='';
        if(this.topRightLabel === null) this.topRightLabel='';
        if(this.leftTopLabel === null) this.leftTopLabel='';
        if(this.leftLabel === null) this.leftLabel='';
        if(this.leftBottomLabel === null) this.leftBottomLabel='';
        if(this.rightTopLabel === null) this.rightTopLabel='';
        if(this.rightLabel === null) this.rightLabel='';
        if(this.rightBottomLabel === null) this.rightBottomLabel='';
        if(this.bottomLeftLabel === null) this.bottomLeftLabel='';
        if(this.bottomLabel === null) this.bottomLabel='';
        if(this.bottomRightLabel === null) this.bottomRightLabel='';
        this.root = this.attachShadow({ mode: 'open' });

        
        
    }



    connectedCallback() {
        super.connectedCallback();


        this.root.innerHTML = this.css + this.html;

        // this.topLeft = this.root.querySelector('.top-left');
       
        // this.topRight = this.root.querySelector('.top-right');
        // this.leftMargin =  this.root.querySelector('.left-margin');
        // this.rightMargin = this.root.querySelector('.right-margin');
        

        

        this.grid = this.root.querySelector('.grid');
        this.grid.addEventListener("click", (e)=>{
            let cell = e.path[0];
            this.value = [cell.dataset.x, cell.dataset.y];
            
            
            if(this.selectedCell){
                this.selectedCell.classList.remove('selected');
            }
            this.selectedCell = cell;
            this.selectedCell.classList.add('selected');


        });

        this.totalContainer = this.root.querySelector('.total-container');

        this.totalContainer.style.height = window.getComputedStyle(this.totalContainer).width;
        this.root.querySelector(".leftLabels").style.width = window.getComputedStyle(this.grid).height;
        this.root.querySelector(".rightLabels").style.width = window.getComputedStyle(this.grid).height;
        
        //register a resize observer for top container
        if(ResizeObserver){
            new ResizeObserver( ()=>{

                this.totalContainer.style.height = window.getComputedStyle(this.totalContainer).width;
                this.root.querySelector(".leftLabels").style.width = window.getComputedStyle(this.grid).height;
                this.root.querySelector(".rightLabels").style.width = window.getComputedStyle(this.grid).height;

            }).observe(this.root.querySelector('.top-label'));
        }
        // else{
        //     console.warn("ResizeObserver is not defined here");
        // }

       


        
    }

    get css() {
        return html`<style>

        
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

        .top-label{
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
            
            flex-grow:2;
            width:100%;
            height:100%;
        }
        .cell{
            border:solid thin;
            transition:background-color 0.2s;
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
            background-color: #3367D6;
            
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
                grid+=html`<div class="cell  ${j==0?'top':''} ${j==this.rows-1?`bottom`:''}  ${i==0?`left`:''}  ${i==this.columns-1?`right`:''}" data-x="${Math.round(this.columns/2)-i-1 }" data-y="${j+1-Math.round(this.rows/2)}">
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
                    <div class="bottom label" style="width:33.3%">${this.bottomLabel}</div>
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

BaseElement.registerAAElement('aa-affect-grid', AAAffectGrid);