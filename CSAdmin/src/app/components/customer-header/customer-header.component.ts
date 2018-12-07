import { Component, OnInit } from '@angular/core';

import {SharedDataService} from './../../services/shared-data.service';

import { Coupon } from './../../Common/Coupon';
import { Company } from './../../Common/Company';
import { Customer } from './../../Common/Customer';

@Component({
  selector: 'app-customer-header',
  templateUrl: './customer-header.component.html',
  styleUrls: ['./customer-header.component.css']
})
export class CustomerHeaderComponent implements OnInit {
  coupons : Coupon[]
  customer : Customer[]
  customers : Customer[]

  constructor(_dataService : SharedDataService) 
  { 
    // this.coupons = _dataService.coupons;
    // this.customers = _dataService.customers;
     this.customer = _dataService.customers;

  }

  ngOnInit() {
  }

}
