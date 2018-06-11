import { Component, OnInit } from '@angular/core';
import { Http , Response } from '@angular/http';

@Component({
  selector: 'app-agreement-list',
  templateUrl: './agreement-list.component.html',
  styleUrls: ['./agreement-list.component.css']
})
export class AgreementListComponent implements OnInit {
  agreementLists: any[];
  constructor(private _http: Http) { }

  ngOnInit() {
  	this.getAllAgreements();
  }

  getAllAgreements(){
  		this._http.get("http://localhost:3000/buyings/agreement_list.json").subscribe(
  			res => {
  				this.agreementLists = res.json().agreementList;
  				console.log(res.json().agreementList);
  					
  			}
  		)
  	}

}
