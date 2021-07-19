import { Course } from 'src/app/courses/course';
import { CourseService } from './course.service';
import { Component, OnInit } from '@angular/core';

// quando um componente está na rota, não faz sentido ele ter uma tag
@Component({
  templateUrl: './course-list.component.html'
})
export class CourseListComponent implements OnInit {

  // variavel com underscore indica que ela só valerá dentro desse componente
  _courses: Course[] = [];

  _filterBy: string;

  _filteredCourses: Course[] = [];

  // dependência de CourseService sendo injetada em CourseListComponent pelo Angular
  constructor(private service: CourseService) {

  }

  ngOnInit() {
    this._courses = this.service.retrieveAll();
    this._filteredCourses = this._courses;
  }

  set filter(value: string) {
    this._filterBy = value;

    // pega uma sequencia de substrings e bater com algum campo do curso
    // vai retornar no array
    this._filteredCourses = this._courses
      .filter((course: Course) => course.name.toLowerCase()
        .indexOf(this._filterBy.toLowerCase()) > -1
      );
  }

  get filter() {
    return this._filterBy;
  }


}
