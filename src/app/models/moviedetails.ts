

export interface SearchResults {
     Search: MovieResults[];
     totalResults?: string;
     Response: string;
     Error?: string;
    }

export interface MovieResults {
   Title: string;
   Year: string;
   imdbID: string;
   Type: string;
   Poster: string;
   
}