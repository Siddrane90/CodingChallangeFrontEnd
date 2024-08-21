import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule }from '@angular/material/card'
import {MatTabsModule} from '@angular/material/tabs'
import { HttpClientModule } from '@angular/common/http';
import { PlaceOrderComponent } from './place-order/place-order.component';
import { MatButtonModule } from '@angular/material/button';
import { OrderInformationComponent } from './order-information/order-information.component';
import { MatDialogModule } from '@angular/material/dialog';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './shared/modal/modal.component';
import {MatProgressSpinnerModule } from '@angular/material/progress-spinner';

 





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlaceOrderComponent,
    OrderInformationComponent,
    ModalComponent,
       
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    NgbModule,
    MatProgressSpinnerModule
  ],
  exports: [MatDialogModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
