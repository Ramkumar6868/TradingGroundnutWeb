import { Component, OnInit } from '@angular/core';
import {Angular2TokenService} from "angular2-token";
import {environment} from "../../environments/environment";
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
	private _producturl='http://localhost:3000/buyings/test_f.json';
   	constructor(private _http: Http){
   		
   	}
   	
   	ngOnInit(){}
   	getproducts(){
      	this._http.get(this._producturl)
      	.subscribe(data => {
      		console.log(JSON.stringify(data))
      	})
   	}
}
