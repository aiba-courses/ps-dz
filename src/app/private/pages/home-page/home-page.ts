import { Component, inject, OnInit, Signal } from '@angular/core';
import { MovieCard } from '../../components/movie-card/movie-card'
import { toSignal } from '@angular/core/rxjs-interop';
import { AsyncPipe } from '@angular/common';
import { StoreService } from '../../../shared/services/store.service';
import { FAVORITES } from '../../../shared/constants/fake-favorites.const';
import { MOVIES } from '../../../shared/constants/fake-films.const';

@Component({
  imports: [MovieCard, AsyncPipe],
  selector: 'app-home-page',
  styleUrl: './home-page.scss',
  templateUrl: './home-page.html',
})
export class HomePage implements OnInit {
  private _store = inject(StoreService);

  movies = toSignal(this._store.getValueAsync('movies'), { initialValue: [] });

  ngOnInit() {
    this._store.setValue('movies', MOVIES);
  }
}
