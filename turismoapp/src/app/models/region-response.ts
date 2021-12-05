
export interface RegionResponse {
    id_region: string;
    nombre_region: string;
    dep: Departamento;
    }
interface Departamento {
        id_dep: string;
        nombre_dep: string;
        pais: Paises;
        }
            
interface Paises {
    id_pais: string;
    nombre_pais: string;
}