import { Injectable, signal } from '@angular/core';
import { Pizza } from '../models/pizza.model';
import { SupabaseService } from './supabase.service';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  pizzas = signal<Pizza[]>([]);

  constructor(
    private supabaseService: SupabaseService
  ) {}

  async cargarPizzas() {

    const { data, error } =
      await this.supabaseService
        .getClient()
        .from('pizzas')
        .select('*');

    console.log('DATA:', data);
    console.log('ERROR:', error);
    
        if (error) {
      console.error(error);
      return;
    }

    this.pizzas.set(data as Pizza[]);
  }
}