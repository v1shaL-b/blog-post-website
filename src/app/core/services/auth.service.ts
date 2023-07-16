import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated = false;
  private isAdminUser = false;

  constructor() {}

  register(user: any): void {
    // Implement user registration logic here
  }

  login(email: string, passing:string): boolean {
    // Implement user login logic here
    // You can check credentials against a database or an API
    // Set this.isAuthenticated to true if login is successful
    // Set this.isAdminUser to true if the user is an admin
    return this.isAuthenticated;
  }

  logout(): void {
    // Implement user logout logic here
    // Set this.isAuthenticated to false
    // Set this.isAdminUser to false
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }

  isAdmin(): boolean {
    return this.isAdminUser;
  }

  isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }
}
