'use client'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import validationSchema from '@utils/schemaYup/searchSchema'; // Asegúrate de que este archivo apunta al esquema Yup
import { Field, Input as HeadlessInput, Label } from '@headlessui/react';
import clsx from 'clsx';

interface FormData {
  search: string;
}

export default function SearchDesktopForm({
  loadingSearch,
  handleSearch
}) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  return (
    <form onSubmit={handleSubmit(handleSearch)} className="md:flex hidden max-w-xl mx-auto bg-white border border-gray-300 rounded-full shadow-md">
      {/* Name Field */}
      {/* Input de búsqueda */}
      <div className="flex flex-col justify-center flex-grow relative">
        <label className="absolute top-2 left-4 text-gray-500 text-xs font-bold">
          ¿Qué buscas?
        </label>
        <input
          type="text"
          placeholder="Explora emprendimientos"
          className="p-4 pt-6 rounded-l-full text-black focus:outline-none placeholder:text-sm"
          {...register('search')}
        />
      </div>

      {/* Select de ciudades */}
      <select
        style={{
          backgroundImage: "none", // Esto oculta la flecha
        }}
        {...register('city')}
        className="p-4 hover:cursor-pointer border-l border-gray-300 hover:bg-[#ECECEC] hover:rounded-full text-black focus:outline-none text-sm appearance-none">
        <option disabled value="Seleccione una ciudad">Selecciona una ciudad</option>
        <option value="concepcion">Concepción</option>
        <option value="santiago">Santiago</option>
        <option value="valparaiso">Valparaíso</option>
        {/* Agrega más opciones según sea necesario */}
      </select>

      {/* Botón de búsqueda */}
      <button 
      type="submit"
      className="p-4 bg-orange-500 text-white font-semibold rounded-r-full hover:bg-orange-600 transition focus:outline-none">
        Buscar
      </button>
    </form>
  );
}
