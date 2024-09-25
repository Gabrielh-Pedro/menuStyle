import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.config'; // Ajuste o caminho conforme necessário
import { provideRouter } from '@angular/router';
import { appRoutes } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(appRoutes) // Fornece as rotas aqui
  ]
});
