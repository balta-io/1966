import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing, appRoutingProviders } from './app.routing';

import { HeadbarComponent } from './components/shared/headbar/headbar.component';
import { HomeComponent } from './components/home/home.component';
import { CourseDetailsComponent } from './components/course-details/course-details.component';
import { ListCoursesComponent } from './components/list-courses/list-courses.component';
import { HomePage } from './pages/home-page/home-page';

@NgModule({
  declarations: [
    HeadbarComponent,
    HomeComponent,
    CourseDetailsComponent,
    ListCoursesComponent,
    HomePage
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [HomePage]
})

export class AppModule { }
