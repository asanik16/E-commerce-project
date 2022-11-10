import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public productList : any ;
  constructor(private api : ApiService) { }

  ngOnInit(): void {
    this.api.getProduct().subscribe(res=>{
      this.productList = res;
      console.log(res);
    })
    
  }

}
