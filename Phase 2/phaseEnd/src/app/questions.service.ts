import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Questions } from './questions.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor(public http: HttpClient) { }

  checking(): Observable<Questions[]>{
    return this.http.get<Questions[]>("/assets/ques.json");
  }
}
