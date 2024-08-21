import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OrderInformationComponent } from './order-information/order-information.component';
import { ResolverServiceService } from './services/resolver-service.service';



const routes: Routes = [
  {path: '', redirectTo: 'home',pathMatch: 'full', resolve:{product : ResolverServiceService}},
  {path: 'home',component: HomeComponent, resolve:{product : ResolverServiceService}},
  {path: 'orders',component: OrderInformationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers:[ResolverServiceService],
  exports: [RouterModule]
})
export class AppRoutingModule { }
