'use client'
import ViewCategories from '@/app/components/Organisms/Categories/ViewCategories';
import { useAppDispatch, useAppSelector } from '@clean/application/redux/hook';
import { useEffect } from 'react';
import { getCategories } from '@clean/application/redux/categories/categories.slice';

const ContainerCategories = () => {

    const dispatch = useAppDispatch();

    const {
        categories,
        loadingGetCategories
    } = useAppSelector((state: any) => state.Categories);

    useEffect(() => {
        dispatch(getCategories());
    }, [])

    return (
        <ViewCategories 
        categories={categories}
        loading={loadingGetCategories}
        />
    )

}

export default ContainerCategories;