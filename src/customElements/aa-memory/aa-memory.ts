import { AABaseElement } from '../aa-base-element/aa-base-element'



export class AAMemory extends AABaseElement {

    static get tag(): string {
        return 'aa-memory';
    }

    get observedAttributes(): string[] {
        return ["name"];
    }

    constructor() {
        super();
    }

    connectedCallback(): void {

    }



    setData(name: string, value: any): void {
        // this.dataset[name] = value;
        localStorage.setItem(name, value);
    }

    getData(name: string): string | null {
        return (localStorage as any)[name];
    }

    getDataDump(): Storage {
        return localStorage;
    }
}

AABaseElement.registerAAElement('aa-memory', AAMemory);
