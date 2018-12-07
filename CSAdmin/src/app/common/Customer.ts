import { Coupon } from "./Coupon";
export class Customer {

    //id : number;
    constructor(public id? : number, 
        public custName? : string, public password? : string, coupon?:Coupon[])
        {
            //this.id = id;
        }
}