import { Component, OnInit } from '@angular/core';
import { ProductDataServiceService } from '../services/product-data-service.service';
import { $values, data, Product} from '../models/product.model'
import { ActivatedRoute } from '@angular/router';
import {ProgressSpinnerMode} from '@angular/material/progress-spinner';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  product : Product = new Product();


   constructor(private productDataService : ProductDataServiceService,private route : ActivatedRoute) { 
     }

  ngOnInit() {

    console.log(this.product);
    this.productDataService.get("Product").subscribe((res: Product) =>
      {
        this.product = res;
        console.log(this.product);
      });       
  }

  
 


  
}
