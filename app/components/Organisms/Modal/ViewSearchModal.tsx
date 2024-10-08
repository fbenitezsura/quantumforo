import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import SearchMobileForm from '@/app/components/Molecule/form/searchMobileForm';

export default function ViewSearchModal({
    isOpen,
    handleSearch,
    handleClose
}) {

    return (
        <Dialog open={isOpen} as="div" className="fixed bg-[#f2f2f2] inset-0 z-[9999] flex justify-center focus:outline-none" onClose={handleClose}>
            {/* Fondo oscuro */}
            <div className="fixed inset-0" aria-hidden="true"></div>
            <div className="absolute w-full top-2 flex items-center justify-around">
                <svg
                    onClick={handleClose}
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="rounded-full focus:outline-none size-10">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                <h2 className="text-xl font-bold">Emprendimientos</h2>
                <div />
            </div>
            {/* Panel del diálogo */}
            <DialogPanel>
                <SearchMobileForm 
                handleSearch={handleSearch}
                />
            </DialogPanel>            
        </Dialog>
    )
}
