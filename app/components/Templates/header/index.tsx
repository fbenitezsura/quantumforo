'use client';
import ViewHeader from '@components/Organisms/header/index';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from '@/clean/application/redux/hook';
import { Logout } from '@/clean/application/redux/auth/auth.slice';

const ContainerHeader = () => {

    const path = usePathname();
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
    const [typePosition, setTypePosition] = useState('fixed');

    useEffect(() => {
        if(path === '/entrepreneurship') {
            setTypePosition('absolute');
        } else {
            setTypePosition('fixed');
        }
    }, [path]);

    useEffect(() => {
        const handleScroll = () => {
            if(path === '/entrepreneurship') {
                return;
            }
            const currentScroll = window.pageYOffset;
            const limit = (path === '/') ? 50 : 0;
            if (currentScroll > limit) {
                setIsFixed(true);
            } else if (currentScroll <= limit && oldScroll > currentScroll) {
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
        typePosition={typePosition}
        />
    );
}
export default ContainerHeader;