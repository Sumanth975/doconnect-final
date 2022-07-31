import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  constructor(private api:ApiService,private toast:ToastrService,private _router:Router) { }
  selectedFile:File;
  retrivedImage:any;
  base64Data:any;
  retriveResponse:any;
  message:string;
  imageName:any;
  ngOnInit(): void {
  }
  submit(question){
    if(question!=null){
    this.api.submitQuestion(question).subscribe({
      next:resp=>{
      //console.log(question,"hii")
        this.toast.success('question added')  
        this._router.navigate(['home'])
      },
    error:err=>{
      console.log(err)
      this.toast.error('Question not added',"Question shouldn't be empty")
    }
  })
}else{
  this.toast.error("question shoundn't be empty")

}
  }
  onFileChanged(event){
    this.selectedFile=event.target.files[0];
  }
  onUpload(){
    console.log(this.selectedFile)
    const uploadImageData=new FormData();
    uploadImageData.append('imageFile',this.selectedFile,this.selectedFile.name);
    this.api.uploadImage(uploadImageData).subscribe({
      next:resp=>{
        this.toast.success("image uploaded")
      },
      error:err=>{
        this.toast.error("not uploaded")
      }
    })
  }
  getImage(){
    this.api.getImage(this.imageName).subscribe({
      next:resp=>{
        this.retriveResponse=resp;
        this.base64Data=this.retriveResponse.picByte;
        this.retrivedImage='data:image/jpeg;base64,'+this.base64Data;
      }
    })
  }

}
