import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-trabajo-4',
  standalone: true,
  imports: [ReactiveFormsModule], 
  templateUrl: './trabajo-4.component.html',
  styleUrl: './trabajo-4.component.css'
})
export class Trabajo4Component {
  profileForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.profileForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      cedula: ['', Validators.required],
      opinion: ['', Validators.required],
      gender: ['', Validators.required],
      agree: [false, Validators.requiredTrue],
    });
  }

  onSubmit(): void {
    if (this.profileForm.valid) {
      console.log(this.profileForm.value);
    } else {
      console.log('FORMULARIO NO VALIDO');
    }
  }
}

