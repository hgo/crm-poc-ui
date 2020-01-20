import { Characteristic } from './characteristic';
import { Offer } from './offer';
export class Order {
	id: string;
	customerId: string;
	createdAt: string;
	status: string;
	orderId: string;
	offers: Offer[];
	constructor(id: string, customerId: string, createdAt: string, status: string, orderId: string, offers: Offer[]) {
		this.id = id;
		this.customerId = customerId;
		this.createdAt = createdAt;
		this.status = status;
		this.orderId = orderId;
		this.offers = offers;
	}
}	