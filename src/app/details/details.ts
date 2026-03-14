import { Component, inject, input, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MovieapiService } from '../movieapi-service';

@Component({
  selector: 'app-details',
  imports: [RouterLink],
  templateUrl: './details.html',
  styleUrl: './details.css',
})
export class Details {
  movieService = inject(MovieapiService);
  protected id = input.required<string>();
  movie = signal<any>(null);

  ngOnInit(){
    this.movieService.getMovie(this.id()).subscribe(data => this.movie.set(data));
  }

   
  
}
