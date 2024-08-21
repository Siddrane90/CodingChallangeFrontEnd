import { Injectable } from '@angular/core';
import { IApiBaseActions,ParamsType } from '../interfaces/iapi-base-actions';
import { HttpClient,HttpHeaders,HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

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
    return this.httpClient.get<any>(url);
  }
  
  GetAll(url: string, body?: string) {
    return this.httpClient.get(url);
  }

  Post(url: string, body?: string) {
    return this.httpClient.post(url, body,this.httpOptions);
  }

  Put(url: string, body?:string) {
    return this.httpClient.put(url, body,this.httpOptions);
  }

  Delete(url: string, body?: string) {
    return this.httpClient.delete(url);
  }



}
