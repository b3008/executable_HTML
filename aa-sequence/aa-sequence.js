export default class AASequence extends BaseElement {

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
            <paper-button id="nextButton" hidden></paper-button>
        `
    }
       

    static get observedAttributes(){
        return ['shouldRun']
    }

  

    properties(){
    
            return {
                shouldRun : {
              type:Boolean,
              value:true,
              reflectToAttribute:false,
              reflectToConfig:false
            },

            showNextButton:{
                type:Boolean,
                value:false
            },

            nextKeyCode:{
                type:Number,
                value:0
            },

            prevKeyCode:{
                type:Number,
                value:0
            },

            displayAll:{
                type:Boolean,
                value:false
            }
        }
    }

        // created : function(){
        //   console.log("created sequence", this.name);
        //   seq = this;

        // }

        connectedCallback(){
            //super();
            
            var myself = this;
            if(this.id=="") console.warn(this, "has no id");
            if(typeof this.name!="undefined") window[this.name] = this;
            console.log("ready sequence", this.name);
            this.started = false;

            if(typeof RESEARCHER_ENVIRONMENT!="undefined")  if(RESEARCHER_ENVIRONMENT)  this.started =true;


        }

        attached: function()
        {

            console.log("attached sequence");
            if(this.displayAll)
            {
                
                // if(typeof this.innerFragment=="undefined")
                {
                    console.warn(".innerFragment is undefined");
                    this.restoreHeldNodes(this)
                }
                return;
            }

            if(this.shouldRun) {

                this.start()
            };
        }


        start: function()
        {
            var myself = this;
            if(this.started) return;
            //  an  .innerFragment member should have been supplied by an ema-session element containing this ema-sequence
            //  somewhere in its subtree. pick each child of the fragment separately
            if(typeof this.innerFragment=="undefined")
            {
                console.warn(".innerFragment is undefined");
                this.restoreHeldNodes(this)
                return;
            }
            else{

            }
            //  first  replace any nested <ema-*> elements
            this.analyzeChildNodesForElement(this.innerFragment);
            //this.replaceEmaChildNodesWithHolders(this.innerFragment);


            this.started = true;
            this.fragmentChildrenCounter = 0;
            this.formerNodes = [];
            this.myFragmentChildren = [];

            //  don't assign listeners here, only to the final fragment child
            for(var i=0; i<Polymer.dom(this.innerFragment).children.length; i++)
            {

                this.myFragmentChildren.push(Polymer.dom(this.innerFragment).children[i])
                this.innerFragment.children[i].assignableEndListener = this.assignableEndListener.bind(this);
                // console.log("adding AssignableEnd to ", this.innerFragment.children[i])
                // if(this.innerFragment.children[i].nodeName!="EMA-HOLDER")
                // {
                    // this.innerFragment.children[i].addEventListener("assignableEnd", this.innerFragment.children[i].assignableEndListener);
                // }
            }
            
            this.next();

            if(this.nextKeyCode)
            {
                this.addEventListener("keyup", function(e){

                })
            }
        }

        next: function(){
            if(!this.started)   this.start();
            if(this.myFragmentChildren.length==0) return;
            console.log(this.fragmentChildrenCounter);
            if(this.fragmentChildrenCounter>=this.myFragmentChildren.length) return null;

            if(typeof this.currentNode!="undefined") this.formerNodes.push(this.currentNode);
            var fragmentChild = this.myFragmentChildren[this.fragmentChildrenCounter];

            if(this.isHolder(fragmentChild)){
                finalFragmentChild = this.replaceHolderWithElement(fragmentChild);
            }
            else
            {

              finalFragmentChild = fragmentChild;

            }



            if(typeof this.currentNode!="undefined")
            {

                this.currentNode.removeEventListener("assignableEnd", this.currentNode.assignableEndListener);
            }

            //  update the current node



            this.currentNode = finalFragmentChild;
            this.currentNode.assignableEndListener =  this.assignableEndListener.bind(this);
            this.fragmentChildrenCounter+=1;
            //  it's important that the listener is added and the fragmentChildrenCounter increase
            //  before appending the child, otherwise, because appending nodes triggers their attached callback,
            //  certain nodes (like ema-choose that fails to be true in any condition)
            //  will immediately dispatch an "assignableEnd"Event which in this case will call next()
            //  again, before the current next() returns.
            //  If the listener has not been added, no one will catch the event
            //  and if fragmentChildrenCounter has not increased,
            //  next() will grab the same object again from this.myFragmentChildren

            this.currentNode.addEventListener("assignableEnd", this.currentNode.assignableEndListener);


            Polymer.dom(this).appendChild(finalFragmentChild);
            this.restoreHeldNodes(finalFragmentChild)



            return finalFragmentChild

        }


        assignableEndListener : function(e)
        {
            var myself = this;
            e.stopPropagation();
            var next = myself.next();
            if(next==null){
                debugger;
                var assignableEndEvent = new CustomEvent("assignableEnd", {bubbles:true});
                myself.dispatchEvent(assignableEndEvent);
            }
        }

    }


    addGenericItemTo(emaSequence.prototype);

    if(typeof components=="undefined")  components = {};
  	components[emaSequence.is.toUpperCase()] = emaSequence;







