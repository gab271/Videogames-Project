import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideogamesService {
  private baseUrl = 'http://localhost:8080/api/videogames';

  constructor(private http: HttpClient) { }

  getAllVideogames(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  update(id: number, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, data);
  }

  create(data: any): Observable<any> {
    return this.http.post(this.baseUrl, data);
  }
}