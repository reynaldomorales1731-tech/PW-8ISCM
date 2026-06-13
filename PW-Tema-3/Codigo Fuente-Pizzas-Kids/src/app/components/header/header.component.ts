import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  template: `
    <header>

      <h2>🍕 Pizzas Kids</h2>

      <nav>

        <a routerLink="/">Inicio</a>

        <a routerLink="/menu">Menú</a>

        <a routerLink="/orden">Orden</a>

        <a
          routerLink="/personal"
          class="btn-personal">

          🔒 Personal

        </a>

      </nav>

    </header>
  `,
  styles: [`
    header{
      background:#e63946;
      color:white;
      display:flex;
      justify-content:space-between;
      align-items:center;
      padding:15px 30px;
    }

    nav{
      display:flex;
      align-items:center;
      gap:20px;
    }

    a{
      color:white;
      text-decoration:none;
      font-weight:bold;
    }

    .btn-personal{
      background:white;
      color:#e63946;
      padding:10px 18px;
      border-radius:25px;
      transition:.3s;
    }

    .btn-personal:hover{
      transform:translateY(-2px);
      box-shadow:0 4px 10px rgba(0,0,0,.2);
    }
  `]
})
export class HeaderComponent {}