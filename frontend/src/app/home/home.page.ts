import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  brand: string = 'EA';
  model: string = 'fifa25';

  constructor(private router: Router) {}

  gotovideogames() {
    this.router.navigate(['/videogames']);
  }

}
