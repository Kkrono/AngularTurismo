export interface DepartamentoResponse {
id_dep: number;
nombre_dep: string;
pais: Paises;
}

interface Paises {
    id_pais: string;
    nombre_pais: string;
}