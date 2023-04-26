import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { TeamsModule } from './modules/teams/teams.module';
import { SharedModule } from './shared/shared.module';
import { PlayersModule } from './modules/players/players.module';
import { HomeModule } from './modules/home/home.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CoreModule,
    AppRoutingModule,
    TeamsModule,
    PlayersModule,
    HomeModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
