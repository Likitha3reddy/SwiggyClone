import { Component } from '@angular/core';
import { DashboardheaderComponent } from '../dashboardheader/dashboardheader.component';
import { DashboardContentComponent } from '../dashboard-content/dashboard-content.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [DashboardheaderComponent,DashboardContentComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent  {

  
}
