import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { NavMenu } from '../components/nav-menu/nav-menu';
import { ContentControl } from '../components/content-control/content-control';
import { Title } from '@angular/platform-browser';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { delay, tap } from 'rxjs';

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

  title = signal<string>('');

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
  }
}
