import { Component, OnInit } from '@angular/core';
import { Car } from '../car';
import { CarsDetailsComponent } from '../cars-details/cars-details.component';
import { CarService } from '../car.service';

@Component({
  selector: 'app-create-cars',
  templateUrl: './create-cars.component.html',
  styleUrls: ['./create-cars.component.css']
})
export class CreateCarsComponent implements OnInit {

  car: Car = new Car();
  submitted = false;
  constructor(private carService: CarService) { }

  ngOnInit(): void {
  }
  newCustomer(): void {
    this.submitted = false;
    this.car = new Car();
  }
  save() {
    this.carService.createCar(this.car)
      .subscribe(data => console.log(data), error => console.log(error));
    this.car = new Car();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }
}
