export interface Pedido {
  id?: number;
  nombre: string;
  telefono: string;
  direccion: string;
  metodo_pago: string;
  metodo_entrega: string;
  productos: string;
  total: number;
  fecha?: string;
}