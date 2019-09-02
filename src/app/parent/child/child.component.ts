import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class ChildComponent  {
  @Input() data: any;
  userdetail: Array<any> = [];
  user: any = {
    firstname: "",
    lastname: "",
    age: ""
  };
  /* Type Check Here */
  addUserDetails: boolean = true;
  updateUserDetails: boolean = false;
  showUserDetail: boolean = true;

  addUser(formdata: NgForm) {
    if (formdata !== null || formdata !== undefined) {
      this.showUserDetail = false;
    }
    this.userdetail.push(formdata.value);
    formdata.reset();
  }
  editUser(data:any) {
    this.user = data;
    this.addUserDetails = false;
    this.updateUserDetails = true;
  }
  deleteUser(i:any) {
    this.userdetail.splice(i, 1);
    if (this.userdetail.length == 0) {
      this.showUserDetail = true;

    }
  }
  updateUser(data:any) {
    this.updateUserDetails = false;
    this.addUserDetails = true;
    this.user = {};

  }


}
