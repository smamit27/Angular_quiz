import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  private ShareData: any;
  constructor() { }

  ngOnInit() {
    this.ShareData = {
      'name': 'Amit',
      'age': 10
    }
  }

  change() {
    this.ShareData.name = "Amitji Singh";
    this.ShareData.age = 1000;
  }
  changeDetection() {
    this.ShareData = {
      'name': 'Swetaji Singh',
      'age': 3000
    }
  }
}
