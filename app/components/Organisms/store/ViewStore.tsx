import ContainerReviews from '@/app/components/Templates/reviews/ContainerReviews';

const ViewStore = ({
    detailStore
}) => {

    console.log('detailStore', detailStore);

    return (
        <div className="container w-screen h-screen flex flex-col pt-[170px]">
            <div className="grid grid-cols-12 gap-4">
                <div className="col col-span-8 flex flex-col items-center">
                    <div className="text-left w-full pl-2">
                        <p className="text-2xl font-bold">{detailStore?.Name}</p>
                        <p className="text-xl">{detailStore?.Description}</p>
                        <p className="text-xl mb-2">{detailStore?.Location}</p>
                    </div>
                    <img src={detailStore?.imgUrl} className="h-[400px] rounded-xl" />
                </div>
                <div className="col col-span-4 flex flex-col justify-center bg-[#ccc] mx-10 rounded-lg">
                    <h2 className="text-2xl font-bold text-center mb-10">Detalles del Emprendedor</h2>
                    <div className="w-full flex justify-center">
                        <img src={detailStore?.imgUrl} className="h-[150px] w-[150px] rounded-full" />
                    </div>
                    <div className="text-center mt-5">
                        <p className="text-xl font-bold">Camilo Jose</p>
                        <p>Correo: {detailStore?.Owner?.Email}</p>
                        <p>Telefono: {detailStore?.Owner?.Phone}</p>
                        <p>Descripción: </p>
                    </div>
                </div>
                <div className="col col-span-12">
                    <ContainerReviews />
                </div>
            </div>
        </div>
    );
}

export default ViewStore;