import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getCarsList = () => {
    return this.http.get('http://127.0.0.1:3000/cars/list');
  };

  removeCar = id => {
    return this.http.delete('http://127.0.0.1:3000/cars/remove/' + id);
  };

  createCar = data => {
    return this.http.post('http://127.0.0.1:3000/cars/create', data);
  };
}
