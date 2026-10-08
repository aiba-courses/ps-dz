import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-search-input',
  styleUrl: './search-input.scss',
  templateUrl: './search-input.html',
})
export class SearchInput {
  value = '';

  onInput(event: Event) {
    this.value = (event.target as HTMLInputElement).value;
  }
}
