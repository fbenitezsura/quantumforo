'use client'
import ViewReviewForm from '@components/Organisms/Modal/ViewReviewForm'
import { useAppSelector } from '@/clean/application/redux/hook';
import { MODAL_TYPES, hideModal } from '@clean/application/redux/modal/modal.slice';
import { useAppDispatch } from '@clean/application/redux/hook';

const ContainerReviewForm = (props: any) => {

    const dispatch = useAppDispatch();

    const {
        isOpen,
        modalType
    } = useAppSelector(state => state.Modal)

    const handleAddReview = (formInfo) => {
        console.log('Add review',formInfo);
    }

    const handleClose = () => {
        dispatch(hideModal());
    }

    return (
        <ViewReviewForm
        isOpen={isOpen && modalType === MODAL_TYPES.ADD_REVIEW}
        handleAddReview={handleAddReview}
        handleClose={handleClose}
        />
    )
}

export default ContainerReviewForm;