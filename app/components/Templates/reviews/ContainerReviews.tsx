'use client'
import ViewReviews from '@components/Organisms/reviews/ViewReviews';
import { useAppDispatch, useAppSelector } from '@clean/application/redux/hook';
import { showModal, MODAL_TYPES } from '@clean/application/redux/modal/modal.slice';
import { useEffect } from 'react';
import { getReview, checkCanAddReview } from '@clean/application/redux/reviews/review.slice';

const ContainerReview = ({
    detailStore
}) => {

    const dispatch = useAppDispatch();

    const {
        loadingGetReviews,
        reviewStore,
        canAddReview
    } = useAppSelector((state) => state.Reviews);

    const {
        userInfo,
        userLogged
    } = useAppSelector((state) => state.Auth);

    useEffect(() => {
        if (detailStore?.id) {
            dispatch(getReview({ storeId: detailStore.id }))
        }
        if(userInfo?.id && detailStore?.id){
            dispatch(checkCanAddReview({
                userId: userInfo.id,
                storeId: detailStore.id
            }))
        }
    }, [detailStore])

    const handleOpenAddReview = () => {
        dispatch(showModal(MODAL_TYPES.ADD_REVIEW));
    }

    return (
        <ViewReviews
            handleOpenAddReview={handleOpenAddReview}
            detailStore={detailStore}
            reviewStore={reviewStore}
            loadingGetReviews={loadingGetReviews}
            canAddReview={canAddReview}
            userLogged={userLogged}
        />
    )
}

export default ContainerReview;