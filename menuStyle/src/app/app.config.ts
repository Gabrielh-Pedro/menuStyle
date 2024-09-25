import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, RouterModule],
  template: `
    <header class="header">
      <h1 class="logo">Calculadora App</h1>
      <nav class="navbar">
        <ul class="nav-list">
          <li class="nav-item"><a routerLink="/calcular-media" class="nav-link">Calcular Média</a></li>
          <li class="nav-item"><a routerLink="/calculadora" class="nav-link">Calculadora</a></li>
          <li class="nav-item"><a routerLink="/apolice-seguro" class="nav-link">Apólice</a></li>
          <li class="nav-item"><a routerLink="/conversor-temperatura" class="nav-link">Conversor Temperatura</a></li>
          <li class="nav-item"><a routerLink="/imc-calculadora" class="nav-link">IMC</a></li>
        </ul>
      </nav>
    </header>
    <router-outlet></router-outlet>
  `,
  styles: [`
    .header {
      background-color: #4CAF50; /* Cor de fundo do header */
      color: white;
      padding: 20px;
      text-align: center;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
      border-radius: 5px;
    }

    .logo {
      margin: 0;
      font-size: 24px;
      font-weight: bold;
    }

    .navbar {
      margin-top: 10px;
    }

    .nav-list {
      list-style-type: none;
      padding: 0;
      display: flex;
      justify-content: center;
    }

    .nav-item {
      margin-right: 20px;
    }

    .nav-link {
      color: white;
      text-decoration: none;
      font-size: 16px;
      padding: 10px 15px;
      border-radius: 4px;
      transition: background-color 0.3s;
    }

    .nav-link:hover {
      background-color: #388E3C; /* Cor ao passar o mouse */
    }

    .nav-link.active {
      background-color: #28a745; /* Cor para o link ativo */
      color: white;
    }
  `]
})
export class AppComponent {}
