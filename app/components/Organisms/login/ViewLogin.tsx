import Link from 'next/link';
import { FieldValues, useForm } from "react-hook-form";
import LoginForm from '@/app/components/Molecule/form/loginForm';

interface SignInCredentials extends FieldValues {
  email: string
  password: string
}

const Login = ({
    loadingLogin,
    handleLogin
}) => {


  return (
    <div className="max-w-sm w-full flex flex-col items-center">
      <h1 className="text-large-semi uppercase mb-6">Bienvenido !</h1>
      <p className="text-center text-base-regular text-gray-700 mb-8">
        Inicia sesión para acceder a una experiencia de compra mejorada.
      </p>
      <LoginForm 
      loadingLogin={loadingLogin}
      handleLogin={handleLogin}
      />
      <span className="text-center text-gray-700 text-small-regular mt-6">
        No tienes cuenta?{" "}
        <Link href='/account/register'>
        <button
          className="underline"
        >
          Registrate
        </button>
        </Link>        
        .
      </span>
    </div>
  )
}

export default Login
