import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';

import { Angular2TokenService } from 'angular2-token';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { RouterModule }      from '@angular/router';
import { SelectModule } from 'ng2-select';

import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { AuthGuard } from './_guards/index';
import { AuthenticationComponent } from './authentication/authentication.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NewAgreementComponent } from './agreement/new-agreement/new-agreement.component';
import { AgreementListComponent } from './agreement/agreement-list/agreement-list.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    NewAgreementComponent,
    AgreementListComponent
  ],
  imports: [ 
  	ReactiveFormsModule,
    BrowserModule, 
    HttpModule, 
    RouterModule, 
    routing,
    SelectModule
  ],
  providers: [AuthGuard, Angular2TokenService],
  bootstrap: [AppComponent]
})
export class AppModule { }
