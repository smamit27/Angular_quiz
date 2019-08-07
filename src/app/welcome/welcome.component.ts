import { Component, OnInit } from '@angular/core';
import { MessageService } from '../shared/message.service';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private messageService: MessageService,private router: Router,private afAuth: AngularFireAuth) { }

  ngOnInit() {
  }
  getStarted() {
    this.messageService.sendMessage('true');
    this.router.navigate(['quiz']);
  }
  logout(){
    this.afAuth.auth.signOut();
    this.router.navigate(['login']);


  }

}
