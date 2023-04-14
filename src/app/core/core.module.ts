import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { throwIfAlreadyLoaded } from './module-import-guard';
import { NavComponent } from './components/nav.component';
import { HttpClientModule } from '@angular/common/http';
import { NotFoundComponent } from './components/not-found.component';
import { RouterLink } from '@angular/router';

@NgModule({
  imports: [CommonModule, HttpClientModule, RouterLink],
  declarations: [NavComponent, NotFoundComponent],
  exports: [NavComponent],
  providers: [],
})
export class CoreModule {
  // TODO: Explain this later
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    console.log('init core module');
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
