import { Routes,RouterModule } from '@angular/router';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';

import { authGuard } from './auth.guard';
import { CartComponent } from './cart/cart.component';
import { FavouritesComponent } from './favourites/favourites.component';

export const routes: Routes = [
    {
        path:"",
        component:HomeComponent
    },
    {
        path:"dashboard",
        component:DashboardComponent,
        
        
    },
    
    {
        path:"dashboard/cart",
        component:CartComponent,
        canActivate:[authGuard]
    },
    {
        path:"dashboard/favourites",
        component:FavouritesComponent,
        canActivate:[authGuard]
    },
    {
        path:':value',
        component:DashboardComponent
    },
    
    { path: '**', redirectTo: '/signup' }
    
];
