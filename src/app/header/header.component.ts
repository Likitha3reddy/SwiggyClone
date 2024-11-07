import { Component } from '@angular/core';
import { SignupserviceService } from '../services/signupservice.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private sidebarService: SignupserviceService) {}

  onSignupClick() {
    this.sidebarService.openSidebar();
  }
}
