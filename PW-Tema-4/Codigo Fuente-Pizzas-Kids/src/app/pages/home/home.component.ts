import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <div class="home">

      <div class="contenido">

        <h1>🍕 Pizzas Kids</h1>

        <p>
          Bienvenido a la mejor pizzería de la región.
          Disfruta de nuestras deliciosas pizzas preparadas
          con ingredientes frescos y mucho sabor.
        </p>

        <div class="acciones">
          <a href="/menu">Ver Menú</a>
        </div>

      </div>

    </div>
  `,
  styles: [`

    :host{
      display:block;
      min-height:100vh;

      background:
        linear-gradient(
          rgba(255,255,255,.75),
          rgba(255,255,255,.75)
        ),
        url('/images/home-bg.jfif');

      background-size:cover;
      background-position:center;
      background-repeat:no-repeat;
    }

    .home{
      min-height:100vh;

      display:flex;
      justify-content:center;
      align-items:center;

      text-align:center;

      padding:30px;
    }

    .contenido{

      max-width:700px;

      background:rgba(255,255,255,.92);

      padding:40px;

      border-radius:20px;

      backdrop-filter:blur(5px);

      box-shadow:
        0 10px 30px rgba(0,0,0,.15);

      animation: aparecer .8s ease;

    }

    h1{
      color:#e63946;
      font-size:4rem;
      margin-bottom:20px;
    }

    p{
      font-size:1.2rem;
      line-height:1.8;
      margin-bottom:30px;
      color:#333;
    }

    a{
      display:inline-block;

      background:
        linear-gradient(
          135deg,
          #e63946,
          #c1121f
        );

      color:white;

      padding:15px 30px;

      border-radius:12px;

      text-decoration:none;

      font-weight:bold;

      transition:.3s;

      box-shadow:
        0 5px 15px rgba(230,57,70,.4);
    }

    a:hover{

      transform:
        translateY(-4px)
        scale(1.05);

      box-shadow:
        0 10px 25px rgba(230,57,70,.5);

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
export class HomeComponent {}