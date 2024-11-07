import { Component,ViewChild,ElementRef} from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { ListingsComponent } from '../listings/listings.component';
import { SignupComponent } from '../signup/signup.component';
import { FooddeliveryPlacesComponent } from '../fooddelivery-places/fooddelivery-places.component';
import { FooterComponent } from '../footer/footer.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent,ListingsComponent,SignupComponent,FooddeliveryPlacesComponent,FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  title = 'swiggyclone';

  showGetAppComponent = false;

  // Reference to the `app-getapp` element
  @ViewChild('getAppSection') getAppSection!: ElementRef;

  toggleGetAppComponent() {
    this.showGetAppComponent = !this.showGetAppComponent;

    // If showing, scroll to the component
    if (this.showGetAppComponent) {
      setTimeout(() => this.scrollToGetApp(), 0);
    }
  }

  scrollToGetApp() {
    this.getAppSection.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}


