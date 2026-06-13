import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  standalone: true,
  template: `

    <div class="panel">

      <h1>
        🍕 Panel Administrativo
      </h1>

      <hr>

      <h2>Pedidos</h2>

      <p>
        Aquí podrás administrar pedidos.
      </p>

      <hr>

      <h2>Gestionar Pizzas</h2>

      <p>
        Aquí podrás agregar nuevas pizzas.
      </p>

    </div>

  `,
  styles:[`

    .panel{
      max-width:1200px;
      margin:auto;
      padding:30px;
    }

  `]
})
export class AdminComponent {}