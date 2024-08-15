'use client';
import ViewHeader from '@components/organism/header/index'
import { useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from '@/clean/application/redux/hook';
import { Logout } from '@/clean/application/redux/auth/auth.slice';

const ContainerHeader = () => {

    const dispatch = useAppDispatch();

    const {
        userLogged,
        userInfo
    } = useAppSelector((state) => state.Auth);

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const [isFixed, setIsFixed] = useState(false);
    const [oldScroll, setOldScroll] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.pageYOffset;

            if (currentScroll > 600) {
                setIsFixed(true);
            } else if (currentScroll <= 600 && oldScroll > currentScroll) {
                setIsFixed(false);
            }

            setOldScroll(currentScroll);
        };

        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [oldScroll]);

    const handleLogout = () => {
        dispatch(Logout());
    } 

    return (
        <ViewHeader 
        isOpen={isOpen}
        toggleMenu={toggleMenu}
        isFixed={isFixed}
        userLogged={userLogged}
        userInfo={userInfo}
        handleLogout={handleLogout}
        />
    );
}
export default ContainerHeader;