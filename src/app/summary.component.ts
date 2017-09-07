import { Component } from '@angular/core';

@Component({
    selector: 'summary',
    templateUrl: './summary.component.html',
    styleUrls: ['./summary.component.css']
})

export class SummaryComponent {
    email = "ajshryoc@ncsu.edu";
    summaryContent =
        "Hi, my name is Andrew Shryock. I am currently a Senior working towards " +
        "my Bachelor of Science in Computer Science from North Carolina State " +
        "University's College of Engineering with a planned graduation date in May " +
        "of 2018. I am passionate about software enginneering, gaming, cooking, and " +
        "learning new things. Connect with me at any of the following places:";
}
