'use client';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import validationSchema from '@utils/schemaYup/searchSchema';
import { useState } from 'react';
import clsx from 'clsx';

interface FormData {
  search: string;
  city: string;
}

const Item = ({ children, setItemSelected }) => {
  return (
    <li
      onClick={() => setItemSelected(children)}
      className="hover:bg-[#ccc] rounded-md p-2 mb-1 cursor-pointer"
    >
      {children}
    </li>
  );
};

export default function SearchMobileForm({ loadingSearch, handleSearch }) {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(validationSchema),
  });

  const [itemSelected, setItemSelected] = useState<string | null>(null);

  const handleReset = () => {
    reset();
    setItemSelected(null);
  };

  return (
    <form onSubmit={handleSubmit(handleSearch)} className="flex flex-col relative mt-[70px]">
      {/* Input de búsqueda */}
      <div className="w-full flex flex-col justify-center flex-grow bg-white p-4 rounded-xl">
        <label className="text-gray-500 text-xl font-bold">¿Qué quieres comprar?</label>
        <input
          type="text"
          placeholder="Explora emprendimientos"
          className={clsx(
            'p-4 mt-6 border rounded-full text-black focus:outline-none placeholder:text-sm',
            errors.search && 'border-red-500'
          )}
          {...register('search')}
        />
        {errors.search && <p className="text-red-500 text-sm mt-1">{errors.search.message}</p>}
      </div>

      {/* Select de ciudades */}
      <div className="w-full bg-white p-4 rounded-xl mt-2">
        <h2 className="text-gray-500 text-xl font-bold">¿Dónde quieres comprar?</h2>
        <div className="overflow-y-hidden">
          <div className={clsx('relative border-2 rounded-full my-1', errors.city && 'border-red-500')}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="absolute left-2 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
            <input
              type="text"
              placeholder="Selecciona una ciudad"
              className="pl-10 p-2 w-full focus:outline-none rounded-md"
              value={itemSelected || ''}
              readOnly
              {...register('city')}
            />
          </div>
          {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city.message}</p>}
          <ul className="max-h-[200px] overflow-x-scroll pt-2">
            {['Concepción', 'Santiago', 'Valparaíso'].map((item, index) => (
              <Item key={index} setItemSelected={()=>{
                setValue('city', item);
                setItemSelected(item);
              }}>
                {item}
              </Item>
            ))}
          </ul>
        </div>
      </div>

      <div className="w-full mt-14 flex justify-around items-center border-t-1 border-[#000]">
        <button
          type="button"
          onClick={handleReset}
          className="p-4 text-black font-semibold mt-10 underline hover:bg-gray-200 transition focus:outline-none"
        >
          Limpiar todo
        </button>
        <button
          type="submit"
          className="pl-4 pt-2 h-[40px] w-[120px] flex bg-orange-500 text-white font-semibold mt-10 rounded-full hover:bg-orange-600 transition focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>
          <span className="ml-1">Buscar</span>
        </button>
      </div>
    </form>
  );
}
