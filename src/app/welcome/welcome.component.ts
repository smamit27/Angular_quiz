import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private messageService: MessageService,private router: Router) { }

  ngOnInit() {
  }
  getStarted() {
    this.messageService.sendMessage('true');
    this.router.navigate(['quiz']);
  }

}
