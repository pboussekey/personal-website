import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routing } from './app.routing';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './shared/footer/footer.component';
import { BuildingComponent } from './shared/building/building.component';
import { BuildingGeneratorComponent } from './shared/building/building-generator.component';
import { CvComponent } from './cv/cv.component';
import { HeaderComponent } from './shared/header/header.component';
import { FitScreenDirective } from './shared/fit-screen/fit-screen.directive';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    BuildingComponent,
    BuildingGeneratorComponent,
    CvComponent,
    HeaderComponent,
    FitScreenDirective,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    Routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
