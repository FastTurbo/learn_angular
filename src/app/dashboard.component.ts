/**
 * Created by 502742374 on 2017/8/2.
 */

import { Component,OnInit } from '@angular/core'


import { Hero } from './hero'
import { HeroService } from './hero.service'

@Component({
  selector:'my-dashboard',
  //template:'<h3>My Dashboard</h3>'
  templateUrl:'./dashboard.component.html'
})

export class DashboardComponent implements OnInit {

  heroes:Hero[] = []
  constructor(private heroService:HeroService){}
  ngOnInit ():void{
    this.heroService.getHeroes()
    .then(heroes => this.heroes = heroes.splice(1,5))
  }
}
