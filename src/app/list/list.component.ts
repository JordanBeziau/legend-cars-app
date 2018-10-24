import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input()
  data: object;

  @Output()
  removeCar: EventEmitter<number> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  handleRemove = () => {
    console.log('rm', this.data['id']);
    this.removeCar.emit(this.data['id']);
  };
}
