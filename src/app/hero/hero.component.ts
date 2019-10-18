import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../models/hero.model';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  @Input() hero: Hero;

  constructor() { }

  ngOnInit() {
    console.log(this.hero);
  }

}
