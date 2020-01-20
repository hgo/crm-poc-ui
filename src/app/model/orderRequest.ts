import { Characteristic } from './characteristic';
import { Offer } from './offer';
export class OrderRequest {
	customerId: string;
	orderLines: Offer[];
	constructor(customerId: string, orderLines: Offer[]) {
		this.customerId = customerId;
		this.orderLines = orderLines;
	}
}