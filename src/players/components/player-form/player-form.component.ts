import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-player-form',
  template: ` <form [formGroup]="playersForm">
    <div class="card">
      <div class="flex flex-column justify-content-center card-container gap-3">
        <div class="flex align-items-center justify-content-center">
          <span class="p-float-label ">
            <input pInputText id="name" formControlName="name" />
            <label for="name">Name</label>
          </span>
        </div>
        <div class="flex align-items-center justify-content-center">
          <span class="p-float-label">
            <input pInputText id="position" formControlName="pos" />
            <label for="position">Position</label>
          </span>
        </div>
        <div class="flex align-items-center justify-content-center">
          <p-inputNumber inputId="age" formControlName="age"></p-inputNumber>
        </div>
        <div class="flex align-items-center justify-content-center">
          <p-inputNumber
            inputId="goals"
            formControlName="goals"></p-inputNumber>
        </div>
        <div class="flex align-items-center justify-content-center">
          <p-inputNumber
            inputId="assist"
            formControlName="assists"></p-inputNumber>
        </div>
        <div class="flex align-items-center justify-content-center">
          <p-inputNumber
            inputId="ratings"
            mode="decimal"
            [minFractionDigits]="0"
            [maxFractionDigits]="10">
          </p-inputNumber>
        </div>
      </div>
    </div>
  </form>`,
})
export class PlayerFormComponent {
  playersForm = this.fb.group({
    name: [''],
    pos: [''],
    age: 0,
    goals: 0,
    assists: 0,
    ratings: 0.0,
  });
  constructor(private fb: FormBuilder) {}
}
