/* eslint-disable @typescript-eslint/naming-convention */
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root'
})

export class HttpService {
  postEndpoint = environment.apiURL;
  getEndpoint = environment.apiGURL;

  httpOptions: any = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(
    private router: Router,
    private http: HttpClient,
    private common: CommonService
  ) { }

  post(path: any, postData: any): Observable<any> {
    return this.http.post<any>(this.postEndpoint + path, JSON.stringify(postData), this.httpOptions)
      .pipe(
        catchError(this.handleError<any>('Error occurred')));
  }

  get(path: any): Observable<any> {
    return this.http.get(this.getEndpoint + path, this.httpOptions)
      .pipe(catchError(this.handleError<any>('Error occurred')));
  }
 
  getJSON(path: any): Observable<any> {
    return this.http.get(path, this.httpOptions)
      .pipe(catchError(this.handleError<any>('Error occurred')));
  }

  private handleError<T>(operation = 'Operation', result?: T) {
    return (error: any): Observable<T> => {
      // this.common.showToast(error.message,'danger');
      // this.common.showToast('An internal error occurred. Please try again later.','danger');
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      this.common.showToast('Internal network error has occurred. Try again later.','danger');
      return of(result as T);
    };
  }

  private handleErrorX(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

  async fetchAPI(url = '',method='POST', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: method, // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      // credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }
}
