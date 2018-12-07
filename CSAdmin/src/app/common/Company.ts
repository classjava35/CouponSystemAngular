import { Coupon } from "./Coupon";

export class Company {

    //id : number;
    constructor(public id : number, 
        public compName : string, public password : string, public email : string, coupon?:Coupon[])
        {
            //this.id = id;
        }
}