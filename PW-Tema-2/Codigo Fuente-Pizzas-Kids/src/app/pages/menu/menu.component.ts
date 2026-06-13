import { Component, inject, OnInit } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { PizzaService } from '../../services/pizza.service';
import { CartService } from '../../services/cart.service';
import { Pizza } from '../../models/pizza.model';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CurrencyPipe],
  template: `
    <div class="contenedor">

      <h1>🍕 Nuestro Menú</h1>

      @for (pizza of pizzaService.pizzas(); track pizza.id) {

        <div class="card">

          <h2>
            {{ pizza.emoji }}
            {{ pizza.nombre }}
          </h2>

          <p>
            {{ pizza.descripcion }}
          </p>

          <strong class="precio">
            {{ pizza.precio | currency:'MXN' }}
          </strong>

          <br><br>

          <button
            class="btn"
            (click)="agregar(pizza)">
            Agregar al carrito 🛒
          </button>

        </div>

      }

    </div>
  `,
  styles: [`

    :host{
      display:block;
      min-height:100vh;

      background:
        linear-gradient(
          rgba(255,255,255,.88),
          rgba(255,255,255,.88)
        ),
        url('/images/menu-bg.jfif');

      background-size:cover;
      background-position:center;
      background-attachment:fixed;
    }

    .contenedor{
      max-width:1000px;
      margin:auto;
      padding:40px 20px;
      animation:aparecer .8s ease;
    }

    h1{
      text-align:center;
      color:#e63946;
      margin-bottom:40px;
      font-size:3rem;
    }

    .card{

      background:rgba(255,255,255,.95);

      border-radius:18px;

      padding:25px;

      margin-bottom:25px;

      backdrop-filter:blur(4px);

      box-shadow:
        0 10px 25px rgba(0,0,0,.12);

      transition:.3s;

    }

    .card:hover{

      transform:
        translateY(-6px);

      box-shadow:
        0 15px 35px rgba(0,0,0,.18);

    }

    h2{
      color:#1d3557;
      margin-bottom:10px;
    }

    p{
      color:#555;
      line-height:1.6;
      margin-bottom:15px;
    }

    .precio{
      color:#e63946;
      font-size:1.3rem;
    }

    .btn{

      background:
        linear-gradient(
          135deg,
          #e63946,
          #c1121f
        );

      color:white;

      border:none;

      padding:12px 24px;

      border-radius:12px;

      font-weight:bold;

      cursor:pointer;

      transition:.3s;

      box-shadow:
        0 5px 15px rgba(230,57,70,.4);

    }

    .btn:hover{

      transform:
        translateY(-3px)
        scale(1.05);

      box-shadow:
        0 10px 25px rgba(230,57,70,.5);

    }

    .btn:active{
      transform:scale(.95);
    }

    @keyframes aparecer{

      from{
        opacity:0;
        transform:translateY(20px);
      }

      to{
        opacity:1;
        transform:translateY(0);
      }

    }

  `]
})
export class MenuComponent implements OnInit {

  pizzaService = inject(PizzaService);
  cartService = inject(CartService);

  async ngOnInit() {
    await this.pizzaService.cargarPizzas();
  }

  agregar(pizza: Pizza) {
    this.cartService.agregar(pizza);

    alert(
      pizza.nombre +
      ' agregada al carrito'
    );
  }

}