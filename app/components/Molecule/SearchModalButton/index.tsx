'use client'
import ContainerSearchModal from '@components/Templates/Modal/ContainerSearchModal';

export default function SearchMobileButton({
  openModalSearch
}) {

  return (
    <>
      <div
        onClick={() => {
          openModalSearch()
        }}
        className="flex cursor-pointer block md:hidden w-full mx-auto bg-white border border-gray-300 rounded-full shadow-md">
        {/* Name Field */}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="black" className="size-6 mt-[18px] ml-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>
        {/* Input de búsqueda */}
        <div className="cursor-pointer flex flex-col justify-center flex-grow relative">
          <label className="cursor-pointer absolute top-2 left-4 text-gray-500 text-xs font-bold">
            ¿Qué buscas?
          </label>
          <input
            type="text"
            readOnly
            placeholder="Explora emprendimientos"
            className="p-4 pt-6 rounded-full cursor-pointer text-black focus:outline-none placeholder:text-sm"
          />
        </div>
      </div>
      <ContainerSearchModal />
    </>

  );
}
