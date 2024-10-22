import QuantumForoUseCase from '@clean/domain/useCase/quantumForoUseCase';
import QuantumForoRepositoryImpl from '@clean/infrastructure/repositories/quantumForoRepositoryImpl';

export async function generateStaticParams() {
    const quantumForoRepo = new QuantumForoRepositoryImpl();
    const quantumForoService = new QuantumForoUseCase(quantumForoRepo);

    const storesResult = await quantumForoService.getAllStore();
    let routes: Array<{ id: string }> = [];

    storesResult.fold(
        (err) => {
            console.log('Error al obtener las tiendas:', err);
            // Maneja el error según sea necesario
        },
        (stores) => {
            routes = stores.map((store: any) => ({
                id: store.id.toString(),
            }));
        }
    );

    return routes;
}

export default function Layout({
    children,
    params: {
        country,
        id
    }
}: {
    children: React.ReactNode,
    params: {
        country: string,
        id: string
    }
}) {

    return (
        <>
            {children}
        </>
    );
};
