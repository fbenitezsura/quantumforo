import React from 'react';

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
              <span>Emprendimiento</span>
            )
          })}
        </ul>
      </div>
    </div>
  );
}

export default ViewDraggable;