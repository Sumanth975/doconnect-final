import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-answersnotapproved',
  templateUrl: './answersnotapproved.component.html',
  styleUrls: ['./answersnotapproved.component.css']
})
export class AnswersnotapprovedComponent implements OnInit {
  questions:any
  constructor(private api:ApiService,private toast:ToastrService,
    private route:ActivatedRoute,
    private _router:Router) { }

  ngOnInit(): void {
    this.api.questions().subscribe({
      next:resp=>{
        this.questions=resp
      },
      error:err=>{

      }
    })
  }
  approveAnswer(answerId:any){
    
    this.api.approveAnswer(answerId).subscribe({
      next:resp=>{
        this.toast.success("answer approved")
        this._router.navigate(['home'])
        
      },
      error:err=> { 
      },
    })  
  }
  deleteAnswer(answerId:any){
    this.api.deleteAnswer(answerId).subscribe({
      next:resp=>{
        console.log("hii")
        this.toast.success("answer deleted")
        this._router.navigate(['home'])
      },
      error:err=>{

      }
    })
  }

}
