import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AnswerComponent } from '../answer/answer.component';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  questions:any
  id:any
  loggined:boolean=false;
  searchText:String=""
  constructor(private api:ApiService,private toast:ToastrService,
    private route:ActivatedRoute,
    private _router:Router) { }
    answerButton:boolean=true
    submitButton:boolean=false
  ngOnInit(): void {
    this.api.questions().subscribe({
      next:resp=>{
        this.questions=resp
        console.log(this.questions)
      },
      error:err=>this.toast.error("no questions yet")
    })
    if(sessionStorage.getItem('role')=='A' || sessionStorage.getItem('role')=='U'){
      this.loggined=true;
    }
    else{
      this.loggined=false;
    }
  }
    submit(data:any){
      sessionStorage.setItem("id",data)
      this._router.navigate(['answer'])
      
    }
    onSearchTextEntered(serchValue:String){
      this.searchText=serchValue

    }
}
