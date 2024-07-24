import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Owner } from 'src/app/interfaces/owner';

@Component({
  selector: 'app-find-owner',
  templateUrl: './find-owner.component.html',
  styleUrls: ['./find-owner.component.css'],
})
export class FindOwnerComponent implements OnInit, AfterViewInit {
  findOwnerForm: FormGroup;

  pageIndex = 0;
  pageSize = 5;
  length = 0;
  ownersDataSource = new MatTableDataSource<Owner>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns: string[] = ['name', 'address', 'city', 'telephone', 'pets'];
  printTable: boolean = false;

  constructor(private fb: FormBuilder) {
    this.findOwnerForm = this.fb.group({
      lastName: ['', Validators.required],
      page: [0],
    });
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    if (this.ownersDataSource) {
      this.ownersDataSource.paginator = this.paginator;
    }
  }

  onSubmit(): void {
    if (this.findOwnerForm.valid) {
      console.log('Form Submitted!', this.findOwnerForm.value);

      this.ownersDataSource = new MatTableDataSource<Owner>([
        {
          name: 'John Doe',
          address: '123 Elm St',
          city: 'Springfield',
          telephone: '1234567890',
          pets: [{ name: 'Rex' }, { name: 'Mittens' }],
        },
        {
          name: 'Jane Smith',
          address: '456 Oak St',
          city: 'Shelbyville',
          telephone: '0987654321',
          pets: [{ name: 'Buddy' }],
        },
        {
          name: 'Alice Johnson',
          address: '789 Pine St',
          city: 'Capital City',
          telephone: '1357924680',
          pets: [{ name: 'Fluffy' }, { name: 'Spot' }, { name: 'Spike' }],
        },
        {
          name: 'Bob Brown',
          address: '101 Maple St',
          city: 'Hill Valley',
          telephone: '2468013579',
          pets: [{ name: 'Whiskers' }],
        },
        {
          name: 'Charlie White',
          address: '202 Birch St',
          city: 'South Park',
          telephone: '9876543210',
          pets: [{ name: 'Max' }, { name: 'Sassy' }],
        },
      ]);
      this.ownersDataSource.paginator = this.paginator;
      this.printTable = true;
    }
  }

  onReset(): void {
    this.findOwnerForm.reset();
    this.printTable = false;
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

  handlePageEvent(event: PageEvent) {
    console.log(event);
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.length = event.length;
  }
}
