import { Component, OnInit } from '@angular/core';
import { MessageService } from './message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string = 'quiz';
  hideOnQuizScreen: boolean = false;
  constructor(private messageService: MessageService){}
  ngOnInit() {
    this.messageService.getMessage().subscribe((message) => {
      if(message == 'true') {
        this.hideOnQuizScreen = true;
      }

    });
  }
}
