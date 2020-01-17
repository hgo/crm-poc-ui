import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
    selector: 'app-sales',
    templateUrl: './sales.component.html',
    styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {
    isLinear = true;
    customerSearch: FormGroup;
    productCatalog: FormGroup;

    constructor(private _formBuilder: FormBuilder) { }

    ngOnInit() {
        this.customerSearch = this._formBuilder.group({
            tckn: ['', Validators.required]
        });
        this.productCatalog = this._formBuilder.group({

        });
    }
    searchCustomer() {
        alert(this.customerSearch.controls['tckn'].value);
    }

}
