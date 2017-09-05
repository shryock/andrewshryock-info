import { Component } from '@angular/core';
import { PersonalListEntry } from './personallistentry';

@Component({
    selector: 'about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css']
})

export class AboutComponent {
    aboutTitle = "About this page"
    aboutContent =
        "This page was created using the <a class=\"link\" href=\"https://angular.io\">Angular</a> and <a class=\"link\" href=\"https://nodejs.org\">Node.js</a> JavaScript frameworks with Node modules installed via <a href=\"https://npmjs.org\">npm</a>.<br/>";
}
