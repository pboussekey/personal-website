import { Directive, Input, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[fit-screen]',
  inputs : ['minheight'],
})
export class FitScreenDirective {

    @Input() public minheight : number;
    @HostBinding('style.height') get getHeight() {
        var screenHeight = Math.min(window.innerHeight, screen.height);
        return Math.max(screenHeight - 80, this.minheight) + "px";
    }
    @HostListener('window:resize', ['$event'])
    onResize(event) {
    }

  constructor() { }

}
