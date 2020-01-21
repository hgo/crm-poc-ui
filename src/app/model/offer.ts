import { Characteristic } from './characteristic';
export class Offer {
	id: string;
	offerId: string;
	offerName: string;
	name: string;
	properties: Characteristic[];
	offerProperties: Characteristic[];
	selected: boolean;
	constructor(id: string, name: string, properties: Characteristic[], offerProperties: Characteristic[], selected: boolean) {
		this.id = id;
		this.name = name;
		this.properties = properties;
		this.offerProperties = offerProperties;
		this.selected = selected;
	}
}