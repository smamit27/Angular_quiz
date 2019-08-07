import { Component, OnInit } from '@angular/core';
import { MessageService } from './shared/message.service';
import { AngularFireAuth } from '@angular/fire/auth';
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
  constructor(private messageService: MessageService,private afAuth: AngularFireAuth){}
  ngOnInit() {
    console.log(this.apple.subscribe());

    this.messageService.getMessage().subscribe((message) => {
      if(message == 'true') {
        this.hideOnQuizScreen = true;
      }

    });
  }
}
