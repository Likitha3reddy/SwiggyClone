import { Component, OnInit } from '@angular/core';
import { DashboardheaderComponent } from '../dashboardheader/dashboardheader.component';
import { FooterComponent } from '../footer/footer.component';
import { CartService } from '../services/cart.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [DashboardheaderComponent,FooterComponent,CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {

  cartData:any;
  val:number=0;
  constructor(private cartService:CartService){}
  ngOnInit(): void {
      this.cartData=this.cartService.getCartProducts();
  }
  ToRemove(title:any){
     if(confirm("Are you sure to delete")){
      this.cartData=this.cartData.filter((item:any)=>{
        return item.hotelName!=title  
       })
     }
  }
  inc(index: number) {
    this.cartData[index].quantity++;
  }

  dec(index: number) {
    if (this.cartData[index].quantity > 0) {
      this.cartData[index].quantity--;
    }
  }
  calculateTotalCost() {
    return this.cartData.reduce((total:any, item:any) => total + (item.price * item.quantity), 0);
  }
}
