import { inject, Injectable } from '@angular/core';
import { signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs';
import { MovieResults, SearchResults } from './models/moviedetails.js';

@Injectable({
  providedIn: 'root',
  
})


export class MovieapiService {
  private _baseUrl = "https://www.omdbapi.com/";
  private _apikey = "4835d201";
  private _currentTitle = '';

  public movies = signal<MovieResults[]>([]);
  public maxPages = signal<number>(1);
  public currentPage = signal<number>(1);
  private _http = inject(HttpClient);

  getMovies(title: string, page: number = 1){
    this._currentTitle = title;
    const url = this._baseUrl + "?s=" + title + "&page=" + page + "&apikey=" + this._apikey;
    this._http.get<SearchResults>(url)
    .pipe(take(1))
    .subscribe(data => {
      this.movies.set(data.Search);
      this.maxPages.set(Math.ceil(parseInt(data.totalResults || '0') / 10));
      this.currentPage.set(page);
    });
  }

  nextPage(){
    if (this.currentPage() < this.maxPages()) {
      this.getMovies(this._currentTitle, this.currentPage() + 1);
    }
  }

  previousPage(){
    if (this.currentPage() > 1) {
      this.getMovies(this._currentTitle, this.currentPage() - 1);
    }
  }
 getMovie(id: string){
    const url = this._baseUrl + "?i=" + id + "&apikey=" + this._apikey;
    return this._http.get<MovieResults>(url).pipe(take(1));
  }
}
