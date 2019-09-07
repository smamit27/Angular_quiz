import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registertable',
  templateUrl: './registertable.component.html',
  styleUrls: ['./registertable.component.css']
})
export class RegistertableComponent implements OnInit {
  registrationData: any;

  constructor() { }

  ngOnInit() {
    this.registrationData = JSON.parse(localStorage.getItem('Register'));
    console.log(this.registrationData);
  }

}
