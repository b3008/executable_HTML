
export default class AAHolder extends HTMLElement{
 
    get css(){
        return html`
            <style>
            :host {
                
                #display{
                border:solid thin;
                /*width:50px;*/
                /*height:20px;*/
                };
            </style>
        `;
    }

    get html()

        <slot>
        </slot>

        <pre id="display" class="prettyprint lang-html" hidden >

        </pre>

 

 


    // if(typeof AssignableNodeNames == "undefined") AssignableNodeNames = [];
	// AssignableNodeNames.push("EMA-SEQUENCE");

   emaHolder =  Polymer({

        is: 'ema-holder',

        properties:
        {
            name : {type:String},
            id : {type:String},
            type : {type:String},

            emaItemType :{
                type:Array,
                // value:["Widget", "Assignable"],
                reflectToAttribute : false
            },

            emaReferencedItems :{type:Array, value:[]},

            collection : {
                type:String,
                // value:"assignables",
              reflectToConfig:false
            },


            shouldRun : {
              type:Boolean,
              value:false,
              reflectToAttribute:false,
              reflectToConfig:false
            }
        },

        created : function(){
          // console.log("created holder");
          this.templateHolders = [];

        },

        attached: function()
        {
            // console.log("attached holder");
             this.scopeSubtree(this, true);
        },


        display : function(){
          console.log("display on", this);
          this.$.display.hidden = false;

          console.log("outerhtml is", this.heldElement.outerHTML);
          this.$.display.innerText = this.heldElementOuterHTML;
          debugger;
        }

    }


if (!customElements.get('aa-holder')) {

if (typeof window.AssignableNodeNames == "undefined") { window.AssignableNodeNames = [];}
window.AssignableNodeNames.push("AA-HOLDER");

customElements.define('aa-holder', AAholder);


}
