import {
    Component,
    HostBinding,
    Input,
    OnInit
} from '@angular/core';

@Component({
  selector: '[building]',
  inputs : ['duration','delay'],
  templateUrl: './building.component.html',
  styleUrls: ['./building.component.less']
})
export class BuildingComponent implements OnInit {
    @HostBinding('style.width.px') width : number;
    @HostBinding("style.height.px") height : number;
    @Input() delay : number;
    @Input() duration : number;
    public windows : any[] = [];
    public doorPlace : number;

    ngOnInit() {
        this.windows = [];
        var coordinates = [];
        this.width = Math.floor(Math.random() * 10) * 50 + 800;
        this.height = Math.min(Math.floor(screen.height / 50) + 1,Math.floor(window.innerHeight / 50) + 1, Math.floor(Math.random() * 14)) * 50 + 400;
        var windowWidth = this.width / 50;
        var windowHeight = this.height / 50 - 2;
        var windowLength = windowWidth * (this.height - 100) / 50;
        for(var i = 0; i < 80 && i < windowWidth * windowHeight * 0.75; i++){
          var rand = Math.floor(Math.random() * 100);
          var x = Math.floor(Math.random() * windowWidth);
          var y = Math.floor(Math.random() * windowHeight);
          while(coordinates.indexOf(x + '_' + y) !== -1){
            x = Math.floor(Math.random() * windowWidth);
            y = Math.floor(Math.random() * windowHeight);
          }
          this.windows.push({ x :  x * 50, y : y * 50, value : rand });
          coordinates.push(x + '_' + y);
        }
        this.doorPlace = Math.random() > 0.5 ? Math.max(10,Math.floor(Math.random() * (this.width / 50)) * 50 - 38) : 0;
        this.width+=12;
    }


}
