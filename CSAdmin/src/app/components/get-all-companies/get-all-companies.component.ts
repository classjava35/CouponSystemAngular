import { Component, OnInit } from '@angular/core';
import { Company } from './../../common/Company';
import { Customer } from './../../common/Customer';
import {SharedDataService} from './../../services/shared-data.service';

@Component({
  selector: 'app-get-all-companies',
  templateUrl: './get-all-companies.component.html',
  styleUrls: ['./get-all-companies.component.css']
})
export class GetAllCompaniesComponent {
  companyAdd : Company = new Company(0, "", "","");
  comp : Company = new Company(0, "", "","");

  company : Company[] = [];
  customer : Customer[] = [];

  
  constructor(private _dataService : SharedDataService) { 
    this.company = _dataService.companies;
    this.getAllCompanies();
    this.customer = _dataService.customers;
    this.getAllCustomers();
    // now the company is in the service
     
  }

  deleteCompany(id : number)
  {
    console.log(id);
    this._dataService.removeCompanyService(id);
    this.getAllCompanies();
    //this.company.splice(i, 1);
  }

  updateCompany(id:number,compName:string,password:string,email:string)
  {
    console.log(id,compName,password,email);
    // let companyUpd = this._dataService.getCompanyByIdService(id)
    this.comp.id= id;
    this.comp.compName=compName;
    this.comp.password=password;
    this.comp.email=email;
    console.log("Company Instance from function: " + this.comp);
    this._dataService.updateCompanyService(id,this.comp);

  }

  public getAllCustomers(){
    this._dataService.getAllCustomersService();   
  }

  public getAllCompanies(){
    console.log('in');
    this._dataService.getAllCompaniesService();   
     console.log(this.company);
  }
  

  // this._dataService.getAllCompaniesService().subscribe(
  //   (resp)=>{
  //     this.company=resp.json();
  //   });
  
}
