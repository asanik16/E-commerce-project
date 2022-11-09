import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'e-commerce-project';
  constructor(private router : Router){ }
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
