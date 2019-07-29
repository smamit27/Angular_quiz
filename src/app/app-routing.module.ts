import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {QuizComponent} from './quiz/quiz.component';
import {WelcomeComponent} from './welcome/welcome.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './login/login.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ConfirmpasswordComponent } from './confirmpassword/confirmpassword.component';
import { AuthGuard } from './auth-guard.service';



const routes: Routes = [
  {path: 'welcome',canActivate:[AuthGuard],component: WelcomeComponent},
  {path:'quiz',canActivate:[AuthGuard], component: QuizComponent},
  {path: 'signup',component: AuthComponent},
  { path: 'login', component: LoginComponent},
  {path: 'resetPassword',component: ResetPasswordComponent},
  {path: 'confirmPassword',component: ConfirmpasswordComponent},
  {path: '**', component: AuthComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
