import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { Results } from "./results/results";


@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterOutlet, RouterLinkActive, Results],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ca1');
}
