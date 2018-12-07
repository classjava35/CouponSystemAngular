import { Component, OnInit } from '@angular/core';
import { Company } from './../../common/Company';

import {SharedDataService} from './../../services/shared-data.service';
@Component({
  selector: 'app-get-company',
  templateUrl: './get-company.component.html',
  styleUrls: ['./get-company.component.css']
})
export class GetCompanyComponent implements OnInit {
  
  company : Company[] = [];

  constructor(private _dataService : SharedDataService) { 
    this.company = _dataService.companies;
    this.getAllCompanies();
    // now the company is in the service
     
  }


  public getAllCompanies(){
    console.log('in');
    this._dataService.getAllCompaniesService();   
     console.log(this.company);
  }
  
  public getCompanyById(id:number){
    console.log(id);
    this._dataService.getCompanyByIdService(id);   
     console.log(this.company);
  }


  ngOnInit() {
  }

}
