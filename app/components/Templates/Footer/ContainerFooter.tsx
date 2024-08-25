'use client'
import { getMenuFooter } from '@clean/application/redux/footer/footer.slice';
import { useAppDispatch, useAppSelector } from '@clean/application/redux/hook';
import { addMinutes, isAfter, parseISO } from 'date-fns';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
const CACHE_FOOTER = 15; // min
const ViewFooter = dynamic(
  () => import('@components/Organisms/Footer/ViewFooter')
)
const ContainerFooter = () => {

  const dispatch = useAppDispatch();

  const {
    menuFooter,
    socialMedia
  } = useAppSelector((state: any) => state.Footer);

  const lastUpdatedFooter = useAppSelector(
    (state: any) => state.Footer.lastUpdatedFooter
  );

  useEffect(() => {
    if (lastUpdatedFooter !== null) {
      const limitCache = addMinutes(parseISO(lastUpdatedFooter), CACHE_FOOTER);
      if (isAfter(new Date(), limitCache)) {
        dispatch(getMenuFooter());
      }
    } else {
      dispatch(getMenuFooter());
    }
  }, [lastUpdatedFooter]);

  return (
    <ViewFooter
    menuFooter={menuFooter}
    socialMedia={socialMedia}
    />
  );
};

export default ContainerFooter;
