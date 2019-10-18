import { Component, OnInit } from '@angular/core';
import { HeroService } from './services/hero.service';
import { Hero } from './models/hero.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'h8-oefening1';
  heroes: Hero[];
  filteredName: string = '';
  selectedRating: string = 'All';

  constructor(private heroService: HeroService){
  }

  ngOnInit(){
    this.fetchHeroesList(this.filteredName, this.selectedRating);
  }

  fetchHeroesList(filteredName: string, selectedRating: string){
    this.heroService.getHeroList(filteredName, selectedRating).subscribe(data =>{
      this.heroes = data;
    });
  }

  handleChangedRating(event: string) {
    this.selectedRating = event;
    this.fetchHeroesList(this.filteredName, this.selectedRating);
  }

  handleFilteredNameChanged(event: string) {
    this.filteredName = event;
    this.fetchHeroesList(this.filteredName, this.selectedRating);
  }
}
