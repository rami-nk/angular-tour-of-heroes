import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from '../hero';
import { Location } from '@angular/common'
import { HeroStoreService } from '../hero-store.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  hero: Hero | undefined;

  constructor(
    private route: ActivatedRoute,
    public heroStore: HeroStoreService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.hero = this.heroStore.getHero(id);;
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.hero) {
      this.heroStore.updateHero(this.hero);
      this.goBack();
    }
  }

}
