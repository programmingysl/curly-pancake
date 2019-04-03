import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { HttpHeaders } from '@angular/common/http';




@Injectable({
  providedIn: 'root'
})
export class JokeserviceService {



  constructor(private http: HttpClient) { }

  getRandomJoke(): Observable<any> {


    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    return this.http.get('https://icanhazdadjoke.com/', httpOptions);

  }

}
