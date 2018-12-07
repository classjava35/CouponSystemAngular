import { Component, OnInit } from '@angular/core';
import { Customer } from '../../common/Customer';
import {SharedDataService} from './../../services/shared-data.service';

@Component({
  selector: 'app-get-customer',
  templateUrl: './get-customer.component.html',
  styleUrls: ['./get-customer.component.css']
})
export class GetCustomerComponent implements OnInit {

  customer : Customer[] = [];

  constructor(private _dataService : SharedDataService) { 
    this.customer = _dataService.customers;
    this.getAllCustomers();
    // now the company is in the service
     
  }


  public getAllCustomers(){
    console.log('in');
    this._dataService.getAllCustomersService();   
     console.log(this.customer);
  }
  
  public getCustomerById(id:number){
    console.log(id);
    this._dataService.getCustomerByIdService(id);   
     console.log(this.customer);
  }


  ngOnInit() {
  }

}
