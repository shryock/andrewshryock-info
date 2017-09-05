import { Component } from '@angular/core';
import { PersonalListEntry } from './personallistentry';

@Component({
    selector: 'projects',
    templateUrl: './personallist.component.html',
    styleUrls: ['./personallist.component.css']
})

export class ProjectsComponent {
    listTitle = "Other Projects";
    list = [
        {
            name: "Asteroid Escape",
            time: "Fall 2016",
            description:
                "Created in about a week for my Intro to Game Design course, Asteroid Escape<br/>" +
                "is an \"infinite runner\" in which you control a spaceship through an asteroid<br/>" +
                "field. Created using GameMaker Studio. Check out my repo on GitHub for a download!<br/>"
        },
        {
            name: "PointSource",
            description:
                "PS internship<br/>"
        },
        {
            name: "Bamboo Mobile Health",
            description:
                "web developer<br/>"
        }
    ];
}
