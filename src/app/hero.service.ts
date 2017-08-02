/**
 * Created by 502742374 on 2017/8/2.
 */
import { Injectable } from '@angular/core'

import { Hero } from './hero'
import { HEROES } from './mock-heroes'

/*
* @Injectable()装饰器用来注入服务。
* */
@Injectable()
export class HeroService {
  getHeroes () : Promise<Hero[]> {
    return Promise.resolve(HEROES)
  }

}
