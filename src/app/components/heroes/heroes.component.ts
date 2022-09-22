import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../service/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
})
export class HeroesComponent {
  heroes:Heroe[]= [];

  constructor( private _heroesService:HeroesService,
               private router:Router
                ) {
    this.heroes = this._heroesService.getHeroes();
  }

  verHeroe( idx:number){
    // this.router.navigate( ['/heroe', idx] );
  }

}