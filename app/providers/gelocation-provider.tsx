'use client'
import { getLocationCustomer, revalidateCountry } from '@clean/application/redux/geoLocation/geolocation.slice';
import { useEffect } from 'react';
import { addMinutes, isAfter, parseISO } from 'date-fns';
import { useAppDispatch, useAppSelector } from '@clean/application/redux/hook';

const CACHE_FP = 1440; // 1 day in min
export const GeoLocationProvider = ({ children }) => {

  const dispatch = useAppDispatch();
  const {
    lastUpdatedFp
  } = useAppSelector((state) => state.GeoLocation);


  useEffect(() => {
      if (lastUpdatedFp) {
        const limitCache = addMinutes(parseISO(lastUpdatedFp), CACHE_FP);
        if (isAfter(new Date(), limitCache)) {
          window && dispatch(getLocationCustomer());
        }
      } else {
        window && dispatch(getLocationCustomer());
      }
  }, []);

  useEffect(() => {
    dispatch(revalidateCountry());
  }, []);

  return (
    children
  )

}

export default GeoLocationProvider;
