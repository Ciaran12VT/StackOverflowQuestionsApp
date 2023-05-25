import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { StackoverflowService } from './services/stackoverflow.service';
import { QuestionsListComponent } from './components/questions-list/questions-list.component';
import { QuestionItemComponent } from './components/question-item/question-item.component';
import { StackOverflowRoutingModule } from './stack-overflow-routing.module';
import { StackOverflowComponent } from './stack-overflow.component';


@NgModule({
  declarations: [
    StackOverflowComponent,
    QuestionsListComponent,
    QuestionItemComponent
  ],
  imports: [
    CommonModule,
    StackOverflowRoutingModule,
    HttpClientModule
  ],
  exports: [
    QuestionsListComponent,
  ]
})
export class StackOverflowModule { }
