import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CrmService } from 'app/service/crm.service';
import { Customer } from 'app/model/customer';
import { GlobalService } from 'app/global/global';
import { Offer } from 'app/model/offer';
import { OrderRequest } from 'app/model/orderRequest';
import { LocalStorageService } from 'app/service/storage.service';
import { State } from 'app/model/state';
import { MatStepper } from '@angular/material/stepper';
@Component({
    selector: 'app-sales',
    templateUrl: './sales.component.html',
    styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit, AfterViewInit {
    isLinear = true;
    customerSearch: FormGroup;
    productCatalog: FormGroup;
    offers: Offer[];
    selectedOffers: Offer[];
    validOrder = true;
    totalPrice = 0;
    state: State;
    @ViewChild('stepper', { static: false }) stepper: MatStepper;
    constructor(private _formBuilder: FormBuilder, private service: CrmService, private global: GlobalService, private localStorageService: LocalStorageService) { }

    ngOnInit() {
        this.state = this.localStorageService.getStateData();

        this.customerSearch = this._formBuilder.group({
            tckn: [this.state.tckn, Validators.required]
        });
        this.productCatalog = this._formBuilder.group({

        });
    }
    ngAfterViewInit() {
        this.move(this.state.currentSate);
        console.log(this.stepper, 'stepper');
    }
    searchCustomer() {
        this.global.showLoading();
        const tckn = this.customerSearch.controls['tckn'].value;
        this.service.findCustomer(tckn).subscribe(res => {
            this.global.hideLoading();
            if (res.result != null) {
                this.state.customer = res.result.customer;;
                this.state.tckn = tckn;
                this.localStorageService.setStateData(this.state);
            } else {
                this.global.openSnackBar('Müşteri bulunamadı !', 'Tamam');
            }
        },
            err => {
                this.global.hideLoading();
                this.global.openSnackBar('Müşteri bulunamadı !', 'Tamam');
            }
        );
    }
    move(index: number) {
        this.stepper.selectedIndex = index;
    }
    getOffers() {
        this.global.showLoading();
        this.service.getOffers().subscribe(res => {
            this.global.hideLoading();
            if (res.result != null) {
                this.state.offers = res.result.offers;
                this.localStorageService.setStateData(this.state);
                console.log(this.state.offers, 'offers');
            } else {
                this.global.openSnackBar('Katalog bulunamadı !', 'Tamam');
            }
        }
        );
    }
    stepChange(ev) {
        console.log(ev);
        // previouslySelectedIndex
        this.state.currentSate = ev.selectedIndex;
        if (ev.selectedIndex === 1) {
            // offers
            if (this.state.offers == null) {
                this.getOffers();
            }
        }
        if (ev.selectedIndex === 2) {
            this.calculatePrice();
        }
        this.localStorageService.setStateData(this.state);
    }
    selectOffer(offer: Offer) {
        offer.selected = !offer.selected;
        this.localStorageService.setStateData(this.state);
        this.calculatePrice();
    }
    calculatePrice() {
        const selectedOffers = this.state.offers.filter(o => o.selected);
        let price = 0;
        selectedOffers.forEach(x => {
            x.offerProperties.forEach(y => {
                if (y.name == 'Fiyat') {
                    price += parseInt(y.value);
                }
            })
        });
        this.totalPrice = price;
    }
    send() {
        // create order request
        const selectedOffers = this.state.offers.filter(o => o.selected);
        selectedOffers.forEach(x => { x.properties = x.offerProperties; x.offerName = x.name; x.offerId = x.id });
        if (this.state.customer != null && selectedOffers.length > 0) {
            this.global.showLoading();
            const orderRequest: OrderRequest = {
                customerId: this.state.customer.id,
                orderLines: this.state.offers.filter(o => o.selected)
            };
            console.log(orderRequest, 'orderRequest');
            this.service.sendOrder(orderRequest).subscribe(result => {
                console.log(result, 'send order result');
                this.global.hideLoading();
                if (result != null) {
                    this.global.openSnackBar(`${result['id']} nolu sipariş oluşturulmuştur.`, 'Tamam');
                    this.validOrder = false;
                    this.localStorageService.setStateData(new State());
                }
            });
        } else {
            this.global.openSnackBar('Sipariş için müşteri ve ürün seçilmelidir !', 'Hata');
        }
    }
}
