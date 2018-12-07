import { Component, OnInit } from '@angular/core';
import { SharedDataService } from './../../services/shared-data.service';
import { Router} from '@angular/router';
import { LOCALE_DATA } from '@angular/common/src/i18n/locale_data';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
 
  request : Request;
  response : Response;

  constructor(private _dataService: SharedDataService,private router: Router) {

  }

  logout() {
    window.location.href = 'http://localhost:8080/';

    this._dataService.logout(this.request,this.response);
    }

  ngOnInit() {
    this.router.navigate(['/company/']);
  }

}
