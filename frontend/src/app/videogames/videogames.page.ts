import { Component, OnInit } from '@angular/core';
import { VideogamesService } from '../services/videogames.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-videogames',
  templateUrl: './videogames.page.html',
  styleUrls: ['./videogames.page.scss'],
  standalone: false
})
export class VideogamesPage implements OnInit {
  videogames: any[] = [];

  constructor(
    private videogameService: VideogamesService,
    private alertController: AlertController
  ) { }

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

  async editVideogame(id: number) {
    // Primero obtener el videojuego actual
    const videogame = this.videogames.find(v => v.id === id);
    
    const alert = await this.alertController.create({
      header: 'Edit Game',
      inputs: [
        {
          name: 'title',
          type: 'text',
          placeholder: 'Title',
          value: videogame.title
        },
        {
          name: 'description',
          type: 'text',
          placeholder: 'Description',
          value: videogame.description
        },
        {
          name: 'release_date',
          type: 'date',
          placeholder: 'Release Date',
          value: videogame.release_date?.split('T')[0]
        },
        {
          name: 'rating',
          type: 'number',
          placeholder: 'Rating',
          min: 0,
          max: 10,
          value: videogame.rating
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Update',
          handler: (data) => {
            this.videogameService.update(id, data).subscribe({
              next: () => {
                this.getallVideogames();
              },
              error: (e) => console.error(e)
            });
          }
        }
      ]
    });

    await alert.present();
  }

  async addNewGame() {
    const alert = await this.alertController.create({
      header: 'Add New Game',
      inputs: [
        {
          name: 'title',
          type: 'text',
          placeholder: 'Title'
        },
        {
          name: 'description',
          type: 'text',
          placeholder: 'Description'
        },
        {
          name: 'release_date',
          type: 'date',
          placeholder: 'Release Date'
        },
        {
          name: 'rating',
          type: 'number',
          placeholder: 'Rating',
          min: 0,
          max: 10
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Add',
          handler: (data) => {
            this.videogameService.create(data).subscribe({
              next: () => {
                this.getallVideogames();
              },
              error: (e) => console.error(e)
            });
          }
        }
      ]
    });

    await alert.present();
  }
}
