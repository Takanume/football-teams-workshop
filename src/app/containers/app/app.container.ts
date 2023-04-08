import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    APP
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.container.scss'],
})
export class AppContainer {
  title = 'football-teams-workshop';
}
