'use client'
import { useRouter } from "next/navigation"
import ViewRegister from '@components/Organisms/register/ViewRegister';
import { useAppDispatch, useAppSelector } from '@/clean/application/redux/hook';
import { registerCustomer, resetRegister } from '@/clean/application/redux/register/register.slice';
import { useEffect, useState } from 'react';

const ContainerRegister = () => {

    const router = useRouter();

    const dispatch = useAppDispatch();

    const [typeUser, setTypeUser] = useState(null);

    const {
        loadingRegister,
        registerCompleted,
        processCompleted
    } = useAppSelector((state) => state.Register);

    useEffect(() => {
        if (processCompleted) {
            router.replace('/account/login');
        }
    }, [processCompleted])

    useEffect(() => {
        () => {
            dispatch(resetRegister());
        }
    }, [])

    const handleRegister = (data: any) => {
        dispatch(registerCustomer(data));
    }

    return (
        <ViewRegister
            loadingRegister={loadingRegister}
            registerCompleted={registerCompleted}
            handleRegister={handleRegister}
            typeUser={typeUser}
            setTypeUser={setTypeUser}
        />
    )
}

export default ContainerRegister;