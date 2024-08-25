import Banner from '@components/Molecules/banner/index';
import MapComponent from '@components/Molecules/googleMaps/index';
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
                <div className="mt-2 col-span-8 min-h-[500px]">
                    <span className="text-md">{listStore?.length || 0} emprendimientos en <strong>{city}</strong></span>
                    {listStore?.length === 0 && !loadingStore && (
                        <div className="mt-16 text-center">
                            <span>No se encontraron emprendimientos.</span>
                        </div>
                    )}
                    {listStore?.map((store, index) => {
                        return (
                            <div>
                                <h3>{store.name}</h3>
                            </div>
                        )
                    })}
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