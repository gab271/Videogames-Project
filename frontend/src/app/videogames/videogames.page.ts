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

  // Añadir estos dos nuevos métodos
  editVideogame(id: number) {
    // Por ahora solo mostraremos un console.log
    console.log('Editar videojuego con id:', id);
    // Aquí irá la lógica para editar el videojuego
  }

  addNewGame() {
    // Por ahora solo mostraremos un console.log
    console.log('Añadir nuevo videojuego');
    // Aquí irá la lógica para añadir un nuevo videojuego
  }
}
