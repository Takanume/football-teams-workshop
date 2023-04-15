import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-team-details-form',
  template: `
    <div class="d-flex justify-content-between">
      <h4 class="mb-3">Adding a new team</h4>
    </div>

    <form
      class="needs-validation"
      novalidate=""
      [formGroup]="teamForm"
      (ngSubmit)="onSubmit()">
      <div class="row g-3">
        <div class="col-12">
          <label for="name">Name:</label>
          <input
            type="text"
            id="name"
            formControlName="name"
            class="form-control"
            required />
          <div
            class="invalid-feedback"
            *ngIf="country?.hasError('required') && country?.touched">
            Name is required
          </div>
        </div>
        <div class="col-12">
          <label for="color">Color:</label>
          <input
            type="text"
            id="color"
            formControlName="color"
            class="form-control"
            required />
          <div
            class="invalid-feedback"
            *ngIf="color?.hasError('required') && color?.touched">
            Color is required
          </div>
        </div>
        <div class="col-12">
          <label for="country">Country:</label>
          <select
            id="country"
            formControlName="country"
            class="form-control"
            required>
            <option value="">Select Country</option>
            <option value="USA">USA</option>
            <option value="Canada">Canada</option>
            <option value="Mexico">Mexico</option>
          </select>
          <div
            class="invalid-feedback"
            *ngIf="country?.hasError('required') && country?.touched">
            Country is required
          </div>
        </div>
        <!--<div class="col-md-5">
          <label for="country" class="form-label">Country</label>
          <select class="form-select" id="country" required="">
            <option value="">Choose...</option>
            <option>United States</option>
          </select>
          <div class="invalid-feedback">Please select a valid country.</div>
        </div>

        <div class="col-md-4">
          <label for="state" class="form-label">State</label>
          <select class="form-select" id="state" required="">
            <option value="">Choose...</option>
            <option>California</option>
          </select>
          <div class="invalid-feedback">Please provide a valid state.</div>
        </div>

        <div class="col-md-3">
          <label for="zip" class="form-label">Zip</label>
          <input
            type="text"
            class="form-control"
            id="zip"
            placeholder=""
            required="" />
          <div class="invalid-feedback">Zip code required.</div>
        </div>-->
        <hr class="my-4" />
        <button class="w-100 btn btn-primary btn-lg" type="submit">Save</button>
      </div>
    </form>
  `,
})
export class TeamEditFormComponent {
  teamForm = this.fb.nonNullable.group({
    name: ['', Validators.required],
    color: ['', Validators.required],
    country: ['', Validators.required],
  });
  constructor(private fb: FormBuilder) {}

  get name() {
    return this.teamForm.get('name');
  }

  get color() {
    return this.teamForm.get('color');
  }

  get country() {
    return this.teamForm.get('country');
  }

  onSubmit() {}
}
