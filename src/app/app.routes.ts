import { Routes } from '@angular/router';
import { authGuard } from './shared/guards/auth-guard';
import { HomePage } from './private/pages/home-page/home-page';
import { LogInPage } from './public/pages/log-in-page/log-in-page';
import { FavoritesPage } from './private/pages/favorites-page/favorites-page';
import { PrivateLayout } from './private/_layout/layout';
import { PublicLayout } from './public/_layout/layout';

export const routes: Routes = [
  {
    path: 'public',
    component: PublicLayout,
    children: [
      {
        path: 'log-in',
        component: LogInPage,
        title: 'Авторизация',
      },
      {
        path: '**',
        redirectTo: 'log-in',
      },
    ],
  },
  {
    path: 'private',
    component: PrivateLayout,
    canActivate: [
      authGuard
    ],
    children: [
      {
        path: 'home',
        component: HomePage,
        title: 'Домашная страница',
      },
      {
        path: 'favorites',
        component: FavoritesPage,
        title: 'Избранное',
      },
      {
        path: '**',
        redirectTo: 'home',
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'private/home',
  },
];
