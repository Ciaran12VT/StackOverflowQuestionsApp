import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { StackoverflowService } from './services/stackOverflow/stackoverflow.service';
import { QuestionsListComponent } from './components/questions-list/questions-list.component';
import { QuestionItemComponent } from './components/question-item/question-item.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    QuestionsListComponent,
    QuestionItemComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [StackoverflowService],
  exports: [
    HeaderComponent,
    FooterComponent,
    QuestionsListComponent,
    QuestionItemComponent
  ],
  
})
export class CoreModule { }
