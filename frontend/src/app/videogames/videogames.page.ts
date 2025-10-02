import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-videogames',
  templateUrl: './videogames.page.html',
  styleUrls: ['./videogames.page.scss'],
  standalone: false
})
export class VideogamesPage implements OnInit {

  videogames: any[] = [
    { title: 'The Legend of Zelda: Breath of the Wild', platform: 'Nintendo Switch', genre: 'Action-adventure', releaseYear: 2017 },
    { title: 'God of War', platform: 'PlayStation 4', genre: 'Action-adventure', releaseYear: 2018 },
    { title: 'Red Dead Redemption 2', platform: 'PlayStation 4, Xbox One, PC', genre: 'Action-adventure', releaseYear: 2018 },
    { title: 'The Witcher 3: Wild Hunt', platform: 'PlayStation 4, Xbox One, PC, Nintendo Switch', genre: 'Action RPG', releaseYear: 2015 },
    { title: 'Minecraft', platform: 'Multiple platforms', genre: 'Sandbox, Survival', releaseYear: 2011 },
    { title: 'Fortnite', platform: 'Multiple platforms', genre: 'Battle Royale, Survival', releaseYear: 2017 },
    { title: 'Among Us', platform: 'PC, Mobile, Nintendo Switch', genre: 'Party, Social Deduction', releaseYear: 2018 },
    { title: 'Cyberpunk 2077', platform: 'PlayStation 4, Xbox One, PC', genre: 'Action RPG', releaseYear: 2020 },
    { title: 'Hades', platform: 'PC, Nintendo Switch, PlayStation 4, PlayStation 5, Xbox One, Xbox Series X/S', genre: 'Roguelike, Action RPG', releaseYear: 2020 },
    { title: 'Animal Crossing: New Horizons', platform: 'Nintendo Switch', genre: 'Simulation', releaseYear: 2020 }
  ];

  constructor() { }

  ngOnInit() {
  }

}
