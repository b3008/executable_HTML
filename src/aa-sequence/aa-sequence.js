import BaseElement from './../aa-baseElement/baseElement.js'
import AAJump from "./aa-jump/aa-jump.js";

export default class AASequence extends BaseElement {


    static get observedAttributes() {
        return ['name', 'should-run', 'debug'];
    }

    constructor() {
        super();
        this.root = this.attachShadow({ mode: 'open' });
        this.root.innerHTML = '<slot></slot>';
    }
    connectedCallback() {
        

        
        // if (this.id === '') console.warn(this, 'has no id');
       
        // console.log('ready sequence', this.name);
        this.started = false;


        // console.log('attached sequence');
        if (this.displayAll) {

            //if(typeof this.innerFragment=='undefined')
            {
                // console.warn('.innerFragment is undefined');
                this.restoreHeldNodes(this)
            }
            return;
        }

        if ( (this.shouldRun===null)||(this.shouldRun===true)) {

            this.start()
        };



    }


    get css() {
        return html`
            <style>
                :host {
                    display: block;
                }
            </style>
        `
    }

    get html() {
        return html`
            <slot></slot>
            <button id='nextButton' hidden></button>
        `
    
    }




    properties() {

        return {
            shouldRun: {
                type: Boolean,
                value: true,
                reflectToAttribute: false,
                reflectToConfig: false
            },

            showNextButton: {
                type: Boolean,
                value: false
            },

            nextKeyCode: {
                type: Number,
                value: 0
            },

            prevKeyCode: {
                type: Number,
                value: 0
            },

            displayAll: {
                type: Boolean,
                value: false
            }
        }
    }








    start() {
        
        
        if (this.started) return;
        //  an  .innerFragment member should have been supplied by an ema-session element containing this ema-sequence
        //  somewhere in its subtree. pick each child of the fragment separately
        if (typeof this.innerFragment ==='undefined') {
            console.warn('.innerFragment is undefined');
            this.restoreHeldNodes(this)
            return;
        }
        else {

        }
        //  first  replace any nested <ema-*> elements
        this._replaceChildNodesWithHolderElements(this.innerFragment);
        //this.replaceEmaChildNodesWithHolders(this.innerFragment);


        this.started = true;
        this.fragmentChildrenCounter = 0;
        this.formerNodes = [];
        this.myFragmentChildren = [];

        //  don't assign listeners here, only to the final fragment child
        for (let i = 0; i < this.innerFragment.children.length; i++) {

            this.myFragmentChildren.push(this.innerFragment.children[i])
            this.innerFragment.children[i].endEventListener = this.endEventListener.bind(this);
        }

        // this.next()

        if (this.nextKeyCode) {
            this.addEventListener('keyup', function (e) {

            })
        }
    }

    next(name) {
        if(!this.counter){
            this.counter = 1;
        }else{
            this.counter++;
            if(this.counter>500){
                return null;
            }
        }
        if (!this.started) { 
            this.start(); 
        }
        
        if (this.myFragmentChildren.length === 0) return;       
        this._makeCurrentNodeAFormerNode();

        let fragmentChild;
        if(name){
          
            for(let i=0; i<this.myFragmentChildren.length; i++){
                let child =  this.myFragmentChildren[i].heldElement || this.myFragmentChildren[i];
                if(child.name==name){
                    // if( this.formerNodes.indexOf(child)!=-1){
                    
                    //     debugger;
                    //     fragmentChild = this._createHolderWithHeldElement(child, false, "debug");
                    // }else{
                        fragmentChild = this.myFragmentChildren[i];
                    // }
                    this.fragmentChildrenCounter = i;
                    break;
                }
            } 
           
           
        }else{
            if (this.fragmentChildrenCounter >= this.myFragmentChildren.length) return null;
            fragmentChild = this.myFragmentChildren[this.fragmentChildrenCounter];
        }
        if(fragmentChild.tagName!="AA-HOLDER"){
            fragmentChild = this._createHolderWithHeldElement(fragmentChild, false, "debug");
        }
        debugger;
        //  update the current node
        this.currentNode = this._replaceWithElementIfChildIsHolder(fragmentChild);;
        this.currentNode.endEventListener = this.endEventListener.bind(this);
        this.fragmentChildrenCounter += 1;
        //  it's important that the listener is added and the fragmentChildrenCounter increase
        //  before appending the child, otherwise, because appending nodes triggers their attached callback,
        //  certain nodes (like ema-choose that fails to be true in any condition)
        //  will immediately dispatch an 'endEvent'Event which in this case will call next()
        //  again, before the current next() returns.
        //  If the listener has not been added, no one will catch the event
        //  and if fragmentChildrenCounter has not increased,
        //  next() will grab the same object again from this.myFragmentChildren

        this.currentNode.addEventListener('endEvent', this.currentNode.endEventListener);
        console.log(this.currentNode);
        setTimeout(()=>{
            // this way appendChild will happen after next() returns, 
            // and subsequent calls to next() that will result from it will not be recursive
            this.appendChild(this.currentNode);
            this._restoreHeldNodes(this.currentNode);
        }, 0);
        
       
        
        if(!this.currentNode._dispatchEndEvent){
            debugger;
            this.next();
        }
        return this.currentNode;
    }

    _replaceWithElementIfChildIsHolder(fragmentChild){
        if (this._isHolder(fragmentChild)) {
            return this._replaceHolderWithElement(fragmentChild);
        }
        
        return fragmentChild;
    }

    _makeCurrentNodeAFormerNode(){
        if (typeof this.currentNode != 'undefined') {
            this.currentNode.removeEventListener('endEvent', this.currentNode.endEventListener);
            this.formerNodes.push(this.currentNode);
        }
    }

    
    
    endEventListener(e) {

        e.stopPropagation();
        let goto = null
        if(e.detail) if(e.detail.goto) goto=e.detail.goto;
        let next = this.next(goto);
        if (next === null) {
            this._dispatchEndEvent();
        }
    }

}



if (!customElements.get('aa-sequence')) {

    if (typeof window.AANodeNames ==='undefined') { window.AANodeNames = []; }
    window.AANodeNames.push('AA-SEQUENCE');

    customElements.define('aa-sequence', AASequence);


}

