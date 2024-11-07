import { Component } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-listings',
  standalone: true,
  imports: [],
  templateUrl: './listings.component.html',
  styleUrl: './listings.component.css'
})
export class ListingsComponent {
  constructor(private r:Router){}
  translateElement() {
    const element1 = document.getElementsByClassName('myElement')[0] as HTMLElement;
    const element2 = document.getElementsByClassName('myElement')[1] as HTMLElement;

    const element3 = document.getElementsByClassName('myElement')[2] as HTMLElement;
    const icon =document.getElementsByClassName('arrow1')[0] as HTMLElement;
    if (element1 && element2) {
      element1.style.transform = 'translateX(100px)';
      element2.style.transform = 'translateX(100px)';
      icon.style.background='rgb(203,205,210)';
    }
  }
  translateLeft(){
    const element1 = document.getElementsByClassName('myElement')[0] as HTMLElement;
    const element2 = document.getElementsByClassName('myElement')[1] as HTMLElement;
    const icon =document.getElementsByClassName('arrow1')[0] as HTMLElement;
    if (element1 && element2) {
      element1.style.transform = 'translateX(-100px)';
      element2.style.transform = 'translateX(-100px)';
      icon.style.background='rgb(203,205,210)';
    }
  }
  translateEl(){
    const element3 = document.getElementsByClassName('myElement')[2] as HTMLElement;
    if(element3){
      element3.style.transform='translateX(100px)';
    }
  }
  transl(){
    const element3 = document.getElementsByClassName('myElement')[2] as HTMLElement;
    if(element3){
      element3.style.transform='translateX(-100px)';
    }

  }
  navigateToItem(itemName: string): void {
    this.r.navigate([`/${itemName}`]); 
  }
}
