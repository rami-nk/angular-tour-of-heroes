import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroStoreService } from '../hero-store.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor(public heroStore: HeroStoreService,
              private messageService: MessageService) { }

  ngOnInit(): void {
  }


  delete(hero: Hero): void {
    this.heroStore.deleteHero(hero);
  }


}
