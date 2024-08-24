'use client'
import ViewSectionShop from '@/app/components/Organisms/home/SectionShop/index';
import { getAllStore } from '@clean/application/redux/store/store.slice';
import { useAppDispatch, useAppSelector } from '@clean/application/redux/hook';
import { useEffect } from 'react';
import { setCategorySelected } from '@clean/application/redux/store/store.slice';

const SectionShop = () => {

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

  const handleSelectedCategory = (category: string) => {
    dispatch(setCategorySelected(category));
  };

  return (
    <ViewSectionShop
      storesData={categories}
      loadingGetStore={loadingGetStore}
      listStore={listStore}
      handleSelectedCategory={handleSelectedCategory}
      categorySelected={categorySelected}
    />
  );
}

export default SectionShop;