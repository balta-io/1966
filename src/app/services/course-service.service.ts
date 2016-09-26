import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import "rxjs/Rx";
import { Course } from '../models/course';

@Injectable()
export class CourseService {

  constructor(private http: Http) { }

  getCourses() {
    return this.http.get('http://abt-api.azurewebsites.net/api/courses')
      .map(res => res.json())
      .catch(this.handleError);
  }

  getCourse(tag: string) {
    return this.http.get('http://abt-api.azurewebsites.net/api/courses/' + tag)
      .map(res => res.json())
      .catch(this.handleError);
  }

  private handleError(error: any) {
    console.error(error); // log to console instead
    return Promise.reject(error);
  }
}