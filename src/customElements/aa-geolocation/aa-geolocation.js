import BaseElement from './../aa-baseElement/baseElement.js'
export default class AAGeolocation extends BaseElement {

    static get tag() { 
        return 'aa-geolocation';
    }

    static get properties() {
        return {
            name: {
                type: String,
                userDefined: true
            },


            'get-on-request': {
                type: Boolean,
                userDefined: true,
                value: false
            },

            'ready': {
                type: Boolean,
                userDefined: false,
                value: false
            }
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



    get value() {
        return this._getLocation();
    }

    set value(val) {
        this.setAttribute("value", val);
    }

    async _getValue() {
        let location = await this._getLocation();

        console.log(location);
        return location;
    }


    _getLocation() {

        return new Promise((resolve, reject) => {
            if ("geolocation" in navigator) {

                // resolve("skata");
                navigator.geolocation.getCurrentPosition((position) => {

                    //  in this way it is synchronous, there will be no progression to the next
                    //  item in a sequence unless this callback function is called.

                    //  it could also be made asynchronous, where there will be a progression
                    //  regardless. Perhaps asynchronous components should notify parents
                    //  of their presence.

                    // do_something(position.coords.latitude, position.coords.longitude);

                    let lat = position.coords.latitude;
                    let lon = position.coords.longitude;
                    let timestamp = new Date();

                    let val = { lat, lon, timestamp }

                    resolve(val);
                    // var valueSubmitEvent = new CustomEvent('valueSubmit', { bubbles: true, detail: { value: this.value } });
                    // this.dispatchEvent(valueSubmitEvent);
                    // this._dispatchEndEvent({ value: this.value, autoDispatch: true })
                });
            } else {
                reject();
            }
        })
    }
    connectedCallback() {


        super.connectedCallback();
        // let session = this._getParentSession();
        // session.setData(this.name, this.value);
        // this._dispatchEndEvent({autoDispatch:true});
        // if(!this.debug) {this.remove();}

        // if (!this.getOnRequest) {
        //     this._getValue();
        //     var valueSubmitEvent = new CustomEvent('valueSubmit', { bubbles: true, detail: { value: this.value } });
        //     this.dispatchEvent(valueSubmitEvent);
        //     this._dispatchEndEvent({ value: this.value, autoDispatch: true })
        // }

        this._ready = true;
        
        if (!this.getOnRequest) {
            this._getLocation().then(val=>{
                var valueSubmitEvent = new CustomEvent('valueSubmit', { bubbles: true, detail: { value:val } });
                this.dispatchEvent(valueSubmitEvent);
                this._dispatchEndEvent({ value: val, autoDispatch: true })
            });
        }
    }


}

BaseElement.registerAAElement('aa-geolocation', AAGeolocation);

