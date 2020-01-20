import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'app/global/global';
import { CrmService } from 'app/service/crm.service';
import { Customer } from 'app/model/customer';

@Component({
  selector: 'app-cc',
  templateUrl: './cc.component.html',
  styleUrls: ['./cc.component.scss']
})
export class CcComponent implements OnInit {
  customer: Customer;
  tckn: number;
  constructor(private global: GlobalService, private service: CrmService) { }

  ngOnInit() {
  }
  searchCustomer() {
    this.global.showLoading();
    const tckn = this.tckn;
    this.service.findCustomer(tckn).subscribe(res => {
      this.global.hideLoading();
      if (res.result != null) {
        this.customer = res.result.customer;
        this.getLog();
      } else {
        this.global.openSnackBar('Müşteri bulunamadı !', 'Tamam');
      }
    }
    );
  }
  getLog() {

  }

}
