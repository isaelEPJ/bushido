import { StudentsService } from './../../services/students.service';
import { ActivatedRoute } from '@angular/router';
import { Student } from '../../model/student.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-student-detail-page',
  templateUrl: './student-detail-page.component.html',
  styleUrls: ['./student-detail-page.component.scss'],
})
export class StudentDetailPageComponent implements OnInit {
  @Input() student?: Student;

  titleText?: string = 'Aluno';

  constructor(
    private activateRoute: ActivatedRoute,
    private studentsService: StudentsService
  ) {}

  ngOnInit(): void {
    this.activateRoute.params.subscribe(
      (params) => {
        this.studentsService.findStudentById(params.id).subscribe((std) => {
          this.student = std;
        });
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
