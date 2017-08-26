import { Component } from '@angular/core';
import { PersonalListEntry } from './personallistentry';

@Component({
    selector: 'exp',
    templateUrl: './personallist.component.html',
    styleUrls: ['./personallist.component.css']
})

export class ExpComponent {
    parallaxImage = "";
    listTitle = "Experience";
    list = [
        {
            name: "SAS",
            time: "Summer 2017 - Present",
            description: [
                "Technical intern working in the Risk Research and Quantitative Solutions division",
                "Fixed bugs found in the Risk engine, a C-based project that calculates risk for financial institutions",
                "Designed and implemented a unit testing framework for a new version of the Risk engine",
                "Work with an engineer to write unit testing modules as new modules are developed"
            ]
        },
        {
            name: "Bamboo Mobile Health",
            time: "Fall 2014 - Spring 2017",
            description: [
                "Web and application developer across a few different projects as a part time job during the semesters",
                "Developed an online calendar for displaying medical data for multiple sclerosis patients",
                "Designed functions for dynamically changing calendar elements based on user input",
                "Worked on the notication system of the MS101 Android app, which sends patient data to the calendar",
                "Worked on a Amazon Fire TV app for recording Parkinson's disease patients' symptom data"
            ] 
        },
        {
            name: "PointSource",
            time: "Summer 2016",
            description: [
                "Worked as a software development intern on an Internet of Things project with other interns",
                "Implemented a system that tracks snack consumption in the office with load sensors",
                "Programmed an Arduino that read and processed data from multiple load sensors",
                "Designed a web API using Node-RED that retrieved and processed data server-side",
                "Built web application with AngularJS that connected with system in real-time",
                "Worked in an Agile development cycle using JIRA project management",
                "Served as project manager of the intern project for one sprint during the summer"
            ]
        },
        {
            name: "Mann + Hummel",
            time: "Fall 2015",
            description: [
                "Application developer for Mann + Hummel research project",
                "Built an Android application that displayed air quality data received from a device via Bluetooth",
                "Used Android graphing libraries to visualize the data recieved in real-time"
            ]
        },
        {
            name: "NC State ASSIST Program Research",
            time: "Summer 2015 - Fall 2015",
            description: [
                "Team member for carbon dioxide detection device research project",
                "Developed an Android application that connected to the device via Bluetooth",
                "Presented at NC State's Summer Research Symposium 2015"
            ]
        }
    ];
}
