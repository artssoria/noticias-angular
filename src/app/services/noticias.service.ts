import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private http: HttpClient) { }

  getNoticias(parametros: any): Observable<any>{
    const URL = 'https://newsapi.org/v2/top-headlines?country='+parametros.pais+'&category='+ parametros.categoria +'&apiKey=2b96c583748149b8bb333233a9c2a976';
return this.http.get(URL);
  }
}
