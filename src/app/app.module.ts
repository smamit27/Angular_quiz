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
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './parent/child/child.component';
import { CarComponent } from './car/car.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { RegistertableComponent } from './registertable/registertable.component';
import { SearchPipe } from './search.pipe';


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
    PhoneLoginComponent,
    ParentComponent,
    ChildComponent,
    CarComponent,
    RegistertableComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AngularFontAwesomeModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule
    
  ],
  providers: [AuthGuard,FakeService,MessageService,httpIntercepterProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
