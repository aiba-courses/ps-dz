import { Component } from '@angular/core';
import { MOVIES } from '../../../shared/constants/fake-films.const'
import { IMovie } from '../../../shared/models/movie.model'
import { MovieCard } from '../../components/movie-card/movie-card'

@Component({
  imports: [
    MovieCard
  ],
  selector: 'app-home-page',
  styleUrl: './home-page.scss',
  templateUrl: './home-page.html',
})
export class HomePage {
  movies: IMovie[] = MOVIES;
}
