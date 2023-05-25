import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';
import { QuestionApiResponse } from './interfaces/stackoverflow-response';

@Injectable({
  providedIn: 'root'
})
export class StackoverflowService {

  constructor(private http: HttpClient) { }

  getQuestions(): Observable<QuestionApiResponse> {
    return this.http.get<QuestionApiResponse>(environment.apiUrl);
  }
  
}
