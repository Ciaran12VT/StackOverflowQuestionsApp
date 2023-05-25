import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StackOverflowComponent } from './stack-overflow.component';

const routes: Routes = [{ path: '', component: StackOverflowComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StackOverflowRoutingModule { }
