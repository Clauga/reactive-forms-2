import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  userForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      username: [''],
      credentials: this.fb.group({
        email: [''],
        password: [''],
      }),
      address: this.fb.group({
        city: [''],
        postalCode: [''],
        street: [''],
      }),
    });
  }

  onSubmit() {
    console.log(this.userForm.value);
  }
}
