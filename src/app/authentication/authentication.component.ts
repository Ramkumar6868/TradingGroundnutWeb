import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { Angular2TokenService } from "angular2-token";
import { environment } from "../../environments/environment";


@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {
	public loginForm = this.fb.group({
	    email: ["", Validators.required],
	    password: ["", Validators.required]
	 });

  	constructor(private authToken: Angular2TokenService, public fb: FormBuilder){
  		// this.authToken.init(environment.token_auth_config);
  	}
  	ngOnInit() {
  		this.authToken.init(environment.token_auth_config);
  	}


  	// login to app
  	logIn(event) {
  		if(this.loginForm.valid){
	  		this.authToken.signIn({email: this.loginForm.value.email, password: this.loginForm.value.password}).subscribe(
		        res => {
		          console.log('auth response:', res);
		          console.log('auth response headers: ', res.headers.toJSON()); //log the response header to show the auth token
		          console.log('auth response body:', res.json()); //log the response body to show the user 
		          // this.authToken.signOut();
		        },
		        err => {
		          console.error('auth error:', err);
		        }
	    	)
	  	} else {
	  		console.log("not valid")
	  	}
    	console.log(this.loginForm.value);
  	}

}
