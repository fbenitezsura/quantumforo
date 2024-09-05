// components/Header.tsx
import React from 'react';
import HambugerSvg from '@components/Atoms/svg/hamburger';
import XClose from '@components/Atoms/svg/x-close';
import ContainerSideBarMenu from '../../Templates/header/ContainerSideBarMenu';
import Link from 'next/link';
import MenuUser from '@/app/components/Molecule/header/MenuUser';

const Header: React.FC = ({
    isOpen,
    toggleMenu,
    isFixed,
    userLogged,
    userInfo,
    handleLogout
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
                <Link href="/">
                    <img src="/logo/logo.jpg" alt="Logo" className="h-[80px]" />
                </Link>


                {/* Botones */}
                <div className="flex flex-col items-end space-y-4">
                    {/* Primera fila de botones - Desktop */}
                    <div className="hidden md:flex space-x-4">
                        {userLogged ? (
                            <MenuUser
                            handleLogout={handleLogout}
                            userInfo={userInfo}
                            />
                        ) : (
                            <>
                                <Link href="/account/login">
                                    <button className="text-white px-4 py-2 border">Iniciar Sesion</button>
                                </Link>
                                <Link href="/account/register">
                                    <button className="bg-blue-500 text-white px-4 py-2 rounded">Quiero Registrarme</button>
                                </Link>
                            </>
                        )}

                    </div>

                    {/* Segunda fila de botones - Desktop */}
                    <div className="hidden md:flex space-x-4">
                        <Link href="/entrepreneurship">
                            <button className="text-white px-4 py-2">Emprendimientos</button>
                        </Link>
                        <Link href="/external-trade-broker/continentallogistics">
                            <button className="text-white px-4 py-2">Comercio Exterior</button>
                        </Link>
                        <Link href="/aboutUs">
                            <button className="text-white px-4 py-2">Sobre Nosotros</button>
                        </Link>
                        <Link href="/events">
                            <button className="text-white px-4 py-2">Eventos</button>
                        </Link>
                        <Link href="/testimonials">
                            <button className="text-white px-4 py-2">Testimonios</button>
                        </Link>
                        <Link href="/contact">
                            <button className="text-white px-4 py-2">Contacto</button>
                        </Link>
                        <Link href="/blog">
                            <button className="text-white px-4 py-2">Blog</button>
                        </Link>
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
                    userInfo={userInfo}
                    userLogged={userLogged}
                    handleLogout={handleLogout}
                />
            )}
        </header>


    );
};

export default Header;
