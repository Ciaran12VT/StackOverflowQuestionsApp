import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'stackoverflow', loadChildren: () => import('./feature-modules/stack-overflow/stack-overflow.module').then(m => m.StackOverflowModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
