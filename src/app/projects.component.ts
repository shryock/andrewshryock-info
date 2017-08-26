import { Component } from '@angular/core';
import { PersonalListEntry } from './personallistentry';

@Component({
    selector: 'projects',
    templateUrl: './personallist.component.html',
    styleUrls: ['./personallist.component.css']
})

export class ProjectsComponent {
    parallaxImage = "img/asteroidEscapeTitle.JPG";
    listTitle = "Other Projects";
    list = [
        {
            name: "Asteroid Escape",
            time: "Fall 2016",
            description: [
                "Created in about a week for my Intro to Game Design course, Asteroid Escape",
                "is an \"infinite runner\" in which you control a spaceship through an asteroid ",
                "field. Created using GameMaker Studio. Check out my repo on GitHub for a download!"
            ]
        },
        {
            name: "PointSource",
            description: [
                "PS internship"
            ]
        },
        {
            name: "Bamboo Mobile Health",
            description: [
                "web developer"
            ]
        }
    ];
}
