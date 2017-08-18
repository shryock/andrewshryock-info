import { BrowserModule }           from '@angular/platform-browser';
import { NgModule }                from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdToolbarModule }         from '@angular/material';
import { MdButtonModule }          from '@angular/material';
import { MdListModule }            from '@angular/material';

import { AppComponent }            from './app.component';
import { NavComponent }            from './nav.component';
import { SummaryComponent }        from './summary.component';
import { SkillsComponent }         from './skills.component';
import { ExpComponent }            from './exp.component';
import { ProjectsComponent }       from './projects.component';
import { AboutComponent }          from './about.component';
import { SocialComponent }         from './social.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SummaryComponent,
    SkillsComponent,
    ExpComponent,
    ProjectsComponent,
    AboutComponent,
    SocialComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdToolbarModule,
    MdButtonModule,
    MdListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
