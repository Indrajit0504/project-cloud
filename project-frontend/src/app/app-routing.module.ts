import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCarsComponent } from './create-cars/create-cars.component';
import { CarsListComponent } from './cars-list/cars-list.component';


const routes: Routes = [
    { path: '', redirectTo: 'cars', pathMatch: 'full' },
    { path: 'cars-list', component: CarsListComponent },
    { path: 'add', component: CreateCarsComponent }
   ];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }