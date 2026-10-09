import { Component } from '@angular/core';
import { FAVORITES } from '../../../shared/constants/fake-favorites.const';
import { MovieCard } from '../../components/movie-card/movie-card';
import { MOVIES } from '../../../shared/constants/fake-films.const';

@Component({
  imports: [MovieCard],
  selector: 'app-favorites-page',
  styleUrl: './favorites-page.scss',
  templateUrl: './favorites-page.html',
})
export class FavoritesPage {
  favorites = FAVORITES;
  protected readonly movies = MOVIES;
}
