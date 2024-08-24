'use client'
import { useAppSelector, useAppDispatch } from '@clean/application/redux/hook';
import { useEffect } from "react";
import { getPrimaryHomeBanner } from '@clean/application/redux/banners/banners.slice';
import ViewBannerHome from "@components/Organism/Home/Banners/ViewBannerHome";

const ContainerPrimaryBanner = ({
}) => {

  const dispatch = useAppDispatch();

  const primaryBannersHome = useAppSelector(
    (state: any) => state.Banners.primaryBannersHome
  );

  useEffect(() => {
    dispatch(getPrimaryHomeBanner())
  }, [])

  return (
    <>
      <ViewBannerHome
      posts={primaryBannersHome}
      />
    </>
  )

}

export default ContainerPrimaryBanner;
