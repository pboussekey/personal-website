import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[home]',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
    
    public pressStart : boolean = false;

    constructor() {
        document.addEventListener("keydown", this.keydown.bind(this));
    }

    ngOnInit() {
    }
    
    keydown(event){
        if(event.keyCode === 13){
            this.pressStart = true;
            document.removeEventListener("keydown", this.keydown, true);
        }
    }

}
