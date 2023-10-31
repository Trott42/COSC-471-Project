import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  constructor(private router: Router) {}
  fullName: string = '';
  email: string = '';
  password: string = '';
  signUp() {
    // Handle the sign-up logic here
    // You can make an HTTP request to your server or perform any necessary actions.
    
    // After successful sign-up, navigate to the dashboard or another page as needed.
    this.router.navigate(['/dashboard']);
  }
}
