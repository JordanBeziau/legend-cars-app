import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  cars: any;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getCarsList().subscribe(
      data => {
        console.log(data);
        this.cars = data;
      },
      err => {
        console.warn(err);
      }
    );
  }

  handleRemove = (id: number, event) => {
    console.log(id);
    this.apiService.removeCar(id).subscribe(
      data => {
        this.cars = this.cars.filter(item => item.id !== id);
      },
      err => {
        console.warn(err);
      }
    );
  };
}
