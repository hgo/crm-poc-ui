import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CrmService } from 'app/service/crm.service';
@Component({
    selector: 'app-sales',
    templateUrl: './sales.component.html',
    styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {
    isLinear = true;
    customerSearch: FormGroup;
    productCatalog: FormGroup;

    constructor(private _formBuilder: FormBuilder, private service: CrmService) { }

    ngOnInit() {
        this.customerSearch = this._formBuilder.group({
            tckn: ['', Validators.required]
        });
        this.productCatalog = this._formBuilder.group({

        });
    }
    searchCustomer() {
        // alert(this.customerSearch.controls['tckn'].value);
        this.service.getCustomer().subscribe(res => console.log(res));
    }

}
