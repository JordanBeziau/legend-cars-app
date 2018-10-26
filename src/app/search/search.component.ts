import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Output()
  searchSubmission: EventEmitter<object> = new EventEmitter();
  searchValue: string;

  constructor() {
    this.searchValue = '';
  }

  ngOnInit() {}

  handleSubmit = (event, search, scope) => {
    event.preventDefault();
    console.log(search, scope.options[scope.selectedIndex].value);
    this.searchSubmission.emit({
      search: search.value,
      scope: scope.options[scope.selectedIndex].value
    });
  };
}
