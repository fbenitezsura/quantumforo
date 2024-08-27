'use client'
import ViewEntrepreneurship from '@components/Organisms/Entrepreneurship/ViewEntrepreneurship';
import { useAppDispatch, useAppSelector } from '@clean/application/redux/hook';
import { useEffect } from 'react';
import { getAllStore, searchStore } from '@clean/application/redux/store/store.slice';
import { useSearchParams } from 'next/navigation'

const ContainerEntrepreneurship = ({
}) => {

    const searchParams = useSearchParams()

    const search = searchParams.get('search');
    const city = searchParams.get('city');

    const dispatch = useAppDispatch();

    const {
        loadingSearchStore,
        listSearchStore,
        categorySelected,
        categories
    } = useAppSelector((state) => state.Store);

    useEffect(() => {
        const searchParams = { name: search, categoryName: search };
        dispatch(searchStore(searchParams));
    }, [search]);


    return (
        <ViewEntrepreneurship
        listStore={listSearchStore}
        loadingStore={loadingSearchStore}
        city={city}
        />
    )
}

export default ContainerEntrepreneurship;