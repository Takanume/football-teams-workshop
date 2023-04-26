import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  template: ` <header class="p-3 text-bg-dark">
    <div class="container">
      <div
        class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <ul
          class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li>
            <a routerLink="/" class="nav-link px-2 text-secondary">Home</a>
          </li>
          <li>
            <a routerLink="teams" class="nav-link px-2 text-white">Teams</a>
          </li>
          <li>
            <a routerLink="players" class="nav-link px-2 text-white">Players</a>
          </li>
          <li>
            <a routerLink="favPlayers" class="nav-link px-2 text-white"
              >My players</a
            >
          </li>
        </ul>
      </div>
    </div>
  </header>`,
})
export class NavComponent {}
