import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import Link from 'next/link';

export default function UserMenu({ 
    handleLogout,
    userInfo 
}) {
    console.log('userInfo', userInfo);

    return (
        <div className="relative w-52 text-right pt-5 pb-[-10px]">
            <Menu>
                <MenuButton className="inline-flex items-center gap-2 rounded-md bg-gray-800 py-2 px-3 text-sm font-semibold text-white shadow-inner shadow-white/10 focus:outline-none hover:bg-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>

                    <p className="text-xl font-bold">{userInfo?.username}</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4 fill-white/60">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                </MenuButton>

                <MenuItems
                    transition
                    className="absolute right-0 mt-2 w-52 rounded-xl border border-white/5 bg-gray-800 p-1 text-sm text-white shadow-lg focus:outline-none"
                >
                    <MenuItem>
                        {({ active }) => (
                            <Link href="/account/dashboard/profile">
                                <button
                                    className={`${active ? 'bg-gray-700' : ''
                                        } group flex w-full items-center gap-2 rounded-lg py-2 px-3`}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    </svg>

                                    Perfil
                                </button>
                            </Link>

                        )}
                    </MenuItem>
                    <div className="my-1 h-px bg-white/10" />
                    <MenuItem>
                        {({ active }) => (
                            <button
                                onClick={handleLogout}
                                className={`${active ? 'bg-gray-700' : ''
                                    } group flex w-full items-center gap-2 rounded-lg py-2 px-3`}
                            >
                                <span className="size-4 text-white/60">🔒</span>
                                Cerrar sesión
                            </button>
                        )}
                    </MenuItem>
                </MenuItems>
            </Menu>
        </div>
    );
}
