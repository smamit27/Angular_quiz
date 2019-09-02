import { Component, OnInit } from '@angular/core';
import { MessageService } from '../shared/message.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router, ActivatedRoute } from '@angular/router';
import { FakeService } from '../shared/fake.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  title: string = 'quiz';
  hideOnQuizScreen: boolean = false;
  constructor(private messageService: MessageService,private activatedRoute: ActivatedRoute,
    private afAuth: AngularFireAuth,private router: Router,private fakeService: FakeService){}
  ngOnInit() {
    this.afAuth.authState.subscribe(user =>{
      console.log(user);
      if(user !== null){
        if(user.email !== null && user.email !== undefined){
          this.router.navigate(['welcome']);

        } 
      }
      else {
        this.router.navigate(['login']);
      }
    });
    /* Response Handling from */
     this.messageService.getMessage().subscribe((message) => {
      if(message == 'true' || message == "practiceData") {
        this.hideOnQuizScreen = true;
      }

    });
  }

}
