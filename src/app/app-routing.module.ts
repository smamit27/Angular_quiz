import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WelcomeComponent} from './welcome/welcome.component';
import {QuizComponent} from './quiz/quiz.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ConfirmpasswordComponent } from './confirmpassword/confirmpassword.component';
import { AuthGuard } from './shared/auth-guard.service';
import { PhoneLoginComponent } from './phone-login/phone-login.component';



const routes: Routes = [
  {path: 'welcome',canActivate:[AuthGuard],component: WelcomeComponent},
  {path:'quiz',canActivate:[AuthGuard],component: QuizComponent},//canActivate:[AuthGuard], 
  {path:'phone', component: PhoneLoginComponent},
  {path: 'signup',component: SignupComponent},
  { path: 'login', component: LoginComponent},
  {path: 'resetPassword',component: ResetPasswordComponent},
  {path: 'confirmPassword',canActivate:[AuthGuard],component: ConfirmpasswordComponent},
  {path: '**', component: LoginComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
