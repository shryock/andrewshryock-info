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
            description:
                "Technical intern working in the Risk Research and Quantitative Solutions division of SAS.<br/>" +
                "Began the summer fixing bugs found in the Risk engine, a C-based project that calculates risk for financial institutions.<br/>" +
                "Designed and implemented a unit testing framework for a new version of the Risk engine.<br/>" +
                "Took an online course on the basics of SAS Progamming; working towards getting my SAS certification.<br/>" +
                "Currently work with an engineer to write unit testing modules as new modules are developed for the Risk Engine.<br/>"
        },
        {
            name: "Bamboo Mobile Health",
            time: "Fall 2014 - Spring 2017",
            description:
                "Web and application developer across a few different projects as a part time job during the semesters.<br/>" +
                "Developed an online calendar for displaying medical data for multiple sclerosis patients.<br/>" +
                "The calendar was written in HTML with JavaScript that would dynamically change calendar elements based on<br/>" +
                "user input. This would allow users to only display data that they wished to see and any given time.<br/>" +
                "The calendar had a secondary function which allowed for the user to query a 3rd party API to return weather info for past days.<br/>" +
                "Developed a feature for notication system of the MS101 Android app, which sends patient data to the calendar.<br/>" +
                "The feature involved a settings page which allowed the user to customize when their notifications were pushed.<br/>" +
                "Worked on a web app designed for recording Parkinson's disease patients' symptom data and intended for Amazon FireTV devices.<br/>" +
                "This was an AngularJS web app that could then be built for the device; design considerations for this platform included: ensuring<br/>" +
                "input could be received by the device's remote control and ensuring the app could be properly displayed on a TV/large monitor.<br/>"
        },
        {
            name: "PointSource",
            time: "Summer 2016",
            description:
                "Worked as a software development intern on an Internet of Things project in a team with 3 other interns.<br/>" +
                "Implemented a system that tracks snack consumption in the office using load sensors to track the weights of snack baskets.<br/>" +
                "Programmed an Arduino that read and processed data from multiple analog load sensor inputs.<br/>" +
                "Designed a REST API using Swagger and implemented in IBM Node-RED that retrieved and processed data server-side.<br/>" +
                "Built web application with AngularJS that connected with system in real-time using a grpahing library.<br/>" +
                "Worked in an Agile development cycle using JIRA for project and time management.<br/>" +
                "Served as project manager of the intern project for one sprint during the project's development.<br/>"
        },
        {
            name: "Mann + Hummel",
            time: "Fall 2015",
            description:
                "Application developer for Mann + Hummel air quality detection device research project.<br/>" +
                "Built an Android application that displayed air quality data received from a PCB via Bluetooth.<br/>" +
                "Used an Android graphing library to visualize the data recieved in real-time.<br/>"
        },
        {
            name: "NC State ASSIST Program Research",
            time: "Summer 2015 - Fall 2015",
            description:
                "Team member for carbon dioxide detection device research project.<br/>" +
                "Developed an Android application that connected to the device via Bluetooth.<br/>" +
                "Presented at NC State's Summer Research Symposium 2015.<br/>"
        }
    ];
}
