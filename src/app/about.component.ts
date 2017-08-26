import { Component } from '@angular/core';
import { PersonalListEntry } from './personallistentry';

@Component({
    selector: 'about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css']
})

export class AboutComponent {
    // not sure if download directive is required or not
    aboutContent = "<a href=\"./3rdpartylicenses.txt\" target=\"_blank\">Licenses</a>"
}
