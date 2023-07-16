import { Component } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email : any;
  password : any;

  constructor(private authService: AuthService) {}

  onSubmit(): void {
    if (this.email && this.password) {
      // Call the login method from the AuthService passing the email and password
      const loginSuccessful = this.authService.login(this.email, this.password);
      if (loginSuccessful) {
        // Redirect to the dashboard or desired page
      } else {
        // Show error message
      }
    }
  }
}
