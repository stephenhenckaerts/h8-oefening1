import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchForm: FormGroup;
  ratings = ['All', '1', '2', '3'];
  @Output() onName: EventEmitter<string> = new EventEmitter();
  @Output() onRating: EventEmitter<string> = new EventEmitter();
  selectedRating: string;
  filteredName: string;

  constructor() { }

  ngOnInit() {
    this.searchForm = new FormGroup({
      'filterName': new FormControl([]),
      'rating': new FormControl([])
    });

    this.selectedRating = this.ratings[0];
  }

  onKey(event: any) {
    this.onName.emit(this.filteredName);
  }

  public onChange(event): void { 
    this.onRating.emit(this.selectedRating);
  }
}
