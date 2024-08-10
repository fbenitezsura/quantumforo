import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import LinkElement from '@components/atom/link/index';

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
  handleLogout: () => void,
  isAccountMenuMobileOpen: boolean,
  openAccountMenuMobileSidebar: () => void,
  closeAccountMenuMobileSidebar: () => void,
};
const SidebarAccountMenuMobile = ({
  handleLogout,
  isAccountMenuMobileOpen,
  openAccountMenuMobileSidebar,
  closeAccountMenuMobileSidebar,
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
                      <div className="flex items-center gap-4 mb-4">
                        <div
                        onClick={()=>{
                          closeAccountMenuMobileSidebar();
                        }}
                        className="rounded-full w-10 h-10 p-1 md:hidden block relative">
                          <div className="opacity-30 mix-blend-normal absolute left-0 top-0 rounded-full w-10 h-10 border-blur border-2 border-solid border-l-0 border-b-0"></div>
                        </div>
                      </div>
                      <div className="flex justify-between items-center mb-3.5">
                        <div className="flex items-center text-[#ffffff70] text-[14px]">
                          <img src="/assets/bonus.png" alt="" className="mr-1.5" />{" "}
                          Bonos
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

export default SidebarAccountMenuMobile;
