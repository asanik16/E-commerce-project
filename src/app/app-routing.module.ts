import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './component/product/product.component'
import { ListComponent } from './component/product/list/list.component'
import { DashboardComponent } from './component/dashboard/dashboard.component'
import { MyCartComponent } from './component/my-cart/my-cart.component';

const routes: Routes = [
  {
    path:'',
    component:DashboardComponent
  },
  {
    path:'dashboard',
    component:DashboardComponent
  },
  {
    path:'product',
    component:ProductComponent
  },
  {
    path:'mycart',
    component:MyCartComponent
  },
  {
    path:'product/list',
    component:ListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
