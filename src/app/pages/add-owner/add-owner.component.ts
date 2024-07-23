import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-owner',
  templateUrl: './add-owner.component.html',
  styleUrls: ['./add-owner.component.css'],
})
export class AddOwnerComponent {
  ownerForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.ownerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      address: [''],
      city: [''],
      telephone: [''],
    });
  }

  onSubmit() {
    if (this.ownerForm.valid) {
      console.log('Form Value:', this.ownerForm.value);
    }
  }
}
