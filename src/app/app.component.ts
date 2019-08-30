import { Component, OnInit } from '@angular/core';
import { MessageService } from './shared/message.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string = 'quiz';
  hideOnQuizScreen: boolean = false;
  apple = of(2,3,5);
  constructor(private messageService: MessageService,private afAuth: AngularFireAuth,private router: Router){}
  ngOnInit() {
    this.afAuth.authState.subscribe(user =>{
      console.log(user);
      if(user.email !== null && user.email !== undefined){
        debugger;
        this.router.navigate(['welcome']);

      }
    });
     this.messageService.getMessage().subscribe((message) => {
      if(message == 'true') {
        this.hideOnQuizScreen = true;
      }

    });
  }
}
