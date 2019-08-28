import { Component, OnInit, Input,ChangeDetectionStrategy } from '@angular/core';
import { database } from 'firebase';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class ChildComponent implements OnInit {
@Input() data:any;
  constructor() { }

  ngOnInit() {
  }


}
