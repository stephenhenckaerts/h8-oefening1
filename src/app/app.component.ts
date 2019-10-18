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

  constructor(private heroService: HeroService){
  }

  ngOnInit(){
    this.fetchHeroesList();
  }

  fetchHeroesList(){
    this.heroService.getHeroList().subscribe(data =>{
      this.heroes = data;
    });
  }
}
