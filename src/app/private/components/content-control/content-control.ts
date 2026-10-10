import { Component, inject, OnInit } from '@angular/core';
import { SearchInput } from '../../../shared/components/search-input/search-input';
import { RadioList } from '../../../shared/components/radio-list/radio-list';
import { FromToDate } from '../../../shared/components/from-to-date/from-to-date';
import { GENRES } from '../../../shared/constants/genres.const';
import { SORT } from '../../../shared/constants/sort.const';
import { StoreService } from '../../../shared/services/store.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  imports: [SearchInput, RadioList, FromToDate],
  selector: 'app-content-control',
  styleUrl: './content-control.scss',
  templateUrl: './content-control.html',
})
export class ContentControl implements OnInit {
  private _store = inject(StoreService);

  sortOptions = [
    {id: 'genre', name: 'Жанр'},
    {id: 'name', name: 'Название'},
    {id: 'rating', name: 'Рейтинг'},
  ]

  genres = toSignal(this._store.getValueAsync('genres'), { initialValue: [] });
  filters = toSignal(this._store.getValueAsync('filters'));

  ngOnInit() {
    this._store.setValue('genres', GENRES);
  }

  protected onGenreChange(value: string) {
    this._store.updateData({ filters: { genre: value } });
  }

  protected onSortChange(value: any) {
    this._store.updateData({ filters: { sort: value } });
  }
}
