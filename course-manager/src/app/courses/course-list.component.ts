import { Component, OnInit } from "@angular/core";
import { Course } from "src/app/courses/course";

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html'
})
export class CourseListComponent implements OnInit {

  courses: Course[] = [];

  ngOnInit() {
    this.courses = [
      {
        id: 1,
        name: 'Angular: forms',
        imageUrl: '/assets/images/forms.png',
        price: 99.99,
        code: 'XPS-8796',
        duration: 120,
        rating: 4.7,
        releaseDate: 'June, 23, 2002'
      },
      {
        id: 2,
        name: 'Angular: http',
        imageUrl: '/assets/images/cli.png',
        price: 59.99,
        code: 'XPS-8797',
        duration: 60,
        rating: 2.9,
        releaseDate: 'April, 1, 2021'
      },
      {
        id: 3,
        name: 'Angular: Material',
        imageUrl: '/assets/images/http.png',
        price: 45.9,
        code: 'XPS-8798',
        duration: 152,
        rating: 4.8,
        releaseDate: 'December, 2, 2020'
      },
      {
        id: 4,
        name: 'VueJs: forms',
        imageUrl: '/assets/images/router.png',
        price: 61.87,
        code: 'XPS-8799',
        duration: 87,
        rating: 3.4,
        releaseDate: 'January, 11, 2015'
      }
    ]
  }
}
