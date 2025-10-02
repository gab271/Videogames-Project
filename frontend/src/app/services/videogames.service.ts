import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideogamesService {
  private baseUrl = 'http://localhost:8080/api/videogames'; // Añadido /api

  constructor(private http: HttpClient) { }

  getAllVideogames(): Observable<any> {
    return this.http.get(this.baseUrl);
  }
}