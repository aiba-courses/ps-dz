import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { baseUrl } from '../constants/api.const';
import { StoreService } from './store.service';
import { BehaviorSubject, map, tap } from 'rxjs';
import { IMovie } from '../models/movie.model';
import { IGenre } from '../constants/genres.const';

interface IHttpRequest<T> {
  items: T,
  total: number
}

interface IMoviesFilter {
  id: string[] | null
  name: string | null
  genre: string | null
  sort: string | null
}

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private _httpClient = inject(HttpClient);
  private _store = inject(StoreService);

  getMovies(filter?: HttpParams) {
    return this._httpClient
      .get<IHttpRequest<IMovie[]>>(`${baseUrl}/movies`, {
        params: filter
      })
      .pipe(
        tap((response) => this._store.setValue('movies', response.items)),
        map(() => void 0),
      );
  }

  getGenres() {
    return this._httpClient.get<IGenre[]>(`${baseUrl}/genres`).pipe(
      tap((response) => this._store.setValue('genres', response)),
      map(() => void 0),
    );
  }

  getFavorites(filter?: HttpParams) {
    return this._httpClient
      .get<IHttpRequest<IMovie[]>>(`${baseUrl}/favorites`, {
        params: filter
      })
      .pipe(
        tap((response) => this._store.setValue('favorites', response.items)),
        map(() => void 0),
      );
  }
}
