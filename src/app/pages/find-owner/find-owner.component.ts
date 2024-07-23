import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-find-owner',
  templateUrl: './find-owner.component.html',
  styleUrls: ['./find-owner.component.css'],
})
export class FindOwnerComponent {
  findOwnerForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.findOwnerForm = this.fb.group({
      lastName: ['', [Validators.required]],
    });
  }

  onSubmit() {
    if (this.findOwnerForm.valid) {
      console.log('Form Value:', this.findOwnerForm.value);
    }
  }
}
