import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Link from "next/link";
import MenuUser from "./MenuUser";

interface UserInfoType {
  customerId: number;
  firstName: string;
  lastName: string;

}

interface BalanceType {
  total: number;
  balances: {
    sb: number;
  };
  loadingGetBalanceTruePlay: boolean;
}

type SidebarAccountMenuMobileProps = {
  userLogged: boolean,
  userInfo: any,
  handleLogout: () => void,
  isAccountMenuMobileOpen: boolean,
  openAccountMenuMobileSidebar: () => void,
  closeAccountMenuMobileSidebar: () => void
};
const SiderbarAccountMenuMobile = ({
  userLogged,
  userInfo,
  handleLogout,
  isAccountMenuMobileOpen,
  openAccountMenuMobileSidebar,
  closeAccountMenuMobileSidebar
}: SidebarAccountMenuMobileProps) => {

  return (
    <Transition.Root
      show={isAccountMenuMobileOpen}
      as={Fragment}
    >
      <Dialog
        as="div"
        className={`z-[9999] relative`}
        onClose={() => {
          closeAccountMenuMobileSidebar();
        }}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex w-[85%] pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div
                    className={`absolute w-full max-w-[284px] right-0 overflow-y-scroll pb-5 overflow-x-hidden h-[100vh] top-0 transition-all bg-[#1C1C23] pt-10 px-4 z-[500]`}>
                    <div
                      onClick={() => {
                        isAccountMenuMobileOpen ? closeAccountMenuMobileSidebar() : openAccountMenuMobileSidebar()
                      }}
                      className="user-close absolute right-4 top-2 cursor-pointer">
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M7.07065 19.7995C6.75823 20.1119 6.75823 20.6184 7.07065 20.9308C7.38307 21.2433 7.8896 21.2433 8.20202 20.9308L14.0016 15.1313L19.7986 20.9283C20.111 21.2407 20.6175 21.2407 20.9299 20.9283C21.2424 20.6159 21.2424 20.1093 20.9299 19.7969L15.1329 13.9999L20.9299 8.20291C21.2424 7.89049 21.2424 7.38396 20.9299 7.07154C20.6175 6.75912 20.111 6.75912 19.7986 7.07154L14.0016 12.8685L8.20202 7.069C7.8896 6.75658 7.38307 6.75658 7.07065 7.069C6.75823 7.38142 6.75823 7.88795 7.07065 8.20037L12.8702 13.9999L7.07065 19.7995Z"
                          fill="#878787"
                        />
                      </svg>
                    </div>
                    <div className="text-white ">
                      <div className="flex justify-center items-center gap-4 mb-4">
                        <img src="/logo/logo.jpg" alt="Logo" className="h-[80px]" />
                      </div>
                      <div className="flex justify-center items-center mb-3.5">
                        <div className="flex flex-col justify-start items-center text-[#ffffff70] text-[14px]">
                          {userLogged ? (
                            <div className="w-full flex">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                              </svg>
                              <p className="ml-2">{userInfo?.username}</p>
                            </div>
                          ) : (
                            <>
                              <Link href="/account/login">
                                <button
                                  onClick={() => {
                                    closeAccountMenuMobileSidebar()
                                  }}
                                  className="text-white">Iniciar Sesion</button>
                              </Link>
                              <Link
                                onClick={() => {
                                  closeAccountMenuMobileSidebar()
                                }}
                                href="/account/register">
                                <button className="bg-blue-500 text-white mt-3 px-4 py-2 rounded">Quiero Registrarme</button>
                              </Link>
                            </>
                          )}

                        </div>
                      </div>
                      <div className="flex justify-start items-center mb-3.5">
                        <div className="flex flex-col space-x-4 mt-10 w-full">
                          <Link href="/entrepreneurship">
                            <button className="text-white text-left px-4 py-2 w-auto">Emprendimientos</button>
                          </Link>
                          <Link href="/nosotros">
                            <button className="text-white px-4 py-2">Sobre Nosotros</button>
                          </Link>
                          <Link href="/eventos">
                            <button className="text-white px-4 py-2">Eventos</button>
                          </Link>
                          <Link href="/testimonios">
                            <button className="text-white px-4 py-2">Testimonios</button>
                          </Link>
                          <Link href="/contacto">
                            <button className="text-white px-4 py-2">Contacto</button>
                          </Link>
                          <Link href="/blog">
                            <button className="text-white px-4 py-2">Blog</button>
                          </Link>
                          {userLogged && (
                            <button
                              className="p-3 rounded-md bg-red-300 mt-5"
                              onClick={handleLogout}
                            >
                              Cerrar Sesión
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default SiderbarAccountMenuMobile;
