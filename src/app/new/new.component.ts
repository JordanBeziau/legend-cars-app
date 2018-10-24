import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  check: boolean;
  displayError: boolean;
  displaySuccess: boolean;

  constructor(private apiService: ApiService) {
    this.check = false;
    this.displayError = false;
    this.displaySuccess = false;
  }

  ngOnInit() {}

  handleSubmit = (event, brand, model, description, price, color) => {
    event.preventDefault();
    const entries = [brand, model, description, price, color];
    const datas = {};

    const isFormValid = entries.filter(element => element.value !== '');

    if (isFormValid.length === entries.length) {
      this.displayError = false;

      entries.forEach(item => {
        datas[item.name] = item.value;
      });

      this.apiService.createCar(datas).subscribe(
        data => {
          this.displaySuccess = true;
          setTimeout(() => {
            this.displaySuccess = false;
          }, 3000);
          entries.forEach(element => {
            element.value = '';
          });
        },
        err => {
          console.warn(err);
        }
      );
    } else {
      this.displayError = true;
    }
  };
}
