import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


import { StackOverflowRoutingModule } from './stack-overflow-routing.module';
import { StackOverflowComponent } from './stack-overflow.component';


@NgModule({
  declarations: [
    StackOverflowComponent
  ],
  imports: [
    CommonModule,
    StackOverflowRoutingModule,
    HttpClientModule
  ]
})
export class StackOverflowModule { }
