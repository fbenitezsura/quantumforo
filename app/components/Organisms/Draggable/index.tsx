import React from 'react';
import StoreCard from '@components/Molecules/shop/card/index';

function ViewDraggable({
  listStore,
  loadingStore
}) {


  return (
    <div className="absolute left-0 bg-white h-screen w-full z-[99] top-[60%] rounded-t-xl flex flex-col items-center">
      <div className="h-[5px] rounded-full w-[120px] bg-[#ccc] mt-2" />
      <div className="w-full my-5 text-center">
        {!loadingStore ? (
          <>
            <span className="font-medium">{listStore?.length || 0} Lugar {listStore.length > 1 ? 'es' : ''} dentro de la zona de busqueda</span>
            {listStore?.length === 0 && (
              <div className="mt-16">
                <span className="text-xl font-bold">No se encontraron emprendimientos.</span>
              </div>
            )}
          </>
        ) : (
          <span>Cargando emprendimientos...</span>
        )}
      </div>
      <div className="w-full flex justify-center">
        <ul className="grid grid-cols-12 gap-4">
          {!loadingStore && listStore?.map((store, index) => {
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
    </div>
  );
}

export default ViewDraggable;