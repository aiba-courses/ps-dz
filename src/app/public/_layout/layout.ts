import { Component } from '@angular/core';
import { InputComponent } from '../../shared/components/input/input';
import { PasswordInput } from '../../shared/components/password-input/password-input';
import { Button } from '../../shared/components/button/button';

@Component({
  imports: [InputComponent, PasswordInput, Button],
  selector: 'app-layout',
  styleUrl: './layout.scss',
  templateUrl: './layout.html',
})
export class Layout {
  userName = "";

  onUserNameChange(value: string) {
    this.userName = value;
  }

  password = "";

  onPasswordChange(value: string) {
    this.password = value;
  }
}
