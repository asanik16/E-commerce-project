import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TitleStrategy } from '@angular/router';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

  postProduct(data : any) {
    return this.http.post<any>("https://anik-s-cart.herokuapp.com/create-product/",data);
  }
  getProduct() {
    return this.http.get<any>("https://anik-s-cart.herokuapp.com/get-product/")
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  putProduct(data : any, id : number) {
    return this.http.put<any>("https://anik-s-cart.herokuapp.com/edit-product/"+id, data)
  }
  deleteProduct(id : number) {
    return this.http.delete<any>("https://anik-s-cart.herokuapp.com/delete-product/"+id)
  }
}
