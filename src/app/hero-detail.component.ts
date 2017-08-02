/**
 * Created by 502742374 on 2017/8/2.
 */
import { Component,Input } from '@angular/core'
import { Hero } from './hero'

/*
* 声明指令，只要把这些指令列在NgModule装饰器的declarations数组中就可以了。
* */
@Component({
  selector:'hero-detail',
  template:`
  <div *ngIf="hero">
    <h2>{{hero.name}} details</h2>
    <div><label>id:</label>{{hero.id}}</div>
    <div>
      <label>name:</label>
      <input type="text" [(ngModel)]="hero.name">
    </div>
  </div>`
})
/*
* @component装饰器为组建提供了Angular元数据
*
* */
export class HeroDetailComponent{
  @Input() hero:Hero
}
