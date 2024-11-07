import { CanActivateFn,Router } from '@angular/router';
import { Inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const router = Inject(Router);

  // Check if user data exists in localStorage (indicating a logged-in user)
  const isLoggedIn = !!localStorage.getItem('user');

  if (isLoggedIn) {
    return true; // Allow access to the route
  } else {
    router.navigate(['/login']); // Redirect to login if not logged in
    return false;
  }
};
