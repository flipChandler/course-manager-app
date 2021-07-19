import { Course } from 'src/app/courses/course';
import { CourseService } from './course.service';
import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './course-info.component.html',
  styleUrls: ['./course-info.component.css']
})
export class CourseInfoComponent implements OnInit {
  course: Course;

  constructor(
    private activatedRoute: ActivatedRoute,
    private service: CourseService) {
  }

  // + converte id string em number
  ngOnInit(): void {
    this.course = this.service
      .retrieveById(+this.activatedRoute
        .snapshot
        .paramMap
        .get('id'));
  }

  save(): void {
    this.service.save(this.course);
  }
}
