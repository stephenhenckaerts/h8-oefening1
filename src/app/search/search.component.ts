import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchForm: FormGroup;
  ratings = ['All', '1', '2', '3'];
  selectedRating: string;

  constructor() { }

  ngOnInit() {
    this.searchForm = new FormGroup({
      'filterName': new FormControl([]),
      'rating': new FormControl([])
    });

    this.selectedRating = this.ratings[0];
  }

}
