import { Component, input, Input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common'

@Component({
  imports: [
    NgOptimizedImage
  ],
  selector: 'app-rating',
  styleUrl: './rating.scss',
  templateUrl: './rating.html',
})
export class Rating {
  maxRating = 5;

  rating = input(0);

  get starsRating(): boolean[] {
    return Array.from({ length: this.maxRating }, (_, i) => i + 1 <= this.rating() );
  }
}
