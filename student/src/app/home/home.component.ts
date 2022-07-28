import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Student, StudentsService } from '../Services/students.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private studentsService: StudentsService) { }

  students$!:Observable<Student[]>;

  ngOnInit(): void {
    this.getAllStudents();
    console.log("getAllStudents");

  }

  getAllStudents(){
    this.students$ = this.studentsService.getAllStudent()
  }
  delStudent(studentId: string){
    this.studentsService.deleteStudent(studentId).subscribe(()=>{
      this.getAllStudents()
    });

    
  }
  updateStudentName(studentId:string, patched:Partial<Student>){
    this.studentsService.updateStudent(studentId, patched).subscribe();
  }

}
