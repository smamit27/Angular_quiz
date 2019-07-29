import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FakeService } from '../fake.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  title = 'quiz';
  results: number
  quizForm: FormGroup;
  correctAnswer = ['A', 'B', 'B', 'A', 'A'];
  constructor(private fakeService: FakeService,private router: Router){}
  ngOnInit() {
    this.quizForm = new FormGroup({
      'q1': new FormControl(null),
      'q2': new FormControl(null),
      'q3': new FormControl(null),
      'q4': new FormControl(null),
      'q5': new FormControl(null)
    })
  };
  questions = [
    {
      "id": '1',
      "description": 'For What is a JSONStringer used for?',
      "selectedName": 'q1',
      "answers": [
        {
          "id": 'A',
          "text": "  To quickly create number to JSON text."
        },
        {
          "id": 'B',
          "text": "To converts JSON to Java strings"
        },
        {
          "id": 'C',
          "text": "To create JSON ordered pairs."
        },
        {
          "id": 'D',
          "text": "To quickly create JSON text"
        }]
    },
    {
      "id": '2',
      "description": 'For What is a JSONStringer used for?',
      "selectedName": 'q2',
      "answers": [
        {
          "id": 'A',
          "text": "  To quickly create number to JSON text."
        },
        {
          "id": 'B',
          "text": "To converts JSON to Java strings"
        },
        {
          "id": 'C',
          "text": "To create JSON ordered pairs."
        },
        {
          "id": 'D',
          "text": "To quickly create JSON text"
        }]
    }
  ]




  quizSubmit() {
    console.log(this.quizForm.value.q1);
    let score = 0;
    const quizUserData = [this.quizForm.value.q1, this.quizForm.value.q2, this.quizForm.value.q3, this.quizForm.value.q4, this.quizForm.value.q5]
    quizUserData.forEach((answer, index) => {
      if (answer == this.correctAnswer[index]) {
        score += 20;
      }

    })
    window.scroll(0, 0);
    let output = 0;
    const timer = setInterval(() => {
      this.results = output;
      if (output === score) {
        clearInterval(timer);
      }
      else {
        output++;
      }
    }, 20)
    this.fakeService.isLogout();
    this.router.navigate(['login']);
  }


}
