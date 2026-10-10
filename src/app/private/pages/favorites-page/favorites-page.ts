import { Component, Signal } from '@angular/core';
import { FAVORITES } from '../../../shared/constants/fake-favorites.const';
import { MovieCard } from '../../components/movie-card/movie-card';
import { delay, Observable, of } from 'rxjs';
import { IMovie } from '../../../shared/models/movie.model';
import { toSignal } from '@angular/core/rxjs-interop';
import { AsyncPipe } from '@angular/common';

@Component({
  imports: [MovieCard, AsyncPipe],
  selector: 'app-favorites-page',
  styleUrl: './favorites-page.scss',
  templateUrl: './favorites-page.html',
})
export class FavoritesPage {
  favorites$: Observable<IMovie[]> = of(FAVORITES).pipe(delay(100));
}
