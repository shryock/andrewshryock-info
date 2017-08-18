import { Component } from '@angular/core';
import { PersonalListEntry } from './personallistentry';

@Component({
    selector: 'skills',
    templateUrl: './skills.component.html',
    styleUrls: ['./skills.component.css']
})

export class SkillsComponent {
    skillList = [
        { name: "Programming", description: "C, C++, Java" },
        { name: "Web Development", description: "Angular and other" },
        { name: "Lower level dev", description: "C and unit testing" }
    ];
}
