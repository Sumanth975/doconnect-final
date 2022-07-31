import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
BASEURL:string="http://localhost:8081/api/";
BASEURL1:string="http://localhost:8082/api/";
BASEURL2:string="http://localhost:8083/api/";

  constructor(private http:HttpClient) { }

  validate(data:any){
    return this.http.post<any>(this.BASEURL+"users/validate",data);
  }

  validateadmin(data:any){
    return this.http.post<any>(this.BASEURL+"admin/validate",data);
  }
  submitQuestion(data:any){
    return this.http.post<any>(this.BASEURL1+"questions",data)
  }
  approveQuestion(data:any){
    return this.http.get<any>(this.BASEURL1+"questions/approvequestion/"+data)
  }
  uploadImage(uploadImageData){
    return this.http.post<any>(this.BASEURL1+"images",uploadImageData)
  }
  //categories
  getImage(imageName){
    return this.http.get<any>(this.BASEURL1+"images/"+imageName)
  }
  deleteQuestion(data:any){
    return this.http.delete<any>(this.BASEURL1+"questions/deletequestion/"+data)
  }
  register(data:any){
    return this.http.post<any>(this.BASEURL+"users",data);
  }
  registeradmin(data:any){
    return this.http.post<any>(this.BASEURL+"admin",data)
  }
  questions(){
    return this.http.get<any[]>(this.BASEURL1+"questions")
  }

  getUserDetails(id:any){
    return this.http.get<any>(this.BASEURL+"users/"+id)
  }
  saveproduct(data:any){
    new HttpHeaders().set("Accept", "application/json");
    return this.http.post<any>(this.BASEURL+"products",data)
  }
  findQuestionById(id:any){
    return this.http.get<any>(this.BASEURL1+"questions/"+id)
  }
  addAnswer(id:any,data:any){
    return this.http.post<any>(this.BASEURL1+"questions/postanswer/"+id,data)
  }
  approveAnswer(answerId:any){
    console.log("hii")
    return this.http.get<any>(this.BASEURL1+"answers/approveanswer/"+answerId)
  }
  deleteAnswer(answerId:any){
    return this.http.delete<any>(this.BASEURL1+"answers/deleteanswer/"+answerId)
  }
  addMessage(message:any){
    return this.http.post<any>(this.BASEURL2+"chat/sendMessage/",message)
  }
  getMessages(){
    return this.http.get<any>(this.BASEURL2+"chat/getMessage")
  }
}
