import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { SignupserviceService } from '../services/signupservice.service';
import { OnInit,OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit {
  isVisible = false; // Initialize as hidden
  isSignUppage=false;
  phoneNumber: string = '';
  name:string='';
  email:string='';

  constructor(private sidebarService: SignupserviceService,private authservice:AuthService,private r:Router) {}

  ngOnInit() {
    // Subscribe to the sidebar visibility observable
    this.sidebarService.sidebarVisible$.subscribe((visible) => {
      this.isVisible = visible; // Update `isVisible` based on emitted value
      console.log("Sidebar visibility:", this.isVisible); // Log the value for debugging
    });
  }

  closeSidebar() {
    this.sidebarService.closeSidebar();
  }
  
  signuppage(){
    this.isSignUppage=true;
  }
  loginUppage(){
    this.isSignUppage=false;
  }
  onLogin() {
    this.authservice.login(this.phoneNumber).subscribe();
  }

  onSignup() {
    const userData = { phoneNumber: this.phoneNumber, name: this.name, email: this.email };
    this.authservice.signup(userData).subscribe();
  }
}