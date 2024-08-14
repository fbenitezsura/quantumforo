// components/Header.tsx
import React from 'react';
import HambugerSvg from '@components/atom/svg/hamburger';
import XClose from '@components/atom/svg/x-close';
import ContainerSideBarMenu from '../../template/header/ContainerSideBarMenu';

const Header: React.FC = ({
    isOpen,
    toggleMenu,
    isFixed
}) => {

    return (
        <header
            style={{
                background: isFixed ? '#5c5a5a' : 'transparent',
            }}
            className="w-full fixed bg-gray-100 border-gray-300 pt-6 p-4 z-[100]"
        >
            <div className="max-w-7xl mx-auto flex justify-between items-center h-[80px]">
                {/* Logo */}
                <img src="/logo/logo.jpg" alt="Logo" className="h-full" />

                {/* Botones */}
                <div className="flex flex-col items-end space-y-4">
                    {/* Primera fila de botones - Desktop */}
                    <div className="hidden md:flex space-x-4">
                        <button className="text-white">Iniciar Sesion</button>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded">Quiero Registrarme</button>
                    </div>

                    {/* Segunda fila de botones - Desktop */}
                    <div className="hidden md:flex space-x-4">
                        <button className="text-white px-4 py-2">Explorar Emprendimientos</button>
                        <button className="text-white px-4 py-2">Categorias</button>
                        <button className="text-white px-4 py-2">Sobre Nosotros</button>
                        <button className="text-white px-4 py-2">Eventos</button>
                        <button className="text-white px-4 py-2">Testimonios</button>
                        <button className="text-white px-4 py-2">Contacto</button>
                        <button className="text-white px-4 py-2">Blog</button>
                    </div>
                </div>

                {/* Hamburger Menu - Mobile */}
                <div className="md:hidden flex items-center">
                    <button onClick={toggleMenu}>
                        {isOpen ? (
                            <XClose className="h-6 w-6 text-blue-500" />
                        ) : (
                            <HambugerSvg className="h-6 w-6 text-blue-500" />
                        )}
                    </button>
                </div>
            </div>

            {/* Menú desplegable en Mobile */}
            {isOpen && (
                <ContainerSideBarMenu
                    isOpen={isOpen}
                    toggleMenu={toggleMenu}
                />
            )}
        </header>


    );
};

export default Header;
