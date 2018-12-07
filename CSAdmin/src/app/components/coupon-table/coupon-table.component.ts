import { Component, OnInit } from '@angular/core';

import { Coupon } from './../../Common/Coupon';

import {SharedDataService} from './../../services/shared-data.service';

@Component({
  selector: 'app-table',
  templateUrl: './coupon-table.component.html',
  styleUrls: ['./coupon-table.component.css']
})
export class TableComponent implements OnInit {

  couponAdd : Coupon = new Coupon(0, "", 0);
  coupons : Coupon[]

  constructor(private _dataService : SharedDataService) { 

    // now the coupons is in the service
    this.coupons = _dataService.coupons;
  }

  deleteCoupon(i : number)
  {
    this.coupons.splice(i, 1);
  }

  addCoupon() 
  {
    this.coupons.push(this.couponAdd);
    this.couponAdd = new Coupon(0,"",0);
  }
  ngOnInit() {
  }

}
