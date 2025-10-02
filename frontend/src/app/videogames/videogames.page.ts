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

  deleteVideogame(id: number) {
    this.videogameService.delete(id).subscribe({
      next: () => {
        // Actualizar la lista después de borrar
        this.videogames = this.videogames.filter(videogame => videogame.id !== id);
      },
      error: (e) => console.error(e)
    });
  }
}
