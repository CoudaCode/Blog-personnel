import { Component } from '@angular/core';
import { RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'blog-personnel';
}

// Pour les routerLink if faut importer RouterModule et RouterLink dans le componsant auquel utiliser les routerLink pour que ses liens puissent fonctionner
