import { Component } from '@angular/core';
import { PersonalListEntry } from './personallistentry';

@Component({
    selector: 'exp',
    templateUrl: './exp.component.html',
    styleUrls: ['./exp.component.css']
})

export class ExpComponent {
    expList = [
        { name: "SAS", description: "SAS internship" },
        { name: "PointSource", description: "PS internship" },
        { name: "Bamboo Mobile Health", description: "web developer" }
    ];
}
