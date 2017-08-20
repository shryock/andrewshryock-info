import { Component } from '@angular/core';

@Component({
    selector: 'summary',
    templateUrl: './summary.component.html',
    styleUrls: ['./summary.component.css']
})

export class SummaryComponent {
    summaryContent =
        "Hi, my name is Andrew Shryock. I am currently a Senior working towards " +
        "my Bachelor of Science in Computer Science from North Carolina State " +
        "University's College of Enginering with a planned graduation date in May " +
        "of 2018. ";
}
