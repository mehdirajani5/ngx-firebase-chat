import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FirebaseService } from './../../firebase.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  employeeForm!: FormGroup;
  constructor(
    private firebaseService: FirebaseService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.employeeFormInitialize();
    this.getAllEmployees();
  }

  employeeFormInitialize() {
    this.employeeForm = this.fb.group({
      name: new FormControl(),
      email: new FormControl(),
      number: new FormControl(),
    })
  }

  createEmployee() {
    // const payload = this.employeeForm.value
    // console.log(this.employeeForm.value);
    // this.firebaseService.
  }

  getAllEmployees() {
    this.firebaseService.getAllEmployees().subscribe((res: any) => {
      console.log(res)
    })
  }

}
