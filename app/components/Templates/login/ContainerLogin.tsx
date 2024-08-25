"use client"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import ViewLogin from '@components/Organisms/login/ViewLogin';
import { useDispatch, useSelector } from "react-redux";
import { Login } from "@clean/application/redux/auth/auth.slice";

const LoginTemplate = () => {

  const router = useRouter();
  const dispatch = useDispatch();

  const { loadingLogin, userLogged } = useSelector((state) => state.Auth);

  useEffect(() => {
    if(userLogged){
      router.replace('/');
    }
  }, [userLogged])

  const handleLogin = (data: { email: string; password: string }) => {
    dispatch(Login(data))
  }

  return (
    <div className="w-full flex justify-center px-8 py-12">
      <ViewLogin 
      loadingLogin={loadingLogin}
      handleLogin={handleLogin}
      />
    </div>
  )
}

export default LoginTemplate
