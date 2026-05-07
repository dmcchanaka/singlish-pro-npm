import { Directive, OnInit, OnDestroy } from '@angular/core';
import Singlish from 'singlish-pro';

@Directive({
  selector: '[appSinglish]',
  standalone: true
})
export class SinglishDirective implements OnInit, OnDestroy {
  private singlish: any;

  ngOnInit() {
    this.singlish = new Singlish({
      showUI: true,
      enabled: false
    });
  }

  ngOnDestroy() {
    if (this.singlish) {
      this.singlish.destroy();
    }
  }
}
