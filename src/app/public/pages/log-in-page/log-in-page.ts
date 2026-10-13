import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { InputComponent } from '../../../shared/components/input/input';
import { PasswordInput } from '../../../shared/components/password-input/password-input';
import { Button } from '../../../shared/components/button/button';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../shared/services/auth-service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { catchError, of, take, tap } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  imports: [InputComponent, PasswordInput, Button, ReactiveFormsModule],
  selector: 'app-layout',
  styleUrl: './log-in-page.scss',
  templateUrl: './log-in-page.html',
})
export class LogInPage implements OnInit {
  private _destroyRef = inject(DestroyRef);
  private _authService = inject(AuthService);
  private _router = inject(Router);

  error = signal('');

  protected onLoginClick() {
    this._authService
      .login$(this.form.controls.username.value, this.form.controls.password.value ?? '')
      .pipe(
        take(1),
        tap(() => this._router.navigate(['private'])),
        catchError((err) => {
          this.error.set(err);
          return of(err);
        }),
      )
      .subscribe();
  }

  isDisabled = signal(true);

  ngOnInit() {
    this.form.valueChanges
      .pipe(
        tap(() => this.isDisabled.set(this.form.invalid)),
        takeUntilDestroyed(this._destroyRef),
      )
      .subscribe();
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
