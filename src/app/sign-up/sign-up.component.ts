import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {
  constructor(private router: Router) {}

  signUp() {
    // Handle the sign-up logic here
    // You can make an HTTP request to your server or perform any necessary actions.
    
    // After successful sign-up, navigate to the dashboard or another page as needed.
    this.router.navigate(['/feedpage']);  
  }
}