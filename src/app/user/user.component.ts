import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { User } from './../model/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  username = new FormControl('');
  email = new FormControl('');
  password = new FormControl('');
  city = new FormControl('');
  postalCode = new FormControl('');
  street = new FormControl('');
  user!: User;

  onSubmit() {
    this.user = new User(
      this.username.value as string,
      this.email.value as string,
      this.password.value as string,
      this.city.value as string,
      this.postalCode.value as string,
      this.street.value as string
    );
    console.log(this.user);
  }
}
