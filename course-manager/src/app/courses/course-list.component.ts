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
    this.retrieveAll();
  }
/*
     NO RESPONSE DO SUBSCRIBE, RECEBE UMAS CALLBACK'S FUNCTIONS, COMO NEXT (DEU CERTO)
     ERROR É OUTRA CALLBACK FUNCTION QUE RETORNA AO SUBSCRIBE QUANDO ALGO DE ERRADO ACONTECEU
     this._courses recebe a lista de course que veio do next
     this._filtered está aqui, pois, o retorno é assíncrono
 */
  retrieveAll(): void {
    this.service.retrieveAll().subscribe({
      next: courses => {
        this._courses = courses;
        this._filteredCourses = this._courses;
      },
      error: err => console.log('Error', err)
    });
  }

  deleteById(courseId: number): void {
    this.service.deleteById(courseId).subscribe({
      next: () => {
        console.log('Delete with success!');
        this.retrieveAll();
      },
      error: err => console.log('Error', err)
    });
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
