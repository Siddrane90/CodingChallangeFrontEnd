import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiHandlerServiceService } from './api-handler-service.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductDataServiceService {
  httpClient: any;

  constructor(private apiHandlerService: ApiHandlerServiceService) { }

  private apiServer = "https://localhost:7094/api/v1/";

  get(endpoint: string) : Observable<any>
  {
    return this.apiHandlerService.GetAll(this.apiServer+endpoint);

  }
  
}
