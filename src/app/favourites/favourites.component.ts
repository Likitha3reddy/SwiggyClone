import { Component, OnInit } from '@angular/core';
import { FavouritesService } from '../services/favourites.service';
import { CommonModule } from '@angular/common';
import { DashboardheaderComponent } from '../dashboardheader/dashboardheader.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-favourites',
  standalone: true,
  imports: [CommonModule,DashboardheaderComponent,FooterComponent,RouterModule],
  templateUrl: './favourites.component.html',
  styleUrl: './favourites.component.css'
})
export class FavouritesComponent implements OnInit {
  constructor(private favService:FavouritesService){}
  favData:any[]=[];
  ngOnInit(): void {
    // console.log(this.favData.length);
    // console.log("it not working");
    this.favData=this.favService.getFavProducts();
    console.log(this.favService.getFavProducts());
    console.log("it not working");
    console.log(this.favData);
  }
}

