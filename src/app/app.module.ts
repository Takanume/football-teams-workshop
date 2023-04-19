import { isDevMode, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { TeamsModule } from './modules/teams/teams.module';
import { SharedModule } from './shared/shared.module';
import { PlayersModule } from './modules/players/players.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    TeamsModule,
    PlayersModule,
    SharedModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: isDevMode() }),
    //
    // Store
    //
    StoreModule.forRoot({}),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
