export type Seccion = "heladeria" | "comida-rapida";

export interface ProductoMenu {
  /** Identificador único, usado como key en los bloques #each */
  id: string;
  nombre: string;
  descripcion: string;
  precio: number;
  imagen: string;
  /** Marca el producto como destacado -> ocupa una celda más grande en el bento grid */
  destacado?: boolean;
  /** Etiqueta corta opcional, ej: "Más vendido" */
  etiqueta?: string;
}

export interface CategoriaMenu {
  id: string;
  nombre: string;
  /** Emoji/ícono corto que representa la categoría */
  icono: string;
  descripcion: string;
  productos: ProductoMenu[];
}

export interface SeccionMenu {
  id: Seccion;
  titulo: string;
  subtitulo: string;
  icono: string;
  categorias: CategoriaMenu[];
}
