import { Component } from '@angular/core';

@Component({
    selector: 'nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.css']
})
export class NavComponent { 
    title = 'Andrew Shryock';
    summary = 'Summary';
    skills = 'Skills';
    exp = 'Experience';
    projects = 'Projects';
    about = "About";
}
