import { Component, OnInit } from '@angular/core';
import { Customer } from './../../common/Customer';

import {SharedDataService} from './../../services/shared-data.service';
@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {

  customerAdd : Customer = new Customer(0, "","");
  //lastCreatedCompany : number ;
  customer : Customer[]

  constructor(private _dataService : SharedDataService) { 
    this.customer = _dataService.customers;
  }

  addCustomer(createForm) 
  {
    console.log("Form Value is: " , createForm.value)
    //this.company.push(this.companyAdd);
    //this.companyAdd = new Company(0,"","","");
    this._dataService.addCustomerService(this.customerAdd);
    //this.lastCreatedCompany = this.companyAdd.id;
    createForm.resetForm();
        
  }

  ngOnInit() {
  }

}
