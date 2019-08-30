import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private behaviorSubject = new BehaviorSubject<string>('Default Message');
  constructor() { }

  sendMessage(message:string) {
    this.behaviorSubject.next(message);
  }
  getMessage(): Observable<string> {
     return this.behaviorSubject.asObservable();
  }
  setPractice(message: string){
    this.behaviorSubject.next(message);
  }
  getPractice(): Observable<string> {
    return this.behaviorSubject.asObservable();
 }
}
