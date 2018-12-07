import { Injectable } from '@angular/core';
import { Coupon } from './../Common/Coupon';
import { Company } from './../common/Company';
import { Customer } from './../common/Customer';
import { Http } from '@angular/http';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  public coupons: Coupon[] = []
  public companies: Company[] = []
  public customers: Customer[] = []

  constructor(private http: Http) {
  }

  
  public logout(request,response) {
    this.http.post('http://localhost:8080/adminservice/logout', request,response).subscribe(
      (resp) => {

        Swal(
          'You are logged out',
          ' You have been logout of the System.',
          'info' 
        )
      },

      //Error handeling
      (err) => {
        console.error('Error while add Coupon , Check you DB and Service!', err);
        Swal('Oops...', 'Something went wrong!', 'error')
      }
    );
  }




  /**
 * addCompanyService
 */
  public addCompanyService(company: Company) {
    console.log(company)
    this.http.post('http://localhost:8080/adminservice/createcompany', company).subscribe(
      (resp) => {
        Swal(
          'Company Created!',
          ' Company has been created.',
          'success'
        )
        this.getAllCompaniesService();
      },

      //Error handeling
      (err) => {
        if (err.status == 409) {
          console.error('Error while get Coupon By Type, Check you DB and Service!', err);
          Swal(
            {
              title: 'Cannot Create Company!',
              text: 'Cannot create Company with the same name, choose another Company Name.',
              animation: false,
              type:'error'
            }
          )
        }
        else {
        console.error('Error while add Company , Check you DB and Service!', err);
        Swal('Oops...', 'Something went wrong!', 'error')
      }
    }
    );
  }
  

  public getCompanyByIdService(id: any) {
    console.log(id)
    console.log('url = http://localhost:8080//adminservice/getcompany/' + id)
    this.http.get('http://localhost:8080//adminservice/getcompany/' + id).subscribe(
      (resp) => {
        let temp = resp.json();
        this.companies.length = 0;
        this.companies.push(resp.json());
        console.log(resp.json());
        Swal(
          'Filter company was Successful !',
          ' Managed to get company by Id.'+id,
          'success'
        )
      },

      //Error handeling
      (err) => {
        if (err.status == 404) {
          console.error('Error while get company By Id, Check you DB and Service!', err);
          Swal(
            {
              type: 'error',
              title: 'Cannot get company!',
              text: 'Did not find any company by id ' + id,
              animation: true
            }
          )
        }
        else {
          console.error('Error while Filter company, Check you DB and Service!', err);
          Swal('Oops...', 'Something went wrong!', 'error')
        }
      }
    );
  }

  public updateCompanyService(id: any, company: Company) {
    let url = 'http://localhost:8080/adminservice/updatecompany/' + id;
    this.http.put(url, company).subscribe(
      (resp) => {
        Swal(
          'Updated!',
          ' Company has been updated.',
          'success'
        )
        this.getAllCompaniesService();
      },
      //Error handeling
      (err) => {
        console.error('Error while Deleting Coupon Check you DB and Service!', err);
        Swal('Oops...', 'Something went wrong!', 'error')
      }
    )
  }



  public removeCompanyService(id: any) {
    Swal({
      title: 'Are you sure?',
      text: 'You will not be able to recover this Company!',
      type: 'warning',
      showCancelButton: true,
      showLoaderOnConfirm: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      //If the User press Confirm button "Yes Delete it"
      if (result.value) {

        //Send the Delete API to the Service
        this.http.delete('http://localhost:8080/adminservice/removecompany/' + id).subscribe(
          (resp) => {
            Swal(
              'Deleted!',
              'Company has been deleted.',
              'success'
            )
            this.getAllCompaniesService();
          },

          //Error handeling
          (err) => {
            console.error('Error while Deleting Company Check you DB and Service!', err);
            Swal('Oops...', 'Something went wrong!', 'error')
          }
        )

        //If the User press Cancel button "No, keep it"
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal(
          'Cancelled',
          'Your Company is safe :)',
          'error'
        )
      }

    })
  }




  public getAllCompaniesService() {
    this.http.get('http://localhost:8080/adminservice/getallcompanies').subscribe(
      (resp) => {
        let temp = resp.json();
        console.log(this.companies.length);
        this.companies.length = 0;
        console.log(this.companies.length);
        for (let item of temp) {
          this.companies.push(item);
        }
        console.log(resp.json());
      },
      //Error handeling
      (err) => {
        console.error('Error while Deleting Company Check you DB and Service!', err);
        Swal('Oops...', 'Something went wrong!', 'error')
      });
  }


  /**
* addCustomerService
*/
  public addCustomerService(customer: Customer) {
    this.http.post('http://localhost:8080/adminservice/createcustomer', customer).subscribe(
      (resp) => {
        Swal(
          'Customer Created!',
          ' Customer has been created.',
          'success'
        )
        this.getAllCustomersService();
      },

      //Error handeling
      (err) => {
        if (err.status == 409) {
          console.error('Error while get Coupon By Type, Check you DB and Service!', err);
          Swal(
            {
              title: 'Cannot Create Customer!',
              text: 'Cannot create Customer with the same name, choose another Customer Name.',
              animation: false,
              type:'error'
            }
          )
        }
        else {
        console.error('Error while add Customer , Check you DB and Service!', err);
        Swal('Oops...', 'Something went wrong!', 'error')
      }
    }
    );
  }

  public getCustomerByIdService(id: any) {
    this.http.get('http://localhost:8080//adminservice/getcustomer/' + id).subscribe(
      (resp) => {
        let temp = resp.json();
        this.customers.length = 0;
        this.customers.push(resp.json());
        Swal(
          'Filter customer was Successful !',
          ' Managed to get customer by Id.'+id,
          'success'
        )
      },

      //Error handeling
      (err) => {
        if (err.status == 404) {
          console.error('Error while get customer By Id, Check you DB and Service!', err);
          Swal(
            {
              type: 'error',
              title: 'Cannot get customer!',
              text: 'Did not find any customer by id ' + id,
              animation: true
            }
          )
        }
        else {
          console.error('Error while Filter customer, Check you DB and Service!', err);
          Swal('Oops...', 'Something went wrong!', 'error')
        }
      }
    );
  }


  public updateCustomerService(id: any, customer: Customer) {
    let url = 'http://localhost:8080/adminservice/updatecustomer/' + id;
    this.http.put(url, customer).subscribe(
      (resp) => {
        Swal(
          'Updated!',
          ' Customer has been updated.',
          'success'
        )
        this.getAllCustomersService();
      },
      //Error handeling
      (err) => {
        console.error('Error while Deleting Customer Check you DB and Service!', err);
        Swal('Oops...', 'Something went wrong!', 'error')
      }
    )
  }


  public removeCustomerService(id: any) {
    Swal({
      title: 'Are you sure?',
      text: 'You will not be able to recover this Customer!',
      type: 'warning',
      showCancelButton: true,
      showLoaderOnConfirm: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      //If the User press Confirm button "Yes Delete it"
      if (result.value) {

        //Send the Delete API to the Service
        this.http.delete('http://localhost:8080/adminservice/removecustomer/' + id).subscribe(
          (resp) => {
            Swal(
              'Deleted!',
              ' Customer has been deleted.',
              'success'
            )
            //Reload all Coupons after delete Customer action
            this.getAllCustomersService();
          },

          //Error handeling
          (err) => {
            console.error('Error while Deleting Customer Check you DB and Service!', err);
            Swal('Oops...', 'Something went wrong!', 'error')
          }

        )

        //If the User press Cancel button "No, keep it"
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal(
          'Cancelled',
          'Your Customer is safe :)',
          'error'
        )
      }

    })
  }


  public getAllCustomersService() {
    this.http.get('http://localhost:8080/adminservice/getallcustomers').subscribe(
      (resp) => {
        let temp = resp.json();
        this.customers.length = 0;
        for (let item of temp) {
          this.customers.push(item);
        }
      },
      //Error handeling
      (err) => {
        console.error('Error while Deleting Customer Check you DB and Service!', err);
        Swal('Oops...', 'Something went wrong!', 'error')
      });
  }

}
