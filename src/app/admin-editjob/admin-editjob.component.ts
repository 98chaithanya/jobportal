import { Component, OnInit } from '@angular/core';
import { JobsService } from '../jobs.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-editjob',
  templateUrl: './admin-editjob.component.html',
  styleUrls: ['./admin-editjob.component.css']
})
export class AdminEditjobComponent implements OnInit {
  getjobs={
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
  jobs=<any>[];
  router: any;

  constructor(private _jobs:JobsService , private actRoute: ActivatedRoute) { }

  ngOnInit() {
    let id = this.actRoute.snapshot.paramMap.get('id');
    this._jobs.viewSingleJobs(id)
    .subscribe(
       res => this.jobs=res,
      //res =>{console.log(res);this.jobs=res},
      err => console.log(err)
    )
  }

  updateJob(){
     let id = this.actRoute.snapshot.paramMap.get('id');
     alert(this.jobs)
      this._jobs.updateJob(id,this.jobs)
      .subscribe(
      res=>{
        //console.log(res); 
        this.router.navigate(['/joblist']);
      },
      err=>console.log(err+this.jobs))
    }
}
