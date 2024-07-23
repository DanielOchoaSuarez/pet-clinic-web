import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-find-owner',
  templateUrl: './find-owner.component.html',
  styleUrls: ['./find-owner.component.css'],
})
export class FindOwnerComponent implements OnInit {
  findOwnerForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.findOwnerForm = this.fb.group({
      lastName: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.findOwnerForm.valid) {
      console.log('Form Submitted!', this.findOwnerForm.value);
    } else {
      console.log('Form not valid');
    }
  }

  getErrorMsg(fieldName: string): string {
    const field = this.findOwnerForm.get(fieldName);

    if (field) {
      if (field.hasError('required')) {
        return 'This field is required';
      }
    }

    return '';
  }
}
