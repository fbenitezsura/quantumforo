'use client'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import validationSchema from '@utils/schemaYup/loginSchema'; // Asegúrate de que este archivo apunta al esquema Yup
import { Field, Input as HeadlessInput, Label } from '@headlessui/react';
import clsx from 'clsx';

interface FormData {
  password: string;
  email: string;
}

export default function CompleteForm({
  loadingLogin,
  handleLogin
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
    <form onSubmit={handleSubmit(handleLogin)} className="max-w-md h-[500px] p-6 space-y-4 bg-black rounded-md">
      {/* Name Field */}
      <div className="flex justify-end">
        <svg
        onClick={()=>{
          reset();
        }}
        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" className="size-6 cursor-pointer">
          <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
      </div>
      {/* Email Field */}
      <Field>
        <Label className="text-sm/6 font-medium text-white">Correo electronico</Label>
        <HeadlessInput
          type="email"
          {...register('email')}
          className={clsx(
            'mt-3 block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white',
            'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25',
            errors.email && 'border-red-500'
          )}
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
      </Field>

      {/* Password Field */}
      <Field>
        <Label className="text-sm/6 font-medium text-white">Contraseña</Label>
        <HeadlessInput
          type="password"
          {...register('password')}
          className={clsx(
            'mt-3 block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white',
            'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25',
            errors.password && 'border-red-500'
          )}
        />
        {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
      </Field>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
      >
        {loadingLogin ? 'Loading...' : 'Iniciar Sesion'}
      </button>
    </form>
  );
}
