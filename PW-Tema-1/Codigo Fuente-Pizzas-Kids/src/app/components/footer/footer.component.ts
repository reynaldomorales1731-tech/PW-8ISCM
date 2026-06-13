import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer>
      © 2026 Pizzas Kids - Todos los derechos reservados
    </footer>
  `,
  styles: [`
    footer{
      background:#1d3557;
      color:white;
      text-align:center;
      padding:20px;
      margin-top:40px;
    }
  `]
})
export class FooterComponent {}