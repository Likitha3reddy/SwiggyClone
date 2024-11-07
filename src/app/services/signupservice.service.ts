import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupserviceService {

  private isSidebarVisible = new BehaviorSubject<boolean>(false);

  // Observable that components can subscribe to
  sidebarVisible$ = this.isSidebarVisible.asObservable();

  // Function to open sidebar
  openSidebar() {
    
    this.isSidebarVisible.next(true);
    console.log("done ..");
    console.log(this.isSidebarVisible);
  }

  // Function to close sidebar
  closeSidebar() {
    this.isSidebarVisible.next(false);
  }
}