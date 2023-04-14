import { Component } from '@angular/core';

@Component({
  selector: 'app-not-found',
  template: `
    <div class="container mt-5">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <div class="card">
            <div class="card-body">
              <h1 class="card-title text-center">404 Not Found</h1>
              <p class="card-text text-center">
                The page you are looking for does not exist.
              </p>
              <div class="text-center">
                <a routerLink="/" class="btn btn-primary">Go to Home</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class NotFoundComponent {}
