import { IGenre } from '../constants/genres.const';
import { IMovie } from '../models/movie.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';

export interface IAppStore {
  genres: IGenre[];
  movies: IMovie[];
  favorites: IMovie[];

  filters: {
    name: string;
    genre: string | null;
    from: number | null;
    to: number | null;
    sort: 'genre' | 'name' | 'rating';
  };
}

type IAppStoreUpdate = Omit<Partial<IAppStore>, 'filters'> & {
  filters?: Partial<IAppStore['filters']>;
};

export const STORE_DEFAULT_VALUE: IAppStore = {
  genres: [],
  movies: [],
  favorites: [],
  filters: {
    name: '',
    genre: null,
    from: null,
    to: null,
    sort: 'name',
  },
};

@Injectable({ providedIn: 'root' })
export class StoreService {
  private readonly _storeSubject = new BehaviorSubject<IAppStore>({
    ...STORE_DEFAULT_VALUE,
  });

  public getValue<K extends keyof IAppStore>(key: K): IAppStore[K] {
    return this._storeSubject.getValue()[key];
  }

  public getValueAsync<K extends keyof IAppStore>(key: K): Observable<IAppStore[K]> {
    return this._storeSubject.asObservable().pipe(map((state) => state[key]));
  }

  public setValue<K extends keyof IAppStore>(key: K, value: IAppStore[K]): void {
    this._storeSubject.next({
      ...this._storeSubject.getValue(),
      [key]: value,
    });
  }

  public updateData(data: IAppStoreUpdate): void {
    const current = this._storeSubject.getValue();

    this._storeSubject.next({
      ...current,
      ...data,
      filters: data.filters
        ? {
            ...current.filters,
            ...data.filters,
          }
        : current.filters,
    });
  }
}

