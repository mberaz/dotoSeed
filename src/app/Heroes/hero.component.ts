import { Component, OnInit } from '@angular/core';
import { HeroService } from "./hero.service";
import { Hero } from "./hero";

@Component({
    selector: 'app-hero',
    templateUrl: './hero.component.html',
})
export class HeroComponent implements OnInit {
    herp: Hero;
    heroList: Hero[];
    temp: any[];

    constructor(public heroService: HeroService) {
        this.heroList = new Array<Hero>();
    }

    async  ngOnInit() {
        var heroes = await this.heroService.getHeroes();
        var s="";
        for (var i = 0; i < heroes.Heros.length; i++) {
            var temp = heroes.Heros[i];
            this.heroList.push(new Hero(temp.id, temp.name));
        }
    }
}