import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CarsComponent } from './cars/cars.component';
import { CreateCarsComponent } from './create-cars/create-cars.component';
import { CarsDetailsComponent } from './cars-details/cars-details.component';
import { CarsListComponent } from './cars-list/cars-list.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    CreateCarsComponent,
    CarsDetailsComponent,
    CarsListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
