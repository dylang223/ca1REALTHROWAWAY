import { Component, inject } from '@angular/core';
import { MovieapiService } from '../movieapi-service.js';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  imports: [  FormsModule],
  templateUrl: './search.html',
  styleUrl: './search.css',
})
export class Search {
  movieTitle: string = '';
  movieapiService = inject(MovieapiService);

  searchMovie() {
    this.movieapiService.getMovies(this.movieTitle);
  }
}
