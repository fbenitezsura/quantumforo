import Banner from '@components/Molecules/Banner/index';
import MapComponent from '@components/Molecules/GoogleMaps/index';
import StoreCard from '@components/Molecules/shop/card/index';

const ViewEntrepreneurship = ({
    city,
    loadingStore,
    listStore
}) => {

    const containerStyle = {
        width: '100%',
        height: '400px', // Puedes ajustar la altura según tus necesidades
    };

    const center = {
        lat: -33.4489, // Coordenadas de ejemplo (Santiago, Chile)
        lng: -70.6693,
    };

    console.log('listStore', listStore)

    return (
        <div className="">
            <div className="w-full">
                <Banner />
            </div>
            <div className="w-full grid grid-cols-12 px-5 pt-5 pb-10 relative">
                <div className="col-span-12 h-[350px] block md:hidden">
                    <MapComponent
                        center={center}
                    />
                </div>
                <div className="mt-2 mr-4 col-span-8 min-h-[500px]">
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
                    <MapComponent
                        center={center}
                    />
                </div>
                <div className="absolute md:hidden h-[500px] w-full top-[10%] bg-white rounded-t-3xl px-5 pb-5 pt-2">
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
                        {listStore?.map((store, index) => {
                            return (
                                <div>
                                    <h3>{store.name}</h3>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewEntrepreneurship;