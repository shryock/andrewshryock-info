import { Component } from '@angular/core';
import { PersonalListEntry } from './personallistentry';

@Component({
    selector: 'skills',
    templateUrl: './personallist.component.html',
    styleUrls: ['./personallist.component.css']
})

export class SkillsComponent {
    titleImg = "img/skills-header.png";
    list = [
        {
            name: "C Programming",
            description:
                "&#9656; Experience programming in C for several courses and at <a href=\"#exp\">SAS</a>.<br/>" +
                "&#9656; Wrote several lower-level programs in C for my operating systems course:<br/>" +
                "&emsp;&#9657; Multithreaded programs using pthread.h.<br/>" +
                "&emsp;&#9657; Client/server programs that communicated via TCP.<br/>" +
                "&emsp;&#9657; Nvidia CUDA program that ran calculations on the GPU.<br/>" +
                "&#9656; Using version control systems (Git and CVS) in various projects.<br/>" +
                "&#9656; Development using command line tools including gdb, valgrind, and vi.<br/>"
        },
        {
            name: "Java Programming",
            description:
                "&#9656; Experience using Java throughout several different courses.<br/>" +
                "&#9656; Using Java to implement various data structures including:<br/>" +
                "&emsp;&#9657; Linked Lists, Stacks, Queues, Heaps, Trees, and Hash Tables.<br/>" +
                "&#9656; Writing unit tests in Java using the JUnit testing framework.<br/>" +
                "&#9656; Building webpages using JSP and JSF with a Java backend.<br/>" +
                "&#9656; Using JDBC to connect to a MySQL database.<br/>"
        },
        {
            name: "Web Development",
            description:
                "&#9656; Template and styling design using HTML and CSS/SCSS.<br/>" +
                "&#9656; Using JavaScript frameworks including Angular(JS) and JQuery.<br/>" +
                "&#9656; Web application development using Node.js and npm.<br/>" +
                "&#9656; REST API design with Swagger.<br/>" +
                "&#9656; Hosting static website using Amazon Web Services.<br/>"
        },
        {
            name: "Android Application Development",
            description:
                "&#9656; Developing native applications for Android using Android Studio.<br/>" +
                "&#9656; Using web technologies to design and develop hybrid mobile apps.<br/>" +
                "&#9656; Developing Android applications that use Bluetooth to connect to IoT devices.<br/>"
        },
        {
            name: "Internet of Things Development",
            description:
                "&#9656; Developing programs for Arduino and Raspberry Pi hardware.<br/>" +
                "&#9656; Connecting Arduinos to basic sensors and other electrical components.<br/>" +
                "&#9656; Usage of IBM Node-RED for connecting IoT devices to backend services.<br/>"
        }
    ];
}
