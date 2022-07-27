import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private _http: HttpClient) { }

  ENDPOINT = "http://localhost:3000/api/v1/students"

  getAllStudent():Observable<Student[]>{
    return this._http.get<any>(this.ENDPOINT).pipe(
      map((response)=>{
        return response.data["students"]
      })
    )
  }
  createStudent(data: Student):Observable<Student>{
    return this._http.post<Student>(this.ENDPOINT, data);
  }
  getSingleStudent(studentId: string): Observable<Student>{
    return this._http.get<Student>(this.ENDPOINT +"/"+ studentId);
  }
  updateStudent(studentId: string, changes:Partial<Student>){
    return  this._http.patch(this.ENDPOINT +"/"+ studentId, changes);
  }

  deleteStudent(studentId: string){
    return this._http.delete(this.ENDPOINT +"/"+ studentId);
  }
  
}





export interface Student{
  _id ?: string;
  name: string;
  email: string;
  cohort:string;
  phoneNumber:string;
  grade:number;
  registrationFee:number;
}
