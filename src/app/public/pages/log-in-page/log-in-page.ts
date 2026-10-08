import { Component, inject } from '@angular/core';
import { InputComponent } from '../../../shared/components/input/input';
import { PasswordInput } from '../../../shared/components/password-input/password-input';
import { Button } from '../../../shared/components/button/button';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../shared/services/auth-service';

@Component({
  imports: [InputComponent, PasswordInput, Button],
  selector: 'app-layout',
  styleUrl: './log-in-page.scss',
  templateUrl: './log-in-page.html',
})
export class LogInPage {
  authService = inject(AuthService)
  router = inject(Router)

  userName = '';

  onUserNameChange(value: string) {
    this.userName = value;
  }

  password = '';

  onPasswordChange(value: string) {
    this.password = value;
  }

  protected onLoginClick() {
    this.authService.login();
    this.router.navigate(['/private/home']);
  }
}
