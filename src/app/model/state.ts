import { Customer } from "./customer";
import { Offer } from "./offer";

export class State {
    tckn: number;
    currentSate: number = 0;
    customer: Customer;
    offers: Offer[];
    constructor(...prop: any) {
        for (let i = 0; i < prop.length; i++) {
            this[i] = prop[i];
        }
    }
}
