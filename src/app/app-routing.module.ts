import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WelcomeComponent} from './welcome/welcome.component';
import {QuizComponent} from './quiz/quiz.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ConfirmpasswordComponent } from './confirmpassword/confirmpassword.component';
import { AuthGuard } from './auth-guard.service';



const routes: Routes = [
  {path: 'welcome',canActivate:[AuthGuard],component: WelcomeComponent},
  {path:'quiz',canActivate:[AuthGuard], component: QuizComponent},
  {path: 'signup',component: SignupComponent},
  { path: 'login', component: LoginComponent},
  {path: 'resetPassword',component: ResetPasswordComponent},
  {path: 'confirmPassword',canActivate:[AuthGuard],component: ConfirmpasswordComponent},
  {path: '**', component: SignupComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
