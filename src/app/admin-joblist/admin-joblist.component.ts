import { Component, OnInit } from '@angular/core';
import { JobsService } from '../jobs.service'

@Component({
  selector: 'app-admin-joblist',
  templateUrl: './admin-joblist.component.html',
  styleUrls: ['./admin-joblist.component.css']
})
export class AdminJoblistComponent implements OnInit {
  
  title:string = "Jobs list"
  jobs = <any>[];
  constructor(private _jobs:JobsService) { }

  ngOnInit() {
    this._jobs.viewJobs()
    .subscribe(
      res => this.jobs=res,
      err => console.log(err)
    )
  }
  
  
  removeJob(jobs: { _id: string | null; },index: any) {
    if(window.confirm(`${index}+Are you sure?`)) {
        this._jobs.deleteJob(jobs._id)
        .subscribe((data) => {
          alert("deleted")
          this.jobs.splice(index, 1);
  })}}
}
