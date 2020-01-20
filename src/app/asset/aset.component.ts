import { Component, OnInit } from '@angular/core';
import { CrmService } from 'app/service/crm.service';
import { GlobalService } from 'app/global/global';
import { Customer } from 'app/model/customer';
import { Order } from 'app/model/order';

@Component({
  selector: 'app-asset',
  templateUrl: './asset.component.html',
  styleUrls: ['./asset.component.scss']
})
export class AssetComponent implements OnInit {

  constructor(private service: CrmService, private global: GlobalService) { }
  tckn: number;
  customer: Customer;
  assets: Order[];
  ngOnInit() {
  }
  searchCustomer() {
    this.global.showLoading();
    const tckn = this.tckn;
    this.service.findCustomer(tckn).subscribe(res => {
      this.global.hideLoading();
      if (res.result != null) {
        this.customer = res.result.customer;
        this.getAssets();
      } else {
        this.global.openSnackBar('Müşteri bulunamadı !', 'Tamam');
      }
    }
    );
  }
  getAssets() {
    this.global.showLoading();
    this.service.getAssets(this.customer.id).subscribe(result => {
      this.global.hideLoading();
      console.log(result, 'assets');
      if (result != null) {
        this.assets = result;
      }
    });
  }

}
