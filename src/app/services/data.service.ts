import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private dataUrl = 'assets/data.json'; // In a real app, this would be an API endpoint

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    // For demo purposes, we'll use a static JSON file
    // In a real app, this would be an API call
    return this.http.get<any>(this.dataUrl).pipe(
      catchError(this.handleError('getData', { services: [], testimonials: [] }))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      
      // Let the app keep running by returning an empty result
      return of(result as T);
    };
  }
}
