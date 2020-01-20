import { Characteristic } from './characteristic';
export class Offer {
	id: string;
	name: string;
	properties: Characteristic[];
	selected: boolean;
	constructor(id: string, name: string, characteristics: Characteristic[], selected: boolean) {
		this.id = id;
		this.name = name;
		this.properties = characteristics;
		this.selected = selected;
	}
}