import { Component, OnInit } from '@angular/core';

import {SharedDataService} from './../../services/shared-data.service';

import { Coupon } from './../../Common/Coupon';
import { Company } from './../../Common/Company';
import { Customer } from './../../Common/Customer';

@Component({
  selector: 'app-company-header',
  templateUrl: './company-header.component.html',
  styleUrls: ['./company-header.component.css']
})
export class CompanyHeaderComponent implements OnInit {

  coupons : Coupon[]
  company : Company[]
  customers : Customer[]

  constructor(_dataService : SharedDataService) 
  { 
    // this.coupons = _dataService.coupons;
    // this.customers = _dataService.customers;
     this.company = _dataService.companies;

  }

  ngOnInit() {
  }

}
