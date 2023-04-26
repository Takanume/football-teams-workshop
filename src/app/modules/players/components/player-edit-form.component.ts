import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from '@angular/core';
import { Player } from '../shared/types/player';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Team } from '../../teams/shared/types/team';

@Component({
  selector: 'app-players-edit-form',
  template: `
    <form [formGroup]="playerForm" (submit)="onSubmit()">
      <div class="row g-3">
        <div class="col-12">
          <label class="form-label" for="name">Name</label>
          <input
            type="text"
            class="form-control"
            id="name"
            formControlName="name" />
        </div>
        <div class="col-12">
          <label class="form-label" for="height">Height</label>
          <input
            type="number"
            class="form-control"
            id="height"
            formControlName="height" />
        </div>
        <div class="col-12">
          <label class="form-label" for="age">Age</label>
          <input
            type="number"
            class="form-control"
            id="age"
            formControlName="age" />
        </div>
        <div class="col-12">
          <label class="form-label" for="foot">Foot</label>
          <select class="form-control" id="foot" formControlName="foot">
            <option value="both">Both</option>
            <option value="right">Right</option>
            <option value="left">Left</option>
          </select>
        </div>
        <div class="col-12">
          <label class="form-label" for="foot">Team</label>
          <select class="form-control" id="team" formControlName="team">
            <option *ngFor="let team of teams" [value]="team.id">
              {{ team.name }}
            </option>
          </select>
        </div>
        <div class="col-12">
          <label class="form-label" for="pos">Position</label>
          <input
            type="text"
            class="form-control"
            id="pos"
            formControlName="pos" />
        </div>
      </div>
      <hr class="my-4" />
      <div class="d-flex justify-content-between">
        <button type="button" class="btn btn-secondary">back</button>
        <button type="submit" class="btn btn-primary ">
          {{ editMode ? 'Edit' : 'Save' }}
        </button>
      </div>
    </form>
  `,
  styles: [],
})
export class PlayerEditFormComponent implements OnChanges {
  @Input() player: Player | undefined | null;
  @Input() teams: Team[] | undefined;
  @Output() save = new EventEmitter<Player>();

  playerForm: FormGroup;
  editMode = false;

  constructor(private fb: FormBuilder) {
    this.playerForm = this.fb.group({
      name: ['', Validators.required],
      height: [null, Validators.required],
      age: [null, Validators.required],
      foot: [null, Validators.required],
      team: [null, Validators.required],
      pos: ['', Validators.required],
    });
  }

  ngOnChanges(): void {
    if (this.player) {
      this.editMode = true;
      const { name, height, age, foot, team, pos } = this.player;
      this.playerForm.patchValue({ name, height, age, foot, team, pos });
    }
  }

  onSubmit(): void {
    this.save.emit({
      ...this.player,
      ...this.playerForm.value,
      team: +this.playerForm.value.team,
    });
  }
}
