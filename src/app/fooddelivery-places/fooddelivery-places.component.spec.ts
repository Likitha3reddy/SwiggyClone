import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooddeliveryPlacesComponent } from './fooddelivery-places.component';

describe('FooddeliveryPlacesComponent', () => {
  let component: FooddeliveryPlacesComponent;
  let fixture: ComponentFixture<FooddeliveryPlacesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooddeliveryPlacesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FooddeliveryPlacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
