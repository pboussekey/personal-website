import { Component } from '@angular/core';

@Component({
  selector: '[contact]',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.less']
})
export class ContactComponent  {
    public selected : number;
    public animated : boolean;
    public scale : number = 1;
    public left : any = 0;

    select(index){
        if(!this.animated){
            if(index < this.selected && this.scale > 0){
              this.scale = -1;
            }
            else if(index > this.selected && this.scale < 0){
              this.scale = 1;
            }
            this.selected = index;
            this.animated = true;
            this.left = 'calc(' + (index  * 33  + 16.5) + '% - 3rem)';
            setTimeout(function(){
              this.animated = false;
            }.bind(this), 1000);
        }
    }
}
