import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {QuizComponent} from './quiz/quiz.component';
import {WelcomeComponent} from './welcome/welcome.component';
import { from } from 'rxjs';
import { AuthComponent } from './auth/auth.component';


const routes: Routes = [
  {path: 'welcome',component: WelcomeComponent},
  {path:'quiz', component: QuizComponent},
  {path: '**', component: AuthComponent},
  {path: 'auth',component: AuthComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
