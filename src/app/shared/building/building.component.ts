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
    public windows : number[] = [];
    public doorPlace : number;
    
    ngOnInit() {
        this.windows = [];
        this.width = Math.floor(Math.random() * 4) * 50 + 200;
        this.height = Math.floor(Math.random() * 8) * 50 + 200;
        var windowLength = (this.width) / 50 * (this.height - 100) / 50;
        for(var i = 0; i < windowLength; i++){
          this.windows.push(Math.floor(Math.random() * 400));
        }
        this.doorPlace = Math.random() > 0.5 ? Math.max(10,Math.floor(Math.random() * (this.width / 50)) * 50 - 38) : 0;
        this.width+=12;
    }


}
