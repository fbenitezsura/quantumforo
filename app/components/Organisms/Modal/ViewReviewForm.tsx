import AddReviewForm from "@/app/components/Molecule/form/addReviewForm";
import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'

const ViewReviewForm = ({
    isOpen,
    handleClose,
    handleAddReview
}) => {

    return (
        <Dialog 
        open={isOpen} 
        as="div" 
        className="fixed bg-transparent inset-0 z-[9999] top-[10%] flex justify-center focus:outline-none"
        onClose={()=>{}}>
            <DialogPanel>
                <AddReviewForm
                    handleAddReview={handleAddReview}
                    handleClose={handleClose}
                />
            </DialogPanel>
        </Dialog>
    );
}

export default ViewReviewForm;