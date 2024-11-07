import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartProducts:any[]=[];
  constructor() { }
  addCart(item:any){
    this.cartProducts.push(item)
    // console.log(this.cartProducts.length);
  }
  getCartProducts(){
    return this.cartProducts;
  }

}
