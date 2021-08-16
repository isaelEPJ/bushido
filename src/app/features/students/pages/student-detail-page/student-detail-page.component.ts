import { StudentsService } from './../../services/students.service';
import { ActivatedRoute } from '@angular/router';
import { Student } from './../../model/student.mode';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-student-detail-page',
  templateUrl: './student-detail-page.component.html',
  styleUrls: ['./student-detail-page.component.scss'],
})
export class StudentDetailPageComponent implements OnInit {
  @Input() student?: Student;

  constructor(
    private activateRoute: ActivatedRoute,
    private studentsService: StudentsService
  ) {}

  ngOnInit(): void {
    this.activateRoute.params.subscribe((params) => {
      this.student = this.studentsService.getUserById(params.id);
    });
  }
}
