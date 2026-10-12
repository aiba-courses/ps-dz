import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, catchError, EMPTY, map, Observable, take, tap } from 'rxjs';
import { baseUrl } from '../constants/api.const';
import { AuthStoreService } from './authStore.service';

interface IAppAuthResponse {
  accessToken: string | null;
  tokenType: 'Bearer' | null;
  expiresIn: 'string' | null;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _httpClient = inject(HttpClient);
  private _authStoreService = inject(AuthStoreService);

  public isAuthenticated$ = new BehaviorSubject<boolean>(false);

  login$(username: string, password: string): Observable<boolean> {
    return this._httpClient
      .post<IAppAuthResponse>(`${baseUrl}/auth`, {
        email: username,
        password: password,
      })
      .pipe(
        tap((response) => {
          if (response != null) {
            this._updateAuthData(response);
          }
        }),
        map((response) => {
          return response.accessToken != null;
        }),
      );
  }

  logout$(): Observable<boolean> {
    this._updateAuthData(null);
    return this.isAuthenticated$.asObservable().pipe(take(1));
  }

  private _updateAuthData(data: IAppAuthResponse | null): void {
    if (data == null) {
      this._authStoreService.setValue('accessToken', null);
      this._authStoreService.setValue('tokenType', null);
      this._authStoreService.setValue('expiresIn', null);

      this.isAuthenticated$.next(false);
      return;
    }

    this._authStoreService.setValue('accessToken', data.accessToken);
    this._authStoreService.setValue('tokenType', data.tokenType);
    this._authStoreService.setValue('expiresIn', data.expiresIn);

    this.isAuthenticated$.next(true);
  }
}
