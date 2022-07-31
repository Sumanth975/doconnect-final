import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-questionsnotapproved',
  templateUrl: './questionsnotapproved.component.html',
  styleUrls: ['./questionsnotapproved.component.css']
})
export class QuestionsnotapprovedComponent implements OnInit {
  questions:any
  id:any
  
  constructor(private api:ApiService,private toast:ToastrService,
    private route:ActivatedRoute,
    private _router:Router) { }
  
  ngOnInit(): void {
    this.api.questions().subscribe({
      next:resp=>{
        this.questions=resp
        
      },
      error:err=>this.toast.error("no questions yet")
    })

   
  }
    submit(data:any){
      this.api.approveQuestion(data).subscribe({
        next:resp=>{
          this.toast.success("question approved")
          this._router.navigate(['home'])
        },
        error:err=> { 
        },
      })  
    }
    deleteQuestion(data:any){
      this.api.deleteQuestion(data).subscribe({
        next:resp=>{
          this.toast.success("question deleted")
          this._router.navigate(['home'])
        },
        error:err=>{

        }
      })
    }

  }


