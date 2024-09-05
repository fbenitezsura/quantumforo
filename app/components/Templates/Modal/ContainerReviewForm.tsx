'use client'
import ViewReviewForm from '@components/Organisms/Modal/ViewReviewForm'
import { MODAL_TYPES, hideModal } from '@clean/application/redux/modal/modal.slice';
import { useAppDispatch, useAppSelector } from '@clean/application/redux/hook';
import { addReview } from '@/clean/application/redux/reviews/review.slice';

const ContainerReviewForm = ({
    detailStore
}) => {

    const dispatch = useAppDispatch();

    const {
        userInfo
    } = useAppSelector((state) => state.Auth);

    const {
        isOpen,
        modalType
    } = useAppSelector(state => state.Modal)

    const handleAddReview = (formInfo) => {
        if (userInfo?.id) {
            const payload = {
                data: {
                    ...formInfo,
                    store: {
                        connect: [{ id: detailStore.id, position: { end: true } }],
                        disconnect: [],
                    },
                    user: {
                        connect: [{ id: userInfo.id, position: { end: true } }],
                        disconnect: [],
                    }
                }
            }
            dispatch(addReview(payload));
            handleClose()
        }

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