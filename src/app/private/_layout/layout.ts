import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { NavMenu } from '../components/nav-menu/nav-menu';
import { ContentControl } from '../components/content-control/content-control';
import { Title } from '@angular/platform-browser';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { delay, tap } from 'rxjs';
import { AuthService } from '../../shared/services/auth-service';
import { ErrorStoreService } from '../../shared/services/error-store.service';

@Component({
  imports: [RouterOutlet, NavMenu, ContentControl],
  selector: 'app-layout',
  styleUrl: './layout.scss',
  templateUrl: './layout.html',
})
export class PrivateLayout implements OnInit {
  private _titleService = inject(Title);
  private _router = inject(Router);
  private _activatedRoute = inject(ActivatedRoute);
  private _destroyRef = inject(DestroyRef);
  private _authService = inject(AuthService);
  private _errorStore = inject(ErrorStoreService);

  title = signal<string>('');

  onLogoutClick() {
    this._authService.logout$().subscribe();
  }

  ngOnInit() {
    this.title.set(this._titleService.getTitle());

    this._router.events
      .pipe(
        delay(100),
        tap((event) => {
          if (event instanceof NavigationEnd) {
            this.title.set(this._titleService.getTitle());
          }
        }),
        takeUntilDestroyed(this._destroyRef),
      )
      .subscribe();

    this._authService.isAuthenticated$
      .pipe(takeUntilDestroyed(this._destroyRef))
      .subscribe((isAuth) => {
        if (!isAuth) {
          this._router.navigate(['/public']);
        }
      });
  }
}
