import { Component, input, Input } from '@angular/core';
import { Rating } from '../rating/rating'
import { NgOptimizedImage } from '@angular/common'
import { IMovie } from '../../../shared/models/movie.model'

@Component({
  imports: [
    Rating,
    NgOptimizedImage
  ],
  selector: 'app-movie-card',
  styleUrl: './movie-card.scss',
  templateUrl: './movie-card.html',
})
export class MovieCard {
  data = input.required<IMovie>();
}
