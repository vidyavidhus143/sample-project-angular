import { COURSES } from './../mock-courses';
import { Component, OnInit } from '@angular/core';
import {Course} from '../course';
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses=COURSES;
  selectedCourse: Course | undefined ;
  constructor() {}
   
  ngOnInit(): void {
  }

  onSelect(course:Course):void{
    this.selectedCourse=course;
  }
}
