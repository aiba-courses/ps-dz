import { Component, Signal } from '@angular/core';
import { MOVIES } from '../../../shared/constants/fake-films.const'
import { IMovie } from '../../../shared/models/movie.model'
import { MovieCard } from '../../components/movie-card/movie-card'
import { delay, Observable, of } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { AsyncPipe } from '@angular/common';

@Component({
  imports: [MovieCard, AsyncPipe],
  selector: 'app-home-page',
  styleUrl: './home-page.scss',
  templateUrl: './home-page.html',
})
export class HomePage {
  movies$: Observable<IMovie[]> = of(MOVIES).pipe(delay(100));
}
