import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { Car } from './car';

export const CARS: Car[] = [
  { id: 0, plateNumber: "11AA22", model: 'Ferrari', price: 1500, numberOfDays: 0, rented: false },
  { id: 1, plateNumber: "22BB33", model: 'Porsche', price: 1200, numberOfDays: 0, rented: false },
  { id: 2, plateNumber: "44CC55", model: 'Mac Laren', price: 1000, numberOfDays: 0, rented: false }
];

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private http: HttpClient) {}

  private baseUrl = 'http://localhost:8080/cars';

  getCar(plateNumber: string): Observable<Object>{
    return this.http.get(`${this.baseUrl}/${plateNumber}`);
  }

  getCarsList(): Observable<any>{
    return this.http.get(`${this.baseUrl}`);
  }

  createCar(cars: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}` + `/create`, cars);
  }

  deleteCar(plateNumber: string): Observable<any>{
    return this.http.delete(`${this.baseUrl}/${plateNumber}`, { responseType: 'text' });
  }
  




  


}
