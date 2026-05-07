import { Component } from '@angular/core';

import { SinglishDirective } from './singlish.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SinglishDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-app';
}
