import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CrmService } from 'app/service/crm.service';
import { Customer } from 'app/model/customer';
import { GlobalService } from 'app/global/global';
import { Offer } from 'app/model/offer';
import { OrderRequest } from 'app/model/orderRequest';
@Component({
    selector: 'app-sales',
    templateUrl: './sales.component.html',
    styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {
    isLinear = false;
    customerSearch: FormGroup;
    productCatalog: FormGroup;
    customer: Customer;
    offers: Offer[];
    selectedOffers: Offer[];
    validOrder = true;
    constructor(private _formBuilder: FormBuilder, private service: CrmService, private global: GlobalService) { }

    ngOnInit() {
        this.customerSearch = this._formBuilder.group({
            tckn: ['', Validators.required]
        });
        this.productCatalog = this._formBuilder.group({

        });
    }
    searchCustomer() {
        this.global.showLoading();
        const tckn = this.customerSearch.controls['tckn'].value;
        this.service.findCustomer(tckn).subscribe(res => {
            this.global.hideLoading();
            if (res.result != null) {
                this.customer = res.result.customer;
            } else {
                this.global.openSnackBar('Müşteri bulunamadı !', 'Tamam');
            }
        }
        );
    }
    getOffers() {
        this.global.showLoading();
        this.service.getOffers().subscribe(res => {
            this.global.hideLoading();
            if (res.result != null) {
                this.offers = res.result.offers;
                console.log(this.offers, 'offers');
            } else {
                this.global.openSnackBar('Katalog bulunamadı !', 'Tamam');
            }
        }
        );
    }
    stepChange(ev) {
        console.log(ev);
        // previouslySelectedIndex
        if (ev.selectedIndex === 1) {
            // offers
            if (this.offers == null) {
                this.getOffers();
            }
        }
    }
    selectOffer(offer: Offer) {
        offer.selected = !offer.selected;
    }
    send() {
        // create order request
        const selectedOffers = this.offers.filter(o => o.selected);
        selectedOffers.forEach(x => { x.properties = x.offerProperties; x.offerName = x.name; x.offerId = x.id });
        if (this.customer != null && selectedOffers.length > 0) {
            this.global.showLoading();
            const orderRequest: OrderRequest = {
                customerId: this.customer.id,
                orderLines: this.offers.filter(o => o.selected)
            };
            console.log(orderRequest, 'orderRequest');
            this.service.sendOrder(orderRequest).subscribe(result => {
                console.log(result, 'send order result');
                this.global.hideLoading();
                if (result != null) {
                    this.global.openSnackBar(`${result['id']} nolu sipariş oluşturulmuştur.`, 'Tamam');
                    this.validOrder = false;
                }
            });
        } else {
            this.global.openSnackBar('Sipariş için müşteri ve ürün seçilmelidir !', 'Hata');
        }
    }
}
