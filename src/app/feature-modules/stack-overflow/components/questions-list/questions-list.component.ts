import { Component, OnInit } from '@angular/core';
import { StackoverflowService } from '../../services/stackoverflow.service';
import { QuestionApiResponse, QuestionItem } from '../../services/interfaces/stackoverflow-response';

@Component({
  selector: 'app-questions-list',
  templateUrl: './questions-list.component.html',
  styleUrls: ['./questions-list.component.scss']
})
export class QuestionsListComponent implements OnInit {
  questions: QuestionItem[] = [];

  constructor(private soService: StackoverflowService) { }

  ngOnInit(): void {
    this.soService.getQuestions().subscribe((response: QuestionApiResponse) => {
      // Sort items by 'score' field from smallest to largest
      this.questions = response.items;
    });
  }
}
