import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),FormsModule,ReactiveFormsModule, provideClientHydration(),provideHttpClient(),BrowserModule]
};
