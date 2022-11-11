import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.scss']
})
export class MyCartComponent implements OnInit {

  public cartItem : any = [];
  public grandTotal !: number;

  constructor(private cartService : CartService ) { }

  ngOnInit(): void {
    this.cartService.getProductsCart().subscribe(res => {
      this.cartItem = res;
      this.grandTotal = this.cartService.getTotalPrice();
    })
  }
  removeItem(item : any) {
    this.cartService.removeCartItem(item);
  }

}
