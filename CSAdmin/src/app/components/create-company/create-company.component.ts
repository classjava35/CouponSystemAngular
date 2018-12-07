import { Component, OnInit } from '@angular/core';
import { Company } from './../../common/Company';

import {SharedDataService} from './../../services/shared-data.service';

@Component({
  selector: 'app-create-company',
  templateUrl: './create-company.component.html',
  styleUrls: ['./create-company.component.css']
})
export class CreateCompanyComponent implements OnInit {

  companyAdd : Company = new Company(0, "", "","");
  //lastCreatedCompany : number ;
  company : Company[]

  constructor(private _dataService : SharedDataService) { 

    // now the coupons is in the service
     this.company = _dataService.companies;
  }



  addCompany(createForm) 
  {
    console.log("Form Value is: " , createForm.value)
    //this.company.push(this.companyAdd);
    //this.companyAdd = new Company(0,"","","");
    this._dataService.addCompanyService(this.companyAdd);
    //this.lastCreatedCompany = this.companyAdd.id;
    createForm.resetForm();
        
  }


  ngOnInit() {
  }

}
