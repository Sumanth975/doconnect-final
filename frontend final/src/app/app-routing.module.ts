import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ChatserviceComponent } from './chatservice/chatservice.component';
import { QuestionComponent } from './question/question.component';
import { RegisterComponent } from './register/register.component';
import { AnswerComponent } from './answer/answer.component';
import { QuestionsnotapprovedComponent } from './questionsnotapproved/questionsnotapproved.component';
import { AnswersnotapprovedComponent } from './answersnotapproved/answersnotapproved.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full' },
  {path:'home', component:HomeComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'question',component:QuestionComponent},
  {path:'answer',component:AnswerComponent},
  {path:'questionsnotapproved',component:QuestionsnotapprovedComponent},
  {path:'answersnotapproved',component:AnswersnotapprovedComponent},
  {path:'chat',component:ChatserviceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
