import { Injectable } from '@angular/core';
import { Characters } from '../interfaces/characters';
import {catchError, Observable, tap, throwError} from "rxjs";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  private apiURL = "https://akabab.github.io/starwars-api/api/all.json"

  constructor( private http: HttpClient) { }
  getCharacterData(): Observable<Characters[]>{
    return this.http.get<Characters[]>(this.apiURL).pipe(
      tap(data => console.log(JSON.stringify(data))),
      catchError((error: HttpErrorResponse) => {
        let errorMessage = error.error instanceof ErrorEvent ?
          `An error occured: ${error.error.message}`:
          `Server returned code: ${error.status}, error message is: ${error.message}`
        console.log(errorMessage)
        return throwError(()=> errorMessage)
      })
    )
  }
}
