import { isDevMode, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { throwIfAlreadyLoaded } from './module-import-guard';
import { NavComponent } from './components/nav.component';
import { HttpClientModule } from '@angular/common/http';
import { PageNotFoundComponent } from './components/page-not-found.component';
import { RouterLink } from '@angular/router';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { DefaultDataServiceConfig, EntityDataModule } from '@ngrx/data';
import { entityConfig } from './entity-metadata';
import { reducers } from './statemanagement/reducers';

const defaultDataServiceConfig: DefaultDataServiceConfig = {
  root: 'http://localhost:3000',
  timeout: 3000,
};
@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterLink,
    //
    // Store
    //
    StoreModule.forRoot(reducers, {}),
    // Instrumentation must be imported after importing StoreModule (config is optional)
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: !isDevMode(), // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
      trace: false, //  If set to true, will include stack trace for every dispatched action, so you can see it in trace tab jumping directly to that part of code
      traceLimit: 75, // maximum stack trace frames to be stored (in case trace option was provided as true)
    }),
    EffectsModule.forRoot([]),
    EntityDataModule.forRoot(entityConfig),
  ],
  declarations: [NavComponent, PageNotFoundComponent],
  exports: [NavComponent],
  providers: [
    { provide: DefaultDataServiceConfig, useValue: defaultDataServiceConfig },
  ],
})
export class CoreModule {
  // TODO: Explain this later
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    console.log('init core module');
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
