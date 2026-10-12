import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { InputComponent } from '../../../shared/components/input/input';
import { PasswordInput } from '../../../shared/components/password-input/password-input';
import { Button } from '../../../shared/components/button/button';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../shared/services/auth-service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { tap } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  imports: [InputComponent, PasswordInput, Button, ReactiveFormsModule],
  selector: 'app-layout',
  styleUrl: './log-in-page.scss',
  templateUrl: './log-in-page.html',
})
export class LogInPage implements OnInit {
  private _destroyRef = inject(DestroyRef);
  authService = inject(AuthService);
  router = inject(Router);

  protected onLoginClick() {
    if (!this.form.controls.username.errors && !this.form.controls.password.errors) {
      this.authService.login();
      this.router.navigate(['/private/home']);
    }
  }

  isDisabled = signal(true);

  ngOnInit() {
    this.form.valueChanges.pipe(
      tap(() => this.isDisabled.set(this.form.invalid)),
      takeUntilDestroyed(this._destroyRef)
    ).subscribe();
  }

  form = new FormGroup({
    username: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    password: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
  });
}
