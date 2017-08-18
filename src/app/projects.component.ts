import { Component } from '@angular/core';
import { PersonalListEntry } from './personallistentry';

@Component({
    selector: 'projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.css']
})

export class ProjectsComponent {
    expList = [
        { name: "SAS", description: "SAS internship" },
        { name: "PointSource", description: "PS internship" },
        { name: "Bamboo Mobile Health", description: "web developer" }
    ];
}
