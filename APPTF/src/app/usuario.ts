export interface Usuario {
    id: string;
    nombre: string;
    puntis: number;
    ganador: number;
    posicion?: number | null;
    imagen?: string; // La propiedad es opcional, indicada por el signo '?'
}
