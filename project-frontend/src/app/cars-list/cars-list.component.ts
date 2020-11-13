import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CarService } from '../car.service';
import { Car } from '../car';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css']
})
export class CarsListComponent implements OnInit {

  cars: Observable<Car[]>;
  selectedCar: Car;
  submitted = false;
  constructor(private carService : CarService) { }

  ngOnInit(): void {
    this.reloadData();
  }

  getCars(): void {
    this.carService.getCarsList();
  }

  onSelect(car: Car): void {
    console.warn(car);
    this.selectedCar = car;
  }
  deleteCars() {
    this.carService.deleteAll()
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log('ERROR: ' + error));
  }

  reloadData() {
    this.cars = this.carService.getCarsList();
  }
  onSubmit() {
    this.submitted = true;
    this.deleteCars();
  }

}
