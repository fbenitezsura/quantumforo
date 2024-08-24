'use client'
import ViewNameCategory from '@/app/components/Organisms/NameCategory/ViewNameCategory';
import { useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from '@clean/application/redux/hook';
import { getNotesByCategory, changePageNoteForCategory } from '@clean/application/redux/notes/notes.slice';

const ContainerNameCategory = ({
    detailCategory
}) => {

    const dispatch = useAppDispatch();

    const {
      loading,
      data,
      page,
      maxPage,
    } = useAppSelector(
      (state: any) => state.Notes.notesForCategory
    );
  
    useEffect(() => {
      dispatch(getNotesByCategory(detailCategory?.id))
    }, [page])    

    const handleChangePage = (page: number) => {
      dispatch(changePageNoteForCategory(page))
    }

    return (
        <ViewNameCategory 
        posts={data}
        detailCategory={detailCategory}
        handleLoadData={handleChangePage}
        currentPage={page}
        maxPage={maxPage}
        loading={loading}
        />
    )

}

export default ContainerNameCategory;