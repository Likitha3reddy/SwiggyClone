import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { CartService } from '../services/cart.service';
@Component({
  selector: 'app-dashboardheader',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './dashboardheader.component.html',
  styleUrl: './dashboardheader.component.css'
})
export class DashboardheaderComponent implements OnInit {
  constructor(private authService: AuthService,private r:Router,private cartService:CartService) {}
  checkLogin = false;
  onLogout() {
    this.authService.logout();
    this.checkLogin = false;
  }
  onLoginCheck(): void {
    const userData = localStorage.getItem('user');
    this.checkLogin = !!userData; // Set checkLogin to true if userData exists, false otherwise
  }
  
  LoginPage(){
    this.r.navigate(['']);
  }
  cartItems:any;
  ngOnInit(): void {
    this.cartItems=this.cartService.getCartProducts();
    this.onLoginCheck();
  }

}
