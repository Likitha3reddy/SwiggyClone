import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiURL = 'https://672ba0fb1600dda5a9f5ce9e.mockapi.io/users';

  constructor(private http: HttpClient, private r: Router) { }
  login(phoneNumber: string) {
    return this.http.get(`${this.apiURL}?phoneNumber=${phoneNumber}`).pipe(
      tap((users: any) => {
        if (users.length > 0) {
          localStorage.setItem('user', JSON.stringify(users[0]));
          this.r.navigate(['/dashboard']);
        } else {
          alert('User not found, please sign up first');
        }
      })
    );
  }
  signup(userData: { phoneNumber: string; name: string; email: string }) {
    return this.http.post(this.apiURL, userData).pipe(
      tap((user: any) => {
        localStorage.setItem('user', JSON.stringify(user));
        this.r.navigate(['/dashboard']);
      })
    );
  }
  logout() {
    localStorage.removeItem('user');
    this.r.navigate(['']);
  }
  isLoggedIn(): boolean {
    return !!localStorage.getItem('user');
  }
  
}
