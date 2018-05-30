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
        this.width = Math.floor(Math.random() * 6) * 50 + 400;
        this.height = Math.floor(Math.random() * 14) * 50 + 400;
        var windowWidth = (this.width) / 50;
        var windowLength = windowWidth * (this.height - 150) / 50;
        for(var i = 0; i < windowLength; i++){
          var rand = Math.random() * 400;
          if(rand < 100){
            this.windows.push({ x :  Math.floor(i % windowWidth) * 50, y : Math.floor(i / windowWidth) * 50, value : rand });
          }
        }
        this.doorPlace = Math.random() > 0.5 ? Math.max(10,Math.floor(Math.random() * (this.width / 50)) * 50 - 38) : 0;
        this.width+=12;
    }


}
