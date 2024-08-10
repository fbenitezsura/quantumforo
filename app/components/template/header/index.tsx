'use client';
import ViewHeader from '@components/organism/header/index'
import { useEffect, useState } from 'react';

const ContainerHeader = () => {

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


    return (
        <ViewHeader 
        isOpen={isOpen}
        toggleMenu={toggleMenu}
        isFixed={isFixed}
        />
    );
}
export default ContainerHeader;