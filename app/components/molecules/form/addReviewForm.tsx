'use client'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import validationSchema from '@utils/schemaYup/addReviewSchema'; // Asegúrate de que este archivo apunta al esquema Yup
import { Field, Input as HeadlessInput, Label } from '@headlessui/react';
import clsx from 'clsx';

interface FormData {
  password: string;
  email: string;
}

export default function AddReviewForm({
  loadingLogin,
  handleClose,
  handleAddReview
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
    <form onSubmit={handleSubmit(handleAddReview)} className="border-2 w-[700px] h-[90%] p-3 px-6 bg-white rounded-xl">
      {/* Name Field */}
      <div className="flex justify-end">
        <svg
          onClick={() => {
            reset();
            handleClose();
          }}
          xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="black" className="size-6 cursor-pointer">
          <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
      </div>
      <div className="w-full">
        <h2 className="text-xl font-bold text-center">¿Cómo calificarías este emprendimiento?</h2>
      </div>

      <div className="w-full grid grid-cols-12 mt-[40px] border-b-2 pb-4">
        <div className="col col-span-3">
          <img src="https://via.placeholder.com/300x200"></img>
        </div>
        <div className="col col-span-9 pl-4">
          <div>Tienda</div>
          <div>rating</div>
        </div>
      </div>


      <Field className="mt-[20px]">
        <Label className="text-sm/6 font-medium text-black">Describe tu calificación en una frase</Label>
        <HeadlessInput
          type="text"
          {...register('title')}
          placeholder="¿Qué es lo que mas destacas del emprendimiento?"
          className={clsx(
            'mt-3 border-2 block w-full rounded-lg bg-white/5 py-1.5 px-3 text-sm/6 text-black',
            'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25',
            errors.title && 'border-red-500'
          )}
        />
        {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>}
      </Field>

      {/* Password Field */}
      <Field className="mt-[20px]">
        <Label className="text-sm/6 font-medium text-black">¿Qué te gustaría decir acerca de este producto?</Label>
        <HeadlessInput
          type="text"
          placeholder="Comparte tu experiencia con el emprendimiento. ¿Qué te gustó? ¿Es lo que esperabas?"
          {...register('comment')}
          className={clsx(
            'mt-3 block w-full rounded-lg border-2 bg-white/5 py-1.5 px-3 text-sm/6 text-black',
            'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25',
            errors.comment && 'border-red-500'
          )}
        />
        {errors.comment && <p className="text-red-500 text-sm mt-1">{errors.comment.message}</p>}
      </Field>

      {/* Submit Button */}
      <div className="flex justify-center mt-[50px]">
        <button
          type="submit"
          className="w-[300px] bg-black text-white py-2 px-4 rounded-full"
        >
          {loadingLogin ? 'Cargando...' : 'Finalizar'}
        </button>
      </div>

    </form>
  );
}
