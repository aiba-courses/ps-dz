import { Component, inject, OnInit, Signal } from '@angular/core';
import { FAVORITES } from '../../../shared/constants/fake-favorites.const';
import { MovieCard } from '../../components/movie-card/movie-card';
import { delay, Observable, of } from 'rxjs';
import { IMovie } from '../../../shared/models/movie.model';
import { toSignal } from '@angular/core/rxjs-interop';
import { AsyncPipe } from '@angular/common';
import { StoreService } from '../../../shared/services/store.service';
import { MOVIES } from '../../../shared/constants/fake-films.const';

@Component({
  imports: [MovieCard, AsyncPipe],
  selector: 'app-favorites-page',
  styleUrl: './favorites-page.scss',
  templateUrl: './favorites-page.html',
})
export class FavoritesPage implements OnInit {
  private _store = inject(StoreService);

  favorites = toSignal(this._store.getValueAsync('favorites'), { initialValue: [] });

  ngOnInit() {
    this._store.setValue('favorites', FAVORITES);
  }
}
