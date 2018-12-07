import { GetCompanyComponent } from './components/get-company/get-company.component';
import { GetCustomerComponent } from './components/get-customer/get-customer.component';
import { GetAllCompaniesComponent } from './components/get-all-companies/get-all-companies.component';
import { GetAllCustomersComponent } from './components/get-all-customers/get-all-customers.component';
import { CreateCompanyComponent } from './components/create-company/create-company.component';
import { CreateCustomerComponent } from './components/create-customer/create-customer.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AdminComponent } from './components/admin/admin.component';
import { CompanyComponent } from './components/company/company.component';
import { CustomerComponent } from './components/customer/customer.component';
import { TableComponent } from './components/coupon-table/coupon-table.component';
import { SharedDataService } from './services/shared-data.service';
import { CreateCouponComponent } from './components/create-coupon/create-coupon.component';
import {HttpModule} from '@angular/http';
import { CompanyHeaderComponent } from './components/company-header/company-header.component';
import { CustomerHeaderComponent } from './components/customer-header/customer-header.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    CompanyComponent,
    CustomerComponent,
    GetCompanyComponent,
    GetCustomerComponent,
    GetAllCompaniesComponent,
    GetAllCustomersComponent,
    CreateCompanyComponent,
    CreateCustomerComponent,
    TableComponent,
    CreateCouponComponent,
    CompanyHeaderComponent,
    CustomerHeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(
      [
        {
          path: "createcompany",
          component: CreateCompanyComponent,
        },
        {
          path: "getallcompanies",
          component: GetAllCompaniesComponent,
        },
        {
          path: "getcompany",
          component: GetCompanyComponent,
        },
        {
          path: "company",
          component: CompanyComponent,
        },
        {
          path: "customer",
          component: CustomerComponent,
        },

      ]
    )
  ],
  providers: [SharedDataService,HttpModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
