import { Injectable } from '@angular/core';
import { NgxSoapService, Client, ISoapMethodResponse } from 'ngx-soap';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CrmService {
  private client: Client;

  constructor(private soap: NgxSoapService, private http: HttpClient) {
    this.soap.createClient('assets/customer.wsdl').then(client => {
      this.client = client;
      console.log(client);

    });
  }
  getCustomer() {
    return this.client.call('listCustomers', {});
  }
}
