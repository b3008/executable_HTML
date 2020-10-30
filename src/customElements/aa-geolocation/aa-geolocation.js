import BaseElement from './../aa-baseElement/baseElement.js'
export default class AAGeolocation extends BaseElement {

    static get properties() {
        return {
            name: {
                type: String,
                userDefined: true
            },
            'value': {
                type: String,
                userDefined: false
            },

            // 'lat': {
            //     type: String,
            //     userDefined: false
            // },

            // 'lon': {
            //     type: String,
            //     userDefined: false
            // },

            // 'timestamp':{
            //     type: Date,
            //     userDefined: false
            // }

        }
    }

    static get acceptsElements() {
        return []
    }

    static get observedAttributes() {

        return Object.keys(AAGeolocation.properties);

    }

    constructor() {
        super();

        this.root = this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {


        // let session = this._getParentSession();
        // session.setData(this.name, this.value);
        // this._dispatchEndEvent({autoDispatch:true});
        // if(!this.debug) {this.remove();}

        if ("geolocation" in navigator) {

            navigator.geolocation.getCurrentPosition( (position)=> {

                //  in this way it is synchronous, there will be no progression to the next
                //  item in a sequence unless this callback function is called.

                //  it could also be made asynchronous, where there will be a progression
                //  regardless. Perhaps asynchronous components should notify parents
                //  of their presence.

                // do_something(position.coords.latitude, position.coords.longitude);

                let lat = position.coords.latitude;
                let lon = position.coords.longitude;
                let timestamp = new Date();
                this.value = { lat,  lon, timestamp}
           
                var valueSubmitEvent = new CustomEvent('valueSubmit', {bubbles:true, detail:{value:this.value}});
                this.dispatchEvent(valueSubmitEvent);



                // var assignableEndEvent = new CustomEvent("assignableEnd", {bubbles:true, detail:{value:this.value}});
                // this.dispatchEvent(assignableEndEvent);
                this._dispatchEndEvent({value:this.value})
            });
        }
    }


}

BaseElement.registerAAElement('aa-geolocation', AAGeolocation);

