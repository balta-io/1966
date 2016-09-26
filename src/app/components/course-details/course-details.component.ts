import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Course } from '../../models/course';
import { CourseService } from '../../services/course-service.service';

@Component({
  selector: 'course-details',
  templateUrl: './course-details.component.html',
  providers: [
    CourseService
  ]
})
export class CourseDetailsComponent implements OnInit {
  course: Course = new Course();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private courseService: CourseService) { }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      let tag: string = params['tag'];
      this.getCourse(tag);
    });
  }

  getCourse(tag: string) {
    this.courseService.getCourse(tag)
      .subscribe(data => this.course = new Course(data),
      error => console.log(error));
  }
}