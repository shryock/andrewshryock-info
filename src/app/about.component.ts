import { Component } from '@angular/core';
import { PersonalListEntry } from './personallistentry';

@Component({
    selector: 'about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css']
})

export class AboutComponent {
    // not sure if download directive is required or not
    aboutContent =
        "This page was created using the <a class=\"link\" href=\"https://angular.io\">Angular</a> and <a class=\"link\" href=\"https://nodejs.org\">Node.js</a> JavaScript frameworks and Node modules installed via <a href=\"https://npmjs.org\">npm</a>.<br/>" +
        "Click <a class=\"link\" href=\"./3rdpartylicenses.txt\" target=\"_blank\">here</a> for the licenses of resources used.<br/>" +
        "Check out this website's <a class=\"link\" href=\"https://github.com/shryock/andrewshryock-info\">Github repo!</a><br/>";
}
