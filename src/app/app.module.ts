import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {environment} from '../environments/environment';
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
import { AuthGuard } from './shared/auth-guard.service';
import { FakeService } from './shared/fake.service';
import { LoaderComponent } from './loader/loader.component';
import { MessageService } from './shared/message.service';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { PhoneLoginComponent } from './phone-login/phone-login.component';
import { httpIntercepterProviders } from './http-intercepter';

@NgModule({
  declarations: [
    AppComponent, 
    QuizComponent,
    WelcomeComponent,
    SignupComponent,
    LoginComponent,
    ResetPasswordComponent,
    ConfirmpasswordComponent,
    LoaderComponent,
    PhoneLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule
    
  ],
  providers: [AuthGuard,FakeService,MessageService,httpIntercepterProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
