import { Component, OnInit } from '@angular/core';
import { Student, StudentsService } from '../Services/students.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private studentsService: StudentsService) { }

  students:Student[] = [];
  patchStudent = {name: "Donald Junior"}
  ngOnInit(): void {
    this.getAllStudents();
    console.log("getAllStudents");
    this.updateStudentName("62e1969c66cc2356d506510a", this.patchStudent)
  }

  getAllStudents(){
    this.studentsService.getAllStudent().subscribe((data)=>{
      this.students = data;
    })
  }
  delStudent(studentId: string){
    this.studentsService.deleteStudent(studentId).subscribe();
    this.students = this.students.filter((student)=> student._id !== studentId);
  }
  updateStudentName(studentId:string, patched:Partial<Student>){
    this.studentsService.updateStudent(studentId, patched).subscribe();
  }

}
