import { Component } from '@angular/core';
import { PersonalListEntry } from './personallistentry';

@Component({
    selector: 'skills',
    templateUrl: './personallist.component.html',
    styleUrls: ['./personallist.component.css']
})

export class SkillsComponent {
    parallaxImage = "";
    listTitle = "Skills"
    list = [
        {
            name: "Application/Systems Programming",
            description: [ 
                "Programming in C, C++, and Java", 
                "Development and usage of unit testing frameworks",
                "Version control system (Git and CVS) integration",
                "Command line tools (gdb, valgrind, vi, etc.) usage"
            ]
        },
        {
            name: "Web Development",
            description: [
                "Template design using HTML and CSS/SCSS",
                "JavaScript frameworks including Angular(JS) and Node.js/npm",
                "REST API design with Swagger"
            ]
        },
        {
            name: "Android Application Development",
            description: [
                "Developing native applications for Android using Android Studio",
                "Developing hybrid applications for Android using Cordova"
            ]
        },
        {
            name: "Internet of Things Development",
            description: [
                "Developing for Arduino and Raspberry Pi hardware",
                "Usage of IBM Node-RED"
            ]
        }
    ];
}
