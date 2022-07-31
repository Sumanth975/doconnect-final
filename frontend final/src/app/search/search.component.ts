import { Component, OnInit,EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  enteredSearchValue:string=""
  @Output()
  searchTextChanged:EventEmitter<String> =new EventEmitter<String>();
  onSearchTextChanged(){
    this.searchTextChanged.emit(this.enteredSearchValue);
  }
}
