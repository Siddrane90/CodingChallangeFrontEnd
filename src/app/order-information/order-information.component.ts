import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { OrderDataServiceService } from '../services/order-data-service.service';
import { OrderInformationdto } from '../models/order-informationdto';
import { GenericResponseDTO } from '../models/generic-response-dto';
import { OrderDetailResponseDTO } from '../models/order-detail-response-dto';
import {MatDialog} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { ModalComponent } from '../shared/modal/modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';




@Component({
  selector: 'app-order-information',
  templateUrl: './order-information.component.html',
  styleUrls: ['./order-information.component.scss']
})
export class OrderInformationComponent implements OnInit {

  constructor(private orderDataService : OrderDataServiceService,public modalService: NgbModal) { }

  ordersInformation : OrderInformationdto;
  payOrderResponse : GenericResponseDTO;
  cancelOrderResponse : GenericResponseDTO;
  orderDetailsInformation : OrderDetailResponseDTO;
  

  ngOnInit(): void {

    this.orderDataService.get("Order").subscribe((res: OrderInformationdto) =>
      {
        this.ordersInformation = res;
        console.log(this.ordersInformation);
      }); 
  }

  PayOrder(orderId:number)
  {
    try
    {
      this.orderDataService.put("Order/Pay/"+orderId).subscribe((res: GenericResponseDTO) =>
        {
          this.payOrderResponse = res;
          console.log(this.payOrderResponse);
          confirm("Order has been Paid Sucessfully");
        });
    }
    catch(error)
    {
      console.log("Exception Occured While Processig  : "+error);
    }
  }


  CancelOrder(orderId:number)
  {
    try
    {
      this.orderDataService.put("Order/Cancel/"+orderId).subscribe((res: GenericResponseDTO) =>
        {
          this.cancelOrderResponse = res;
          console.log(this.cancelOrderResponse);
          confirm("Order has been deleted Sucessfully");
        });
    }
    catch(error)
    {
      console.log("Exception Occured While Processig : "+error);
    }
  }

  OrderDetails(orderId:number)
  {
    try
    {

      this.orderDataService.get("Order/"+orderId).subscribe((res: OrderDetailResponseDTO) =>
        {
          this.orderDetailsInformation = res;
          console.log(this.orderDetailsInformation);
          const modalRef = this.modalService.open(JSON.stringify(this.orderDetailsInformation),{ size: 'xl' } );
        }); 

       
    }
    catch(error)
    {
      console.log("Exception Occured While Processig : "+error);
    }

  }


}

