import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { VideogamesPage } from './videogames.page';
import { VideogamesPageRoutingModule } from './videogames-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { VideogamesService } from '../services/videogames.service';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    VideogamesPageRoutingModule,
    HttpClientModule
  ],
  declarations: [VideogamesPage],
  providers: [VideogamesService]
})
export class VideogamesPageModule { }
