import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { QuizComponent } from './quiz/quiz.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SignupComponent } from './signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ConfirmpasswordComponent } from './confirmpassword/confirmpassword.component';
import { AuthGuard } from './auth-guard.service';
import { FakeService } from './fake.service';
import { LoaderComponent } from './loader/loader.component';
@NgModule({
  declarations: [
    AppComponent, 
    QuizComponent,
    WelcomeComponent,
    SignupComponent,
    LoginComponent,
    ResetPasswordComponent,
    ConfirmpasswordComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthGuard,FakeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
