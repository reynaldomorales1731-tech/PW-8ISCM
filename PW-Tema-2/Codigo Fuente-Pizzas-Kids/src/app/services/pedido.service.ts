import { Injectable } from '@angular/core';
import { SupabaseService } from './supabase.service';
import { Pedido } from '../models/pedido.model';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  constructor(
    private supabaseService: SupabaseService
  ) {}

  async guardarPedido(pedido: Pedido) {

    const { data, error } =
      await this.supabaseService
        .getClient()
        .from('pedidos')
        .insert([pedido]);

    console.log(data);
    console.log(error);

    return { data, error };
  }
}