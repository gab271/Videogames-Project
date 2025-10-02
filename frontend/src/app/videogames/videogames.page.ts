import { Component, OnInit } from '@angular/core';
import { VideogamesService } from '../services/videogames.service';

@Component({
  selector: 'app-videogames',
  templateUrl: './videogames.page.html',
  styleUrls: ['./videogames.page.scss'],
  standalone: false
})
export class VideogamesPage implements OnInit {
  videogames: any[] = [];

  constructor(private videogameService: VideogamesService) { }

  ngOnInit() {
    this.getallVideogames();
  }

  getallVideogames() {
    this.videogameService.getAllVideogames().subscribe({
      next: (data) => {
        this.videogames = data;
      },
      error: (e) => console.error(e)
    });
  }
}
