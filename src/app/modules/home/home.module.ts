import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeContainer } from './containers/home.container';
import { HomeSandbox } from './home.sandbox';

@NgModule({
  imports: [CommonModule],
  declarations: [HomeContainer],
  providers: [HomeSandbox],
})
export class HomeModule {
  constructor() {
    console.log('init home module');
  }
}
