import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-admin-addjob',
  templateUrl: './admin-addjob.component.html',
  styleUrls: ['./admin-addjob.component.css']
})
export class AdminAddjobComponent implements OnInit {
addJobDetails={
  jobid:"",
  jobtitle:"",
  jobposteddate:"",
  role:"",
  responsibility:"",
  companyname:"",
  experience:"",
  salaryrange:"",
  noofpositions:"",
  location:"",
  skills:"",
  qualification:"",
  degree:"",
  companyinfo:"",
  employmenttype:"",
  industrytype:"",
  searchkeyword:"",
  jobdescription:""
}
  
  constructor(private _auth:AuthService,private router:Router) { }
addJob(){
  this._auth.addJob(this.addJobDetails)
  .subscribe(
  res=>
    //console.log(res),
    this.router.navigate(['/joblist']),
  err=>console.log(err))
}
  ngOnInit(): void {
  }

}
