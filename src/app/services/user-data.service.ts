import { Injectable } from '@angular/core';
import {User} from './user.type';
import {Observable, throwError} from 'rxjs';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {catchError, retry} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  private url = 'http://localhost:3000';

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }

  constructor(private httpClient: HttpClient) { }

  getAllUser(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.url}/user-data`).pipe(
      retry(1),
    );
  }

  getUserByName(name: string): Observable<User> {
    return this.httpClient.get<User>(`${this.url}/user-data/${name}`);
  }

  createUser(user: User): Observable<User> {
    console.log(user);
    return this.httpClient.post<User>(`${this.url}/user-data`, user, this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  deleteUser(name: string) {
    console.log(name);
    return this.httpClient.delete(`${this.url}/user.data/${name}`);
  }
}
