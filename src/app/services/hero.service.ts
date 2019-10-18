import { Injectable } from '@angular/core';
import { Hero } from '../models/hero.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const BASEAPIURL: string = 'https://overwatch-9dba4.firebaseio.com/heroes.json';

@Injectable()
export class HeroService{
    heroList: Hero[];

    constructor(private http: HttpClient){ }

    getHeroList(filteredName: string, selectedRating: string):Observable<Hero[]>{
        return this.http.get(BASEAPIURL).pipe(
            map(this.parseHeroData),
            map((heroes: Hero[]) => {
                return this.filterHeroes(heroes, filteredName, selectedRating);
            })
        );
    }

    filterHeroes(heroes: Hero[], filteredName: string, selectedRating: string): Hero[] {
        console.debug(filteredName + ' --- ' + selectedRating)
        if(selectedRating == 'All'){
            return heroes.filter(hero => hero.name.toLocaleLowerCase().includes(filteredName.toLocaleLowerCase()));
        }
        else{
            return heroes.filter(hero => hero.name.toLocaleLowerCase().includes(filteredName.toLocaleLowerCase()) && hero.difficulity == parseInt(selectedRating));
        }
    }

    parseHeroData(rawHeros: any[]): Hero[] {
        return Object.keys(rawHeros).map(key => {
            let hero = rawHeros[key];
            return new Hero(
                hero.abilities,
                hero.avatar,
                hero.class,
                hero.difficulty,
                hero.dps,
                hero.name,
                key
            );
        });
    }
}