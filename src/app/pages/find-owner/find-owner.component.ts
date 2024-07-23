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

  getErrorMsg(field: any): string {
    if (field.errors.required) {
      return 'Last name is required';
    }
    return '';
  }
}
