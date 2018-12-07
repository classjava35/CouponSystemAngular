import { Component, OnInit } from '@angular/core';

import { Customer } from './../../common/Customer';
import { Company } from './../../common/Company';
import {SharedDataService} from './../../services/shared-data.service';

@Component({
  selector: 'app-get-all-customers',
  templateUrl: './get-all-customers.component.html',
  styleUrls: ['./get-all-customers.component.css']
})
export class GetAllCustomersComponent implements OnInit {
  customerAdd : Customer = new Customer(0, "","");
  cust : Customer = new Customer(0, "","");

  customer : Customer[] = [];
  company : Company[] = [];
  constructor(private _dataService : SharedDataService) { 
    this.customer = _dataService.customers;
    this.getAllCustomers();
    this.company = _dataService.companies;
    this.getAllCompanies();
  }

  deleteCustomer(id : number)
  {
    console.log(id);
    this._dataService.removeCustomerService(id);
    this.getAllCustomers();
    //this.company.splice(i, 1);
  }

  updateCustomer(id:number,custName:string,password:string)
  {
    console.log(id,custName,password);
    // let companyUpd = this._dataService.getCompanyByIdService(id)
    this.cust.id= id;
    this.cust.custName=custName;
    this.cust.password=password;
    console.log("Customer Instance from function: " + this.cust);
    this._dataService.updateCustomerService(id,this.cust);

  }

  
  public getAllCustomers(){
    this._dataService.getAllCustomersService();   
  }
  
    public getAllCompanies(){
    console.log('in');
    this._dataService.getAllCompaniesService();   
     console.log(this.company);
  }

  ngOnInit() {
    
  }

}
