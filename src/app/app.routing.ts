import { Routes, RouterModule } from '@angular/router';

import { AuthenticationComponent } from './authentication/authentication.component';
// import { RegisterComponent } from './register/index';


import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { NewAgreementComponent } from './agreement/new-agreement/new-agreement.component'
import { AgreementListComponent } from './agreement/agreement-list/agreement-list.component';


import { AuthGuard } from './_guards/index';

const appRoutes: Routes = [
    { path: '', component: DashboardComponent, 
    	children: [
	    	{ path: '', redirectTo: 'home', pathMatch: 'full' },
	      	{ path: 'home', component: HomeComponent },
	      	{ path: 'new', component: NewAgreementComponent},
            { path: 'agreement_list', component: AgreementListComponent}
	    ]
	},
    { path: 'login', component: AuthenticationComponent },
    // { path: 'register', component: RegisterComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);