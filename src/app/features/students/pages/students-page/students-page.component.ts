import { Student } from './../../model/student.mode';
import { StudentsService } from './../../services/students.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students-page',
  templateUrl: './students-page.component.html',
  styleUrls: ['./students-page.component.scss'],
})
export class StudentsPageComponent implements OnInit {
  students: Array<Student>;

  constructor(private studentsService: StudentsService) {
    this.students = studentsService.listStudents();
  }

  ngOnInit(): void {
    this.students = this.studentsService.listStudents();
    console.log(this.students);
  }
}
