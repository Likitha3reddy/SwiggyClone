import { Component } from '@angular/core';

@Component({
  selector: 'app-fooddelivery-places',
  standalone: true,
  imports: [],
  templateUrl: './fooddelivery-places.component.html',
  styleUrl: './fooddelivery-places.component.css'
})
export class FooddeliveryPlacesComponent {
   showMoreItems() {
      const hiddenItems = document.querySelectorAll('.hide');
      const showMoreBtn = document.getElementById('showMoreBtn');

        hiddenItems.forEach(item => {
            item.classList.remove('hidden');  
        });
        if (showMoreBtn) {
            showMoreBtn.style.display = 'none';
        }
    };
    showMoreItems2() {
      const hiddenItems = document.querySelectorAll('.hide1');
      const showMoreBtn = document.getElementById('showMoreBtn1');

        hiddenItems.forEach(item => {
            item.classList.remove('hidden');  
        });
        if (showMoreBtn) {
            showMoreBtn.style.display = 'none';
        }
    };

}
