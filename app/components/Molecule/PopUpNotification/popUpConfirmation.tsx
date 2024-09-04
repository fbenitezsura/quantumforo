
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from "react";
const PopUpConfirmation = ({
  title = '',
  subtitle,
  isOpen = true,
  actionClose,
  textActionClose = 'No',
  actionConfirmation,
  textActionConfirmation = 'Si'
} : {
  title: string;
  subtitle: string,
  isOpen: boolean;
  textActionClose: string;
  textActionConfirmation: string;
  actionClose: () => void;
  actionConfirmation: () => void;
}) => {

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-[9992] " onClose={()=>{actionClose()}}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center  justify-center text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel
                className="absolute bottom-0 md:relative w-full max-w-md h-auto md:min-h-[184px] md:min-w-[604px] transform
                py-[30px] px-[10px] md:px-[90px] rounded-2xl text-center shadow-xl transition-all bg-white top-[40%] left-0 h-fit">
                <Dialog.Title
                  as="h3"
                  className="text-[20px] text-[#000000] font-medium max-w-[318px] md:max-w-[305px] mx-auto leading-6 text-center"
                >
                 {title || '¿ Mensaje de prueba ?'}
                </Dialog.Title>
                {subtitle && <span className="mt-[10px] text-[12.8px] leading-[19.2px] font-light">{subtitle}</span>}

                <div className="flex justify-center mt-[25px] text-[13px]">
                  <button
                   className="mr-[5px] md:mr-[16px] font-semibold"
                   onClick={()=>{actionClose()}}
                    >
                   {textActionClose}
                  </button>
                  <button
                  className="ml-[5px] md:ml-[16px] font-semibold"
                  onClick={()=>{
                    actionConfirmation();
                    setTimeout(() => {
                      actionClose()
                    },100)
                  }}
                    >
                   {textActionConfirmation}
                  </button>
                </div>

              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

export default PopUpConfirmation;
