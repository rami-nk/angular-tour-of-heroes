import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Hero } from '../hero';
import { HeroStoreService } from '../hero-store.service';

@Component({
  selector: 'app-add-hero-area',
  templateUrl: './add-hero-area.component.html',
  styleUrls: ['./add-hero-area.component.css']
})
export class AddHeroAreaComponent implements OnInit {

  constructor(public heroStore: HeroStoreService) { }

  ngOnInit(): void {
  }

  add(name: string) {
    name = name.trim();
    if (!name) { return; }
    this.heroStore.addHero({ name } as Hero);
  }

}
