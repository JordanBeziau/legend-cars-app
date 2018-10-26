import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  cars: any;
  carsFiltered: any;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getCarsList().subscribe(
      data => {
        console.log(data);
        this.cars = data;
        this.carsFiltered = this.cars;
      },
      err => {
        console.warn(err);
      }
    );
  }

  handleRemove = (id: number, event) => {
    this.apiService.removeCar(id).subscribe(
      data => {
        this.cars = this.cars.filter(item => item.id !== id);
      },
      err => {
        console.warn(err);
      }
    );
  };

  handleSearch = (search: object) => {
    this.carsFiltered = this.cars.filter(item => {
      const reg = new RegExp(search['search'], 'i');
      return item[search['scope']].search(reg) !== -1;
    });
  };
}
