import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-owner',
  templateUrl: './add-owner.component.html',
  styleUrls: ['./add-owner.component.css'],
})
export class AddOwnerComponent implements OnInit {
  addOwnerForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.addOwnerForm = this.fb.group({
      firstName: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
        ],
      ],
      lastName: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
        ],
      ],
      address: ['', [Validators.required]],
      city: ['', [Validators.required]],
      telephone: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10),
        ],
      ],
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.addOwnerForm.valid) {
      console.log('Form Submitted!', this.addOwnerForm.value);
      Swal.fire({
        title: 'Success!',
        icon: 'success',
        confirmButtonText: 'OK',
      });
    } else {
      console.log('Form not valid');
    }
  }

  getErrorMsg(fieldName: string): string {
    const field = this.addOwnerForm.get(fieldName);

    if (field) {
      if (field.hasError('required')) {
        return 'This field is required';
      } else if (field.hasError('minlength')) {
        return `This field must be at least ${field.errors?.['minlength'].requiredLength} characters long`;
      } else if (field.hasError('maxlength')) {
        return `This field cannot be more than ${field.errors?.['maxlength'].requiredLength} characters long`;
      }
    }

    return '';
  }
}
