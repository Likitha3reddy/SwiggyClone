import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavouritesService {
  favProducts:any[]=[];
  constructor() { }
  
  addFav(item:any){
    this.favProducts.push(item);
    console.log(this.favProducts);
  }
  getFavProducts(){
    return this.favProducts;
  }

}
