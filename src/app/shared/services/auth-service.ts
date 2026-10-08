import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  public isAuthenticated = false

  login() {
    this.isAuthenticated = true;
  }
}
