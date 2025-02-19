import { NgIf } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-create-user-form',
  standalone: true,
  templateUrl: './create-user-form.component.html',
  styleUrl: './create-user-form.component.scss',
  imports: [ReactiveFormsModule, MatInputModule, MatFormFieldModule, MatIconModule, MatButtonModule]
})

export class CreateUserFormComponent {
  @Output()
  createUser = new EventEmitter();

  public form = new FormGroup({
  name: new FormControl('', [Validators.required, Validators.minLength(2)]),
  email: new FormControl('', [Validators.required, Validators.email]),
  website: new FormControl('', [
    Validators.required, 
    Validators.minLength(3)
  ]),
  company: new FormGroup({
    name: new FormControl('', [
    Validators.required, 
    Validators.minLength(2),
    ]),
  }),
})

  public submitForm(): void {
    this.createUser.emit(this.form.value);
    this.form.reset();
}
}