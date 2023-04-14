import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomModalComponent } from './components/custom-modal/custom-modal.component';

@NgModule({
  imports: [CommonModule],
  declarations: [CustomModalComponent],
  exports: [CustomModalComponent],
})
export class SharedModule {
  constructor() {
    console.log('init shared module');
  }
}
