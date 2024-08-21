import { Component, inject, OnInit } from '@angular/core';
import { ProductDataServiceService } from '../services/product-data-service.service';
import { $values, Product} from '../models/product.model'
import { ActivatedRoute } from '@angular/router';
import { PlaceOrderDTO, products } from '../models/place-order-dto.model';
import { OrderDataServiceService } from '../services/order-data-service.service';
import { GenericResponseDTO } from '../models/generic-response-dto';


@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.scss']
})
export class PlaceOrderComponent implements OnInit {

  product : Product = null;
  placedorderResponse : GenericResponseDTO;
  cartItems : number = 0;
  placeOrder : PlaceOrderDTO;
  lsProducts : products[] = [];
  productToOrder: products;
  addToCartdProd: any;
  removeFromCart: any;
  selectedPaymentMethod : any = null;

  constructor(private productDataService : ProductDataServiceService, private orderDataService : OrderDataServiceService,private route : ActivatedRoute) { 

    this.placeOrder = new PlaceOrderDTO();

  }

  ngOnInit(): void {
    console.log(this.product);
    this.productDataService.get("Product").subscribe((res: Product) =>
      {
        this.product = res;
        console.log(this.product);
      }); 
  }

  DeleteFromCart(productId:number)
  {
    try{

     if(this.cartItems>0)
      {
        console.log("Cart Items : "+this.cartItems); 
        this.removeFromCart = this.product.data.$values.find(prod => prod.id ==productId);
        this.removeFromCart = this.lsProducts.findIndex(i => i._productName == this.removeFromCart.productName);

        console.log("To Remove From Cart : "+ this.removeFromCart);
        if(this.removeFromCart !== -1)
        {
          this.lsProducts = this.lsProducts.splice(this.removeFromCart, 1);
            this.cartItems--;
        }
        else
        {
          console.log("No Such Item In the Cart");
        }
      }
      else{
        confirm("No Items cart to be deleted");
        console.log("Cart Contains 0 Items , Delete Clicked For "+productId);
      }

    }
    catch(error)
    {
      console.log("Excpetion Occured : " + error);
    }

  }


  AddToCart(productId:number)
  {
    try{

      
     if(this.cartItems>=0)
      {
        console.log("Cart Items Before : "+this.cartItems); 
        this.cartItems++;
        this.addToCartdProd = this.product.data.$values.find(prod => prod.id == productId);

        this.productToOrder = new products();
        this.productToOrder._productName = this.addToCartdProd.productName; 
        this.productToOrder._pricePerUnit = this.addToCartdProd.pricePerUnit;
        this.productToOrder._OrderQuantity = 1;
        
        
        this.lsProducts.push(this.productToOrder);

        console.log("Cart Items After : "+this.cartItems); 
      }
      else{
        confirm("No Items In Cart to be deleted");
        console.log("Cart Contains 0 Items , Delete Clicked For "+productId);
      }

    }
    catch(error)
    {
      console.log("Excpetion Occured : " + error);
    }


  }

  paymentMethodChangeHandler(event: any)
  {
    try
    {
      this.selectedPaymentMethod = event.target.value;
    }
    catch(error)
    {
      console.log("Excpetion Occured : " + error);
    }

  }

  SubmitOrder(): void {
   
    try{
      if(this.selectedPaymentMethod!=null)
        {   
            this.placeOrder._paymentMethod = this.selectedPaymentMethod;
            this.placeOrder._userId = 1;
            this.placeOrder._products = this.lsProducts;
            if(this.lsProducts.length >0)
            {
            console.log(JSON.stringify(this.placeOrder));

            this.orderDataService.post("Order",JSON.stringify(this.placeOrder)).subscribe((res: GenericResponseDTO) =>
              {
                this.placedorderResponse = res;
                console.log(this.placedorderResponse);
              });

              console.log(this.placedorderResponse.statusSucess);

              if(this.placedorderResponse.statusSucess == true)
              {
                confirm("Order Placed Successfully,Thank You!");
              }
              else{
                confirm("Sorry! The Order could not be placed due to a issue");
              }
            }
            else
              {

                confirm("No Product Available in Cart to Place Order");
              } 

        }
        else
        {
          confirm("Please select a payment method, Order Not Placed");

        }

    }
    catch(error)
    {
      console.log("Excpetion Occured : " + error);
    }

  }

}
