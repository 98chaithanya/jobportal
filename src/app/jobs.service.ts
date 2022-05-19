import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class JobsService {
  

  private _viewjobUrl="http://localhost:3000/api/admin/view";
  private _viewSingleUrl="http://localhost:3000/api/admin/editjob";
  private _updatejobUrl = "http://localhost:3000/api/admin/update";
  private _deletejobUrl = "http://localhost:3000/api/admin/delete"

  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  viewJobs(){
    return this.http.get(this._viewjobUrl)
  }
  viewSingleJobs(id: string | null){
    return this.http.get(this._viewSingleUrl+`/${id}`)
  }
  updateJob(id: string | null, data: {
      jobid: string; jobtitle: string; jobposteddate: string; role: string; responsibility: string; //localhost:3000/api/admin/update";
      companyname: string; experience: string; salaryrange: string; noofpositions: string; location: string; skills: string; qualification: string; degree: string; companyinfo: string; employmenttype: string; industrytype: string; searchkeyword: string; jobdescription: string;
    }) {alert("from service"+`${data}`)
    return this.http.put(`${this._updatejobUrl}/`+id, data)
      // .subscribe(res => {
      //     let id = res['_id'];
      //     this.router.navigate(['/book-details', id]);
      //   }, (err) => {
      //     console.log(err);
      //   }
      // );
}



  // updateJob(id: string | null,admin:{}){
  //   return this.http.put(this._updatejobUrl+`/${id}`,admin)
  // }
  deleteJob(id: string | null){
    return this.http.delete(this._deletejobUrl+`/${id}`)
  }

  // updateJob(id: string | null, data: any): Observable<any> {
  //   let url = `http://localhost:3000/api/admin/update/${id}`;
  //   alert(url);
  //   return this.http.put(url, data, { headers: this.headers }).pipe(
  //     catchError(this.errorMgmt)
  //   )
  // }
  //   // Delete product
  //   deleteJob(id: any): Observable<any> {
  //     let url = `http://localhost:3000/api/admin/delete/${id}`;
  //     return this.http.delete(url, { headers: this.headers }).pipe(      
  //       catchError(this.errorMgmt)
  //     ) 
  //   }
  //    // Error handling 
  // errorMgmt(error: HttpErrorResponse) {
  //   let errorMessage = '';
  //   if (error.error instanceof ErrorEvent) {
  //     // Get client-side error
  //     errorMessage = error.error.message;
  //   } else {
  //     // Get server-side error
  //     errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
  //   }
  //   console.log(errorMessage);
  //   return throwError(errorMessage);
  // }
}
