import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from './service/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'e-commerce-project';
  constructor(private router : Router, private cartService : CartService ){ }
  public totalItem : number = 0;
  ngOnInit(): void {
    this.cartService.getProductsCart().subscribe(res => {
      this.totalItem = res.length;
    })
  }
 

  gotoDashboard() {
    this.router.navigateByUrl('/dashboard')
  }
  gotoProduct() {
    this.router.navigateByUrl('/product')
  }
  gotoMyCart() {
    this.router.navigateByUrl('/mycart')
  }
}
