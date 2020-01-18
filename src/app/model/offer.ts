import { Characteristic } from './characteristic';
export class Offer {
	id: string;
	name: string;
	offerProperties: Characteristic[];
	constructor(id: string, name: string, characteristics: Characteristic[]) {
		this.id = id;
		this.name = name;
		this.offerProperties = characteristics;
	}
}