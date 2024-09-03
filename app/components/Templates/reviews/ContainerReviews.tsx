'use client'
import ViewReviews from '@components/Organisms/reviews/ViewReviews';
import { useAppDispatch } from '@clean/application/redux/hook';
import { showModal, MODAL_TYPES } from '@clean/application/redux/modal/modal.slice';

const ContainerReview = () => {

    const dispatch = useAppDispatch();

    const handleOpenAddReview = () => {
        dispatch(showModal(MODAL_TYPES.ADD_REVIEW));
    }

    return (
        <ViewReviews 
        handleOpenAddReview={handleOpenAddReview}
        />
    )
}

export default ContainerReview;