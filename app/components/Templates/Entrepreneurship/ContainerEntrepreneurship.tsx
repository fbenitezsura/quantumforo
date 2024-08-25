'use client'
import ViewEntrepreneurship from '@components/Organisms/Entrepreneurship/ViewEntrepreneurship';
import { useAppDispatch, useAppSelector } from '@clean/application/redux/hook';
import { useEffect } from 'react';
import { getAllStore } from '@clean/application/redux/store/store.slice';
import { useSearchParams } from 'next/navigation'

const ContainerEntrepreneurship = ({
}) => {

    const searchParams = useSearchParams()

    const search = searchParams.get('search');
    const city = searchParams.get('city');

    const dispatch = useAppDispatch();

    const {
        loadingGetStore,
        listStore,
        categorySelected,
        categories
    } = useAppSelector((state) => state.Store);

    useEffect(() => {
        dispatch(getAllStore());
    }, [categorySelected]);

    console.log('listStore',listStore)


    return (
        <ViewEntrepreneurship
        listStore={listStore}
        loadingStore={loadingGetStore}
        city={city}
        />
    )
}

export default ContainerEntrepreneurship;