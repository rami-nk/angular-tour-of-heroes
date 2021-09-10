import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import {MessageService} from "./message.service";

@Injectable({
  providedIn: 'root'
})
export class HeroStoreService {

  private heroes$ = new BehaviorSubject<Hero[]>([]);

  public heroesObservable = this.heroes$.asObservable();

  constructor(private heroService: HeroService) {
    this.getHeroes();
   }

   private getHeroes() {
     this.heroService.getHeroes().subscribe(
       response => this.heroes$.next(response)
     );
   }

   get heroes() {
     return this.heroes$.getValue();
   }

   private set heroes(heroes: Hero[]) {
     this.heroes$.next(heroes);
   }

   getHero(id: number) {
     return this.heroes.find(hero => hero.id == id);
   }

   addHero(hero: Hero) {
     this.heroes = [...this.heroes, hero];
     this.heroService.addHero(hero).subscribe(
        _ => this.getHeroes()
     );
   }

   deleteHero(hero: Hero) {
     this.heroes = this.heroes.filter(listItem => listItem!==hero);
     this.heroService.deleteHero(hero.id).subscribe();
   }

   updateHero(hero: Hero) {
     let idx = this.heroes.findIndex(listItem => listItem.id === hero.id);
     let heroCache = this.heroes[idx];
     this.heroes[idx] = hero;
     this.heroService.updateHero(hero).subscribe(
       result => {
         // If updating a hero failed, then return changes and fetch
         // all heroes again to update all components.
         if (!result)
         {
          this.heroes[idx] = heroCache;
          this.getHeroes();
         }
       }
     );
   }

}
