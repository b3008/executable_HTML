import { AABaseElement, type AAPropertiesMap } from '../aa-base-element/aa-base-element'
export class AAGeolocation extends AABaseElement {


    static get category(): string {
        return "response item";
    }

    static get tag(): string {
        return 'aa-geolocation';
    }

    static get properties(): AAPropertiesMap {
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

    static get acceptsElements(): string[] {
        return []
    }

    static get observedAttributes(): string[] {

        return Object.keys(AAGeolocation.properties);

    }

    root: ShadowRoot;
    _ready: boolean = false;

    constructor() {
        super();

        this.root = this.attachShadow({ mode: 'open' });
    }



    get value(): Promise<{ lat: number; lon: number; timestamp: Date }> {
        return this._getLocation();
    }

    set value(val: any) {
        this.setAttribute("value", val);
    }

    async _getValue(): Promise<{ lat: number; lon: number; timestamp: Date }> {
        let location = await this._getLocation();


        return location;
    }


    _getLocation(): Promise<{ lat: number; lon: number; timestamp: Date }> {

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
    connectedCallback(): void {


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
            this._getLocation().then(val => {
                var valueSubmitEvent = new CustomEvent('valueSubmit', { bubbles: true, detail: { value: val } });
                this.dispatchEvent(valueSubmitEvent);
                this._dispatchEndEvent({ value: val, autoDispatch: true })
            });
        }
    }


}

AABaseElement.registerAAElement('aa-geolocation', AAGeolocation);

