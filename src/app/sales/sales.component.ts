import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CrmService } from 'app/service/crm.service';
import { Customer } from 'app/model/customer';
import { GlobalService } from 'app/global/global';
import { Offer } from 'app/model/offer';
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
            this.getOffers();
        }
    }

}
