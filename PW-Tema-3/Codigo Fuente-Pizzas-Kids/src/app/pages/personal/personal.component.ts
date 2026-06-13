import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personal',
  standalone: true,
  imports: [FormsModule],
  template: `

    <div class="contenedor">

      <div class="card">

        <h1>🔒 Área Restringida</h1>

        <p>
          Solo personal autorizado de Pizzas Kids
        </p>

        <input
          type="password"
          [(ngModel)]="pin"
          placeholder="Ingresa el PIN">

        <button
          (click)="ingresar()">

          Ingresar

        </button>

      </div>

    </div>

  `,
  styles:[`

    .contenedor{
      min-height:100vh;
      display:flex;
      justify-content:center;
      align-items:center;
    }

    .card{
      width:400px;
      background:white;
      padding:40px;
      border-radius:20px;
      text-align:center;
      box-shadow:0 5px 20px rgba(0,0,0,.1);
    }

    input{
      width:100%;
      padding:15px;
      margin-top:20px;
      border-radius:10px;
      border:1px solid #ddd;
    }

    button{
      width:100%;
      margin-top:20px;
      background:#e63946;
      color:white;
      border:none;
      padding:15px;
      border-radius:10px;
      cursor:pointer;
    }

  `]
})
export class PersonalComponent {

  pin = '';

  constructor(
    private router: Router
  ) {}

  ingresar(){

    if(this.pin === '1234'){

      this.router.navigate(['/admin']);

    }else{

      alert('PIN incorrecto');

    }

  }

}