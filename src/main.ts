import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { apiInterceptor } from './app/core/interceptors/api.interceptor';
import { errorInterceptor } from './app/core/interceptors/error.interceptor';
import { routes } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient(withInterceptors([apiInterceptor, errorInterceptor])),
    provideAnimations()
  ]
}).catch(err => console.error(err));