import Banner from '@/app/components/Molecule/Banner/index';
import StoreCard from '@/app/components/Molecule/shop/card/index';
import ContainerDraggable from '../../Templates/Draggable';

const ViewEntrepreneurship = ({
    city,
    loadingStore,
    listStore
}) => {

    const center = {
        lat: -33.4489, // Coordenadas de ejemplo (Santiago, Chile)
        lng: -70.6693,
    };

    return (
        <div className="">
            <div className="w-full">
                <Banner />
            </div>
            <div className="w-full grid grid-cols-12 md:px-5 pt-5 pb-10 relative">
                <div className="col-span-12 h-[350px] block md:hidden">
                    
                </div>
                <div className="mt-2 mr-4 hidden md:block col-span-8 min-h-[500px]">
                    <span className="text-md">{listStore?.length || 0} emprendimientos en <strong>{city}</strong></span>
                    {loadingStore && (
                        <div className="mt-16 text-center">
                            <span>Cargando emprendimientos...</span>
                        </div>
                    )}
                    {listStore?.length === 0 && !loadingStore && (
                        <div className="mt-16 text-center">
                            <span>No se encontraron emprendimientos.</span>
                        </div>
                    )}
                    <ul className="grid grid-cols-12 gap-4">
                        {listStore?.map((store, index) => {
                            return (
                                <StoreCard
                                    className="col-span-12 md:col-span-4"
                                    id={store?.id}
                                    key={store?.url}  // Usar 'url' o un identificador único si está disponible
                                    name={store?.Name}
                                    description={store?.Description}
                                    categories={store?.categories}
                                    image={store?.imgUrl}
                                    color={store?.backgroundColor || 'bg-white'}
                                    url={store?.Url}
                                />
                            )
                        })}
                    </ul>

                </div>
                <div className="col-span-4 hidden md:block h-auto">
                    
                </div>
                <div className="col-span-12 h-[200px]">
                    <ContainerDraggable 
                    
                    />
                </div>
                {/* Modal view 
                <div
                    style={{
                        position: 'absolute',
                        top: position + 'px',
                        left: 0,
                        right: 0,
                        height: '300px',
                        backgroundColor: '#fff',
                        cursor: 'grab',
                        borderTopLeftRadius: '16px',
                        borderTopRightRadius: '16px',
                        transition: 'top 0.3s ease',
                        boxShadow: '0 -2px 10px rgba(0,0,0,0.2)',
                    }}
                    onMouseDown={startDrag}
                    className="absolute md:hidden h-[500px] w-full top-[10%] bg-white rounded-t-3xl px-5 pb-5 pt-2">
                    <div className="w-full flex justify-center">
                        <div className="w-[40px] h-[4px] bg-[#ccc] rounded-full"></div>
                    </div>
                    <div className="w-full flex flex-col text-center justify-center mt-5">
                        <span className="font-medium">{listStore?.length || 0} lugares dentro de la zona de busqueda</span>
                        {listStore?.length === 0 && !loadingStore && (
                            <div className="mt-16">
                                <span className="text-xl font-bold">No se encontraron emprendimientos.</span>
                            </div>
                        )}
                    </div>
                    <div className="w-full flex justify-center">
                        <ul className="grid grid-cols-12 gap-4">
                            {listStore?.map((store, index) => {
                                return (
                                    <StoreCard
                                        className="col-span-12 md:col-span-4"
                                        id={store?.id}
                                        key={store?.url}  // Usar 'url' o un identificador único si está disponible
                                        name={store?.Name}
                                        description={store?.Description}
                                        categories={store?.categories}
                                        image={store?.imgUrl}
                                        color={store?.backgroundColor || 'bg-white'}
                                        url={store?.Url}
                                    />
                                )
                            })}
                        </ul>
                    </div>
                </div>*/}
            </div>
        </div>
    )
}

export default ViewEntrepreneurship;