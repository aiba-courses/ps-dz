import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { SearchInput } from '../../../shared/components/search-input/search-input';
import { RadioList } from '../../../shared/components/radio-list/radio-list';
import { FromToDate } from '../../../shared/components/from-to-date/from-to-date';
import { GENRES } from '../../../shared/constants/genres.const';
import { SORT } from '../../../shared/constants/sort.const';
import { IAppStore, StoreService } from '../../../shared/services/store.service';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, map, tap } from 'rxjs';

@Component({
  imports: [SearchInput, RadioList, FromToDate, ReactiveFormsModule],
  selector: 'app-content-control',
  styleUrl: './content-control.scss',
  templateUrl: './content-control.html',
})
export class ContentControl implements OnInit {
  private _store = inject(StoreService);
  private _destroyRef = inject(DestroyRef);

  sortOptions = [
    { id: 'genre', name: 'Жанр' },
    { id: 'name', name: 'Название' },
    { id: 'rating', name: 'Рейтинг' },
  ];

  genres = toSignal(this._store.getValueAsync('genres'), { initialValue: [] });
  filters = toSignal(this._store.getValueAsync('filters'));

  ngOnInit() {
    this._store.setValue('genres', GENRES);

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
        tap((filters) => this._store.updateData({ filters })),
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
