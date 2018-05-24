import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from './home/home.component';
import { CvComponent } from './cv/cv.component';
import { ContactComponent } from './contact/contact.component';

const APP_ROUTES : Routes = [
    { path : '', component : HomeComponent },
    { path : 'cv', component : CvComponent },
    { path : 'contact', component : ContactComponent },
];


export const Routing = RouterModule.forRoot(APP_ROUTES);
/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
