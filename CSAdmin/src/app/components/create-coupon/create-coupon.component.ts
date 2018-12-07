import { Component, OnInit } from '@angular/core';

import { Coupon } from './../../Common/Coupon';

import {SharedDataService} from './../../services/shared-data.service';
@Component({
  selector: 'app-create-coupon',
  templateUrl: './create-coupon.component.html',
  styleUrls: ['./create-coupon.component.css']
})
export class CreateCouponComponent implements OnInit {
  couponAdd : Coupon = new Coupon(0, "", 0);
  coupons : Coupon[]

  constructor(private _dataService : SharedDataService) { 

    // now the coupons is in the service
    // this.coupons = _dataService.coupons;
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



