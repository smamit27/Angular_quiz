import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MessageService } from '../shared/message.service';
import {Subscription, forkJoin,Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {


  private ShareData: any;
  columns: any;
  rows: any;
  private subscription :Array<Subscription> = [] ;
  constructor(private messageService: MessageService,
    private http: HttpClient,private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.ShareData = {
      'name': 'Amit',
      'age': 10
    };
  this.messageService.getPractice()
    .subscribe((message:any) => {
    if(message == 'practiceData') {
      this.subscription.push(forkJoin(
        [this.http.get("../../assets/json/rows.json"),
        this.http.get("../../assets/json/columns.json")]).subscribe((data)=>{
        console.log(data);
        this.columns = data[1]['columns'];
        this.rows = data[0]['rows'];  
      })
      );
    }
  });
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
