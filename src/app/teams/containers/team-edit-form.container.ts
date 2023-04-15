import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TeamsSandbox } from '../teams.sandbox';
import { Observable, Subject, takeUntil, tap } from 'rxjs';
import { Country } from '../../shared/types/country';
import { Team } from '../shared/types/team';
import { Router } from '@angular/router';

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
            *ngIf="name?.hasError('required') && name?.touched">
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
            <ng-container *ngIf="countries$ | async as countries">
              <option value="">Select Country</option>
              <option *ngFor="let country of countries" [value]="country.id">
                {{ country.name }}
              </option>
            </ng-container>
          </select>
          <div
            class="invalid-feedback"
            *ngIf="country?.hasError('required') && country?.touched">
            Country is required
          </div>
        </div>
        <hr class="my-4" />
        <button class="w-100 btn btn-primary btn-lg" type="submit">Save</button>
      </div>
    </form>
  `,
  styles: [
    `
      .invalid-feedback {
        display: block;
        width: 100%;
        margin-top: 0.25rem;
        font-size: 0.875em;
        color: #dc3545;
      }
    `,
  ],
})
export class TeamEditFormContainer implements OnDestroy {
  // TODO: EXPLAIN THIS AND ADD OTHER VARIATION
  private events$ = new Subject();

  teamForm = this.fb.group({
    name: ['', Validators.required],
    color: ['', Validators.required],
    country: ['', Validators.required],
  });
  constructor(
    private sb: TeamsSandbox,
    private fb: FormBuilder,
    private router: Router
  ) {}

  get name() {
    return this.teamForm.get('name');
  }

  get color() {
    return this.teamForm.get('color');
  }

  get country() {
    return this.teamForm.get('country');
  }

  get countries$(): Observable<Country[]> {
    return this.sb.fetchCountries();
  }

  onSubmit() {
    this.sb
      .addTeam(this.teamForm.value as Team)
      .pipe(
        tap(team => this.router.navigate(['/teams', team.id])),
        takeUntil(this.events$)
      )
      .subscribe();
  }

  ngOnDestroy() {
    this.events$.next(null);
    this.events$.complete();
  }
}
