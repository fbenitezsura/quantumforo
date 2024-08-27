export interface SearchParams {
    name?: string;
    categoryName?: string;
    entrepreneurName?: string;
    location?: string;
    [key: string]: string | undefined; // Para permitir otros posibles filtros dinámicos
}