import { Injectable, signal, computed } from '@angular/core';
import { Pizza } from '../models/pizza.model';

export interface CartItem {
  pizza: Pizza;
  cantidad: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items = signal<CartItem[]>([]);

  agregar(pizza: Pizza) {

    const carrito = [...this.items()];

    const existe = carrito.find(
      item => item.pizza.id === pizza.id
    );

    if (existe) {
      existe.cantidad++;
    } else {
      carrito.push({
        pizza,
        cantidad: 1
      });
    }

    this.items.set(carrito);
  }

  quitar(id: number) {
    this.items.set(
      this.items().filter(
        item => item.pizza.id !== id
      )
    );
  }

  totalItems = computed(() =>
    this.items().reduce(
      (acc, item) => acc + item.cantidad,
      0
    )
  );

  totalPrecio = computed(() =>
    this.items().reduce(
      (acc, item) =>
        acc + (item.pizza.precio * item.cantidad),
      0
    )
  );

  vaciar() {
  this.items.set([]);
}
}