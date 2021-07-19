import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './course-info.component.html'
})
export class CourseInfoComponent implements OnInit {
  courseId: number;

  constructor(private activatedRoute: ActivatedRoute) {
  }

  // + converte id string em number
  ngOnInit(): void {
    this.courseId = +this.activatedRoute
      .snapshot
      .paramMap
      .get('id');
  }
}
