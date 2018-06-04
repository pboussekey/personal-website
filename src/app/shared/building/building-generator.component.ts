import { Component, OnInit, Input } from '@angular/core';

import {
    style,
    transition,
    animate,
    state,
    trigger  } from '@angular/animations';


@Component({
  selector: '[building-generator]',
  inputs : ['nbBuilding', 'duration','buildingState'],
  templateUrl: './building-generator.component.html',
  styleUrls: ['./building-generator.component.less'],
  animations : [
    trigger("buildingState", [
        state("firstPlan", style({ right : "calc(100% + 160rem)" })),
        state("secondPlan", style({ right : "calc(100% + 160rem)", transform : "scale(0.8)",  transformOrigin : 'bottom right', backgroundColor : '#004099' })),
        transition("* => firstPlan", [style({ right : "-160rem" }), animate(15000)]),
        transition("* => secondPlan", [style({ right : "-160rem", transform : "scale(0.8)", transformOrigin : 'bottom right', backgroundColor : '#004099' }), animate(20000)]),
    ])]
})
export class BuildingGeneratorComponent implements OnInit {

@Input() nbBuilding : number;
@Input() buildingState : string;
public duration : number;

public buildings : any[] = [];
constructor() {
}

generateBuilding(d : number){
    var building = {delay : d };
     setTimeout(function(){
         this.buildings.push(building);
        setTimeout(function(){
            this.destroyBuilding(building);
        }.bind(this), this.duration);
    }.bind(this),  building.delay);
}

destroyBuilding(building){
    this.buildings.splice(this.buildings.indexOf(building), 1);
    this.generateBuilding(0);
}

ngOnInit() {
    var states = {
        "firstPlan" : 15000,
        "secondPlan" : 20000
    };
    this.duration = states[this.buildingState];
    for(var i = 0; i < this.nbBuilding; i++){
        this.generateBuilding(Math.floor((this.duration  / this.nbBuilding * i) * ( 0.9 + ( 0.1 * Math.random()))));
    }
}

}
