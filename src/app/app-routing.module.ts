import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionsListComponent } from './feature-modules/stack-overflow/components/questions-list/questions-list.component';

//const routes: Routes = [{ path: 'stackoverflow', loadChildren: () => import('./feature-modules/stack-overflow/stack-overflow.module').then(m => m.StackOverflowModule) }];
const routes: Routes = [
  { path: '', component: QuestionsListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
