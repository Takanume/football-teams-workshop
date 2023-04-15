import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomModalComponent } from './components/custom-modal/custom-modal.component';
import { CountriesService } from './services/countries.service';

@NgModule({
  imports: [CommonModule],
  declarations: [CustomModalComponent],
  exports: [CustomModalComponent],
  providers: [CountriesService],
})
export class SharedModule {
  constructor() {
    console.log('init shared module');
  }
}
