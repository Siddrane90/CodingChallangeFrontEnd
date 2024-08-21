import { Injectable } from '@angular/core';
import { ApiHandlerServiceService } from './api-handler-service.service';
import { Observable } from 'rxjs';
import { products } from '../models/place-order-dto.model';

@Injectable({
  providedIn: 'root'
})
export class OrderDataServiceService {

 
  constructor(private apiHandlerService: ApiHandlerServiceService) { }
  
  private apiServer = "https://localhost:7094/api/v1/";

  post(endpoint: string,body : any): Observable<any>
  {
   
    return this.apiHandlerService.Post(this.apiServer+endpoint,body);

  }

  get(endpoint:string): Observable<any>
  {
    return this.apiHandlerService.GetAll(this.apiServer+endpoint);
  }

  put(endpoint:string): Observable<any>
  {
    return this.apiHandlerService.Put(this.apiServer+endpoint);
  }

}
