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

    getHeroList():Observable<Hero[]>{
        return this.http.get(BASEAPIURL).pipe(
            map(this.parseHeroData)
        );
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

    parseAbilitiesData(rawAbilities: any[]): string[]{
        return Object.keys(rawAbilities).map(key => {
            let ability = rawAbilities[key];
            return '' + ability;
        });
    }
}