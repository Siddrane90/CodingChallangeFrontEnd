import { Injectable } from '@angular/core';
import { IApiBaseActions,ParamsType } from '../interfaces/iapi-base-actions';
import { HttpClient,HttpHeaders,HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiHandlerServiceService implements IApiBaseActions
{

  httpOptions:any;
  
  constructor(private httpClient: HttpClient) { 

    this.httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }

  }

  Get(url: string, body?: string) {
    return this.httpClient.get<any>(url).pipe(
      catchError((error: any) => {
        // Handle the error here
        console.error('An error occurred:', error);
        // Optionally, re-throw the error or return a default value
        return throwError('Something went wrong');
      })
    );
  }
  
  GetAll(url: string, body?: string) {
    return this.httpClient.get(url).pipe(
      catchError((error: any) => {
        // Handle the error here
        console.error('An error occurred:', error);
        // Optionally, re-throw the error or return a default value
        return throwError('Something went wrong');
      })
    );
  }

  Post(url: string, body?: string) {
    return this.httpClient.post(url, body,this.httpOptions).pipe(
      catchError((error: any) => {
        // Handle the error here
        console.error('An error occurred:', error);
        // Optionally, re-throw the error or return a default value
        return throwError('Something went wrong');
      })
    );
  }

  Put(url: string, body?:string) {
    return this.httpClient.put(url, body,this.httpOptions).pipe(
      catchError((error: any) => {
        // Handle the error here
        console.error('An error occurred:', error);
        // Optionally, re-throw the error or return a default value
        return throwError('Something went wrong');
      })
    );
  }

  Delete(url: string, body?: string) {
    return this.httpClient.delete(url).pipe(
      catchError((error: any) => {
        // Handle the error here
        console.error('An error occurred:', error);
        // Optionally, re-throw the error or return a default value
        return throwError('Something went wrong');
      })
    );
  }



}
