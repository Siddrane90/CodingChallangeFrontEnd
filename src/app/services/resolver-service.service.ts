import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductDataServiceService } from './product-data-service.service';

@Injectable({
  providedIn: 'root'
})
export class ResolverServiceService {

  constructor(private productDataService : ProductDataServiceService) { }

  resolve(): Observable<Product>{
    return this.productDataService.get("Product");
  }
}
