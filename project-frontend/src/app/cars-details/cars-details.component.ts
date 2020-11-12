import { Component, OnInit, Input } from '@angular/core';
import { CarService } from '../car.service';
import { Car } from '../car';
import { CarsListComponent } from '../cars-list/cars-list.component';
@Component({
  selector: 'app-cars-details',
  templateUrl: './cars-details.component.html',
  styleUrls: ['./cars-details.component.css']
})
export class CarsDetailsComponent implements OnInit {

  @Input() cars: Car;

  constructor(private CarService: CarService, private listComponent: CarsListComponent) { }

  ngOnInit(): void {
  }

  deleteCar(){
    this.CarService.deleteCar(this.cars.plateNumber).subscribe(
      data => {
        console.log(data);
        this.cars = data as Car;
      },
      error => console.log(error));
    }
}

