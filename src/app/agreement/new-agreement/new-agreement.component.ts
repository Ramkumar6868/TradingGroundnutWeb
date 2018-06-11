import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { environment } from "../../../environments/environment";
import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { SelectModule } from 'ng2-select';


@Component({
  selector: 'app-new-agreement',
  templateUrl: './new-agreement.component.html',
  styleUrls: ['./new-agreement.component.css']
})
export class NewAgreementComponent implements OnInit {
	public agreementForm = this.fb.group({
	    agreement_detail: this.fb.group({
	    	farmer_id: ["", Validators.required],
	    	commitment_date: ["", Validators.required],
	    	type: ["", Validators.required],
	    	peonut_percentage: [""],
	    	moisture: [""],
	    	rate: ["", Validators.required],
	    	initial_amount: [""],
	    	other_info: [""]
	    })
	 });

    public farmerForm = this.fb.group({
    	first_name: ["", Validators.compose([Validators.required, Validators.minLength(3)])],
    	last_name: [""],
    	father_name: [""],
    	mobile_number: [""],
    	village: ["", Validators.required],
    	city: ["", Validators.required],
    	other_information: [""]
    });

    public farmerList:Array<any> = [];
    private tmp:Array<any> = [];
    private name:string = "";
  	constructor(public fb: FormBuilder, private _http: Http) { }

  	ngOnInit() {
  		this.getAllFarmers();
  	}

  	agreementFormRefresh(): void{
  		this.agreementForm = this.fb.group({
		    agreement_detail: this.fb.group({
		    	farmer_id: ["", Validators.required],
		    	commitment_date: ["", Validators.required],
		    	type: ["", Validators.required],
		    	peonut_percentage: [""],
		    	moisture: [""],
		    	rate: ["", Validators.required],
		    	initial_amount: [""],
		    	other_info: [""]
		    })
		 });
  	}

  	getAllFarmers(){
  		this._http.get("http://localhost:3000/farmers.json").subscribe(
  			res => {
  				this.tmp = res.json().data;
  				this.farmerList = [];
  				for(let farmer of this.tmp){
  					this.name = farmer.first_name;
  					if(farmer.last_name && farmer.last_name.length > 0)
  						this.name += " " + farmer.last_name;
  					if(farmer.father_name && farmer.father_name.length> 0)
  						this.name = this.name + " s/o " + farmer.father_name;
  					if(farmer.city && farmer.city.length > 0 && farmer.village && farmer.village.length > 0)
  						this.name = this.name + " (" + farmer.village + ", " + farmer.city + ")";
  					this.farmerList.push({
  						id: farmer.id,
  						text: this.name
  					})
  				}
  			}
  		)
  	}

  	createAgreement(event){
  		// this._http.post("http://localhost:3000/buyings/new_agreement.json", this.agreementForm.value).subscribe(
  		// 	res => {
  		// 		// this.agreementFormRefresh();
  		// 		// this.router.navigate(['/agreement_list']);
  		// 	}
      console.log(this.agreementForm.value);
  	}

  	selectFarmer(value: any){
  		this.agreementForm.value.agreement_detail.farmer_id = value.id;
  		console.log(this.agreementForm.value.agreement_detail);
  	}

  	entryFarmer(){
  		console.log("dssssssssssssssssssssssss", this.farmerForm.value);
  		if(this.farmerForm.valid){
	  		this._http.post("http://localhost:3000/farmers.json", this.farmerForm.value).subscribe(
	  			res => {
	  				this.getAllFarmers();
	  			}
	  		)	
	  	}
  	}
}
