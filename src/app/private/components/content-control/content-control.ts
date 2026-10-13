import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { SearchInput } from '../../../shared/components/search-input/search-input';
import { RadioList } from '../../../shared/components/radio-list/radio-list';
import { FromToDate } from '../../../shared/components/from-to-date/from-to-date';
import { GENRES } from '../../../shared/constants/genres.const';
import { SORT } from '../../../shared/constants/sort.const';
import { IAppStore, StoreService } from '../../../shared/services/store.service';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { catchError, debounceTime, EMPTY, map, switchMap, tap } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpService } from '../../../shared/services/http.service';
import { Router } from '@angular/router';

@Component({
  imports: [SearchInput, RadioList, FromToDate, ReactiveFormsModule],
  selector: 'app-content-control',
  styleUrl: './content-control.scss',
  templateUrl: './content-control.html',
})
export class ContentControl implements OnInit {
  private _httpService = inject(HttpService);
  private _store = inject(StoreService);
  private _destroyRef = inject(DestroyRef);
  private _router = inject(Router);

  constructor() {
    this._httpService.getGenres().subscribe();
  }

  sortOptions = [
    { id: 'genre', name: 'Жанр' },
    { id: 'name', name: 'Название' },
    { id: 'rating', name: 'Рейтинг' },
  ];

  genres = toSignal(this._store.getValueAsync('genres'), { initialValue: [] });
  filters = toSignal(this._store.getValueAsync('filters'));

  private _buildParams(f?: any): HttpParams {
    let params = new HttpParams();
    if (f?.name) params = params.set('name', f.name);
    if (f?.genre && f.genre !== '0') params = params.set('genre', f.genre);
    if (f?.sort) params = params.set('sort', f.sort);
    return params;
  }

  ngOnInit() {
    const f = this._store.getValue('filters');
    this.form.patchValue(
      { search: f.name, genres: f.genre ?? '', sortBy: f.sort },
      { emitEvent: false },
    );

    this.form.valueChanges
      .pipe(
        debounceTime(500),
        map(() => this.form.getRawValue()),
        map((v) => ({ name: v.search, genre: v.genres || null, sort: v.sortBy })),
        switchMap((filters) => {
          const req$ = this._router.url.includes('/favorites')
            ? this._httpService.getFavorites(this._buildParams(filters))
            : this._httpService.getMovies(this._buildParams(filters));
          return req$.pipe(catchError(() => EMPTY));
        }),
        takeUntilDestroyed(this._destroyRef),
      )
      .subscribe();
  }

  form = new FormGroup({
    search: new FormControl('', {
      nonNullable: true,
    }),
    genres: new FormControl('', {
      nonNullable: true,
    }),
    sortBy: new FormControl<IAppStore['filters']['sort']>('name', { nonNullable: true }),
  });
}
