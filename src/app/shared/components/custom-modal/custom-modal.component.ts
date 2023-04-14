import { Component } from '@angular/core';

@Component({
  selector: 'app-custom-modal',
  template: `
    <!-- modal.component.html -->
    <div class="modal d-block" tabindex="-1" role="dialog">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <!-- Modal header -->
          <ng-content select="[header]"></ng-content>

          <!-- Modal body -->
          <ng-content select="[body]"></ng-content>

          <!-- Modal footer -->
          <ng-content select="[footer]"></ng-content>
        </div>
      </div>
    </div>
    <div class="modal-backdrop"></div>
  `,
  styleUrls: ['custom-modal.component.scss'],
})
export class CustomModalComponent {}
