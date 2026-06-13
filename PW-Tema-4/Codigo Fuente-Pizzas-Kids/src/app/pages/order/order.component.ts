import { Component, inject } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CartService } from '../../services/cart.service';
import { PedidoService } from '../../services/pedido.service';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [
    CurrencyPipe,
    FormsModule
  ],
  template: `
    <div class="contenedor">

      <h1>🛒 Mi Orden</h1>

      @if(cart.items().length === 0){

        <div class="vacio">
          <p>Tu carrito está vacío.</p>
        </div>

      }

      @for(item of cart.items(); track item.pizza.id){

        <div class="card">

          <h3>{{ item.pizza.nombre }}</h3>

          <p>
            Cantidad:
            {{ item.cantidad }}
          </p>

          <p>
            {{ item.pizza.precio | currency:'MXN' }}
          </p>

        </div>

      }

      @if(cart.items().length > 0){

        <div class="formulario">

          <h2>
            Total:
            {{ cart.totalPrecio() | currency:'MXN' }}
          </h2>

          <hr>

          <input
            [(ngModel)]="nombre"
            placeholder="👤 Nombre">

          <input
            [(ngModel)]="telefono"
            placeholder="📞 Teléfono">

          <input
            [(ngModel)]="direccion"
            placeholder="🏠 Dirección">

          <select [(ngModel)]="metodoPago">
            <option value="">💳 Método de pago</option>
            <option value="Efectivo">Efectivo</option>
            <option value="Transferencia">Transferencia</option>
          </select>

          <select [(ngModel)]="metodoEntrega">
            <option value="">🚚 Método de entrega</option>
            <option value="Domicilio">Domicilio</option>
            <option value="Recoger">Recoger en local</option>
          </select>

          <br><br>

          <button
            (click)="guardarPedido()">
            Confirmar Pedido 🍕
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
          rgba(255,255,255,.90),
          rgba(255,255,255,.90)
        ),
        url('/images/order-bg.jfif');

      background-size:cover;
      background-position:center;
      background-attachment:fixed;
    }

    .contenedor{
      max-width:900px;
      margin:auto;
      padding:40px 20px;
      animation:aparecer .8s ease;
    }

    h1{
      text-align:center;
      color:#e63946;
      margin-bottom:30px;
      font-size:3rem;
    }

    h2{
      color:#1d3557;
      margin-bottom:20px;
    }

    .card{

      background:rgba(255,255,255,.95);

      padding:20px;

      margin-bottom:15px;

      border-radius:18px;

      box-shadow:
        0 8px 20px rgba(0,0,0,.12);

      transition:.3s;

    }

    .card:hover{

      transform:translateY(-4px);

      box-shadow:
        0 12px 25px rgba(0,0,0,.18);

    }

    .formulario{

      background:rgba(255,255,255,.95);

      padding:25px;

      margin-top:20px;

      border-radius:20px;

      box-shadow:
        0 10px 25px rgba(0,0,0,.12);

    }

    input,
    select{

      width:100%;

      padding:12px;

      margin-bottom:12px;

      border:1px solid #ddd;

      border-radius:10px;

      font-size:15px;

      transition:.3s;

    }

    input:focus,
    select:focus{

      outline:none;

      border-color:#e63946;

      box-shadow:
        0 0 10px rgba(230,57,70,.25);

    }

    button{

      background:
        linear-gradient(
          135deg,
          #e63946,
          #c1121f
        );

      color:white;

      border:none;

      padding:14px 25px;

      border-radius:12px;

      font-weight:bold;

      cursor:pointer;

      transition:.3s;

      box-shadow:
        0 5px 15px rgba(230,57,70,.4);

    }

    button:hover{

      transform:
        translateY(-3px)
        scale(1.05);

      box-shadow:
        0 10px 25px rgba(230,57,70,.5);

    }

    button:active{
      transform:scale(.95);
    }

    .vacio{

      background:white;

      padding:30px;

      text-align:center;

      border-radius:20px;

      box-shadow:
        0 8px 20px rgba(0,0,0,.10);

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
export class OrderComponent {

  cart = inject(CartService);
  pedidoService = inject(PedidoService);

  nombre = '';
  telefono = '';
  direccion = '';
  metodoPago = '';
  metodoEntrega = '';

  async guardarPedido() {

    const productos =
      JSON.stringify(this.cart.items());

    const resultado =
      await this.pedidoService.guardarPedido({

        nombre: this.nombre,
        telefono: this.telefono,
        direccion: this.direccion,
        metodo_pago: this.metodoPago,
        metodo_entrega: this.metodoEntrega,
        productos,
        total: this.cart.totalPrecio()

      });

    if(resultado.error){

      alert('Error al guardar pedido');

      return;
    }

    this.cart.vaciar();

    this.nombre = '';
    this.telefono = '';
    this.direccion = '';
    this.metodoPago = '';
    this.metodoEntrega = '';

    alert('Pedido guardado correctamente 🎉');

  }

}