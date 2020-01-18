import { Injectable } from '@angular/core';
import { NgxSoapService, Client, ISoapMethodResponse } from 'ngx-soap';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CrmService {
  private customerClient: Client;
  private catalogClient: Client;

  constructor(private soap: NgxSoapService, private http: HttpClient) {
    this.soap.createClient('assets/customer.wsdl').then(client => {
      this.customerClient = client;
      console.log(client, 'customerClient');
    });
    this.soap.createClient('assets/catalog.wsdl').then(client => {
      this.catalogClient = client;
      console.log(client, 'catalogClient');
    });
  }
  getCustomer() {
    return this.customerClient.call('listCustomers', {});
  }
  findCustomer(tckn: number) {
    return this.customerClient.call('findCustomer', { tckn: tckn });
  }
  getOffers() {
    return this.catalogClient.call('listOffers', {});
  }
}
