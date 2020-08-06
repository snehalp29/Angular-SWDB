import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, map, mergeMap, catchError, toArray } from 'rxjs/operators';
import { Characters, Character } from './character';
import { Observable, throwError, from } from 'rxjs';
import { people, flim, minFlim } from './people';
@Injectable({
  providedIn: 'root',
})
export class SwService {
  constructor(private http: HttpClient) {}
  /**
   * gets the characters from characters.json
   */
  getCharacters() {
    const charUrl = '../assets/characters.json';

    return this.http
      .get<Characters>(charUrl)
      .pipe(map((chrs: Characters) => chrs.characters));
  }
  /**
   *
   * Takes peoples url as input and returns character's films title and release date.
   */
  getCharacterAndFlims(url: string) {
    return this.http.get<people>(url).pipe(
      mergeMap(p => p.films),
      mergeMap((film) => this.http.get<flim>(String(film))),
      map((f) => ({ title: f.title, release_date: f.release_date } as minFlim)),
      toArray(),
      catchError(this.handleError)
    );


  }

  handleError(err: any) {
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Backend returned code ${err.status}: ${err.message}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }
}
