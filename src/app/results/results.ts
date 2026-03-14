import { Component, inject } from '@angular/core';
import { MovieapiService } from '../movieapi-service.js';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-results',
  imports: [CommonModule, RouterLink],
  templateUrl: './results.html',
  styleUrl: './results.css',
})
export class Results {
  movieapiService = inject(MovieapiService);
}
