import { Component } from '@angular/core';

import { Hero } from './hero';
import { HeroDetailComponent } from './hero-detail.component';

@Component({
    selector:       'app-root',
    templateUrl:    './app.component.html',
    styleUrls:      ['./app.component.css'],
})
export class AppComponent {
    title = 'Tour of Heroes';
}
