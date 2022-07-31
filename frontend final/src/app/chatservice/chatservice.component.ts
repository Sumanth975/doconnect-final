import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-chatservice',
  templateUrl: './chatservice.component.html',
  styleUrls: ['./chatservice.component.css']
})
export class ChatserviceComponent implements OnInit {
  messages:any
  submitted=false
  fg: FormGroup;

  constructor(
    private fb:FormBuilder,
    private api:ApiService,
    private _router:Router,
    private toast:ToastrService
    ) {
    this.createForm();
   }

  ngOnInit(): void {
    this.api.getMessages().subscribe({
      next:resp=>{
        this.messages=resp
        console.log(this.messages)
      },
      error:err=>{

      }
    })
  }

  createForm(){
    this.fg=this.fb.group({
      
      'message':['',Validators.required],
      
      
    })
  }

  send(values:any){
    this.submitted=true
    if(this.fg.valid){
      console.log(values)
      
      values.fromUser=sessionStorage.getItem('userid')
      console.log(values)
      this.api.addMessage(values).subscribe({
        next:resp=>{
          this.toast.success("message submitted")
          this._router.navigate(['/home'])
          
        },
        error:err=>{
          this.toast.error("message shouldn't be empty")
        }
      })
  }
    
    

  }
  }

