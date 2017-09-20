import { Component } from '@angular/core';
import { PersonalListEntry } from './personallistentry';

@Component({
    selector: 'exp',
    templateUrl: './personallist.component.html',
    styleUrls: ['./personallist.component.css']
})

export class ExpComponent {
    titleImg = "img/exp-header.png";
    list = [
        {
            name: "SAS",
            time: "Summer 2017 - Present",
            description:
                "&#9656; Technical intern working in the Risk Research and Quantitative Solutions division of SAS.<br/>" +
                "&#9656; Began the summer fixing bugs found in the Risk engine, a C-based project that calculates risk for financial institutions.<br/>" +
                "&#9656; Designed and implemented a unit testing framework for a new version of the Risk engine.<br/>" +
                "&#9656; Took an online course on the basics of SAS Progamming; working towards getting my SAS certification.<br/>" +
                "&#9656; Currently work with an engineer to write unit testing modules as new modules are developed for the Risk Engine.<br/>"
        },
        {
            name: "Bamboo Mobile Health",
            time: "Fall 2014 - Spring 2017",
            description:
                "&#9656; Web and application developer across a few different projects as a part time job during the semesters.<br/>" +
                "&#9656; Developed an online calendar for displaying medical data for multiple sclerosis patients.<br/>" +
                "&emsp;&#9657; The calendar was written in HTML with JavaScript that would dynamically change calendar elements.<br/>" +
                "&emsp;&#9657; This would allow users to only display data that they wished to see and any given time.<br/>" +
                "&emsp;&#9657; The calendar had a secondary function which allowed for the user to query a 3rd party API to return weather.<br/>" +
                "&#9656; Developed a feature for notication system of the MS101 Android app, which sends patient data to the calendar.<br/>" +
                "&emsp;&#9657; The feature involved a settings page which allowed the user to customize when their notifications were pushed.<br/>" +
                "&#9656; Worked on a web app designed for recording Parkinson's disease patients' symptom data.<br/>" +
                "&emsp;&#9657; This was an AngularJS web app intended for Amazon FireTV devices; design considerations for this platform included:<br/>" +
                "&emsp;&emsp;&#9656; Input via the device's remote control<br/>" +
                "&emsp;&emsp;&#9656; Ensuring the app could be properly displayed on a TV/large monitor.<br/>"

        },
        {
            name: "PointSource",
            time: "Summer 2016",
            description:
                "&#9656; Worked as a software development intern on an Internet of Things project in a team with 3 other interns.<br/>" +
                "&#9656; Implemented a system that tracks snack consumption in the office using load sensors to track the weights of baskets.<br/>" +
                "&#9656; Programmed an Arduino that read and processed data from multiple analog load sensor inputs.<br/>" +
                "&#9656; Designed a REST API using Swagger and implemented in IBM Node-RED that retrieved and processed data server-side.<br/>" +
                "&#9656; Built web application with AngularJS that connected with system in real-time using a graphing library.<br/>" +
                "&#9656; Worked in an Agile development cycle using JIRA for project and time management.<br/>" +
                "&#9656; Served as project manager of the intern project for one sprint during the project's development.<br/>"
        },
        {
            name: "Mann + Hummel",
            time: "Fall 2015",
            description:
                "&#9656; Application developer for Mann + Hummel air quality detection device research project.<br/>" +
                "&#9656; Built an Android application that displayed air quality data received from a PCB via Bluetooth.<br/>" +
                "&#9656; Used an Android graphing library to visualize the data recieved in real-time.<br/>"
        },
        {
            name: "NC State ASSIST Program Research",
            time: "Summer 2015 - Fall 2015",
            description:
                "&#9656; Team member for carbon dioxide detection device research project.<br/>" +
                "&#9656; Developed an Android application that connected to the device via Bluetooth.<br/>" +
                "&#9656; Presented at NC State's Summer Research Symposium 2015.<br/>"
        }
    ];
}
