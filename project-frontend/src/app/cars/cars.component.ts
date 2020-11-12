import { Component, OnInit } from '@angular/core';

import { Car } from '../car';
import { CarService } from '../car.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  cars: Car[];
  selectedCar: Car;
  rentedCar: Car;

  constructor(private carService: CarService) { }

  ngOnInit(): void {
    this.getCars();
  }

  getCars(): void {
    this.carService.getCarsList().subscribe(cars => this.cars = cars);
  }

  onSelect(car: Car): void {
    console.warn(car);
    this.selectedCar = car;
  }

  
}
