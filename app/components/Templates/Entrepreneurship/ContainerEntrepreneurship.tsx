'use client'
import ViewEntrepreneurship from '@components/Organisms/Entrepreneurship/ViewEntrepreneurship';
import { useAppDispatch, useAppSelector } from '@clean/application/redux/hook';
import { useEffect, useRef, useState } from 'react';
import { getAllStore, searchStore } from '@clean/application/redux/store/store.slice';
import { useSearchParams } from 'next/navigation';
import React from 'react';
import useCheckMobileScreen from '@hooks/useCheckMobile';

interface StoreLocation {
  id: string;
  latitud: string;
  longitud: string;
  name: string;
  imgUrl: string;
  store_categories: {
    data: Array<{
      id: string;
      attributes: {
        Name: string;
      };
    }>;
  };
}

const ContainerEntrepreneurship = ({
}) => {

  const searchParams = useSearchParams()
  const isMobile = useCheckMobileScreen();
  const search = searchParams.get('search');
  const city = searchParams.get('city');

  const dispatch = useAppDispatch();

  const [viewType, setViewType] = useState('list');
  const [hoveredMarker, setHoveredMarker] = React.useState<StoreLocation | null>(null);
  const [clickMarker, setClickMarker] = React.useState<StoreLocation | null>(null);

  const [topPosition, setTopPosition] = useState(30); // Porcentaje inicial
  const [isDragging, setIsDragging] = useState(false);
  const grabbingRef = useRef(null);

  // Comienza a mover el componente
  const handleMouseDown = (e) => {
    document.body.style.overflow = 'hidden';
    setIsDragging(true);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;

    const containerHeight = grabbingRef.current.parentElement.offsetHeight;
    const delta = isMobile ? 80 : 30;
    const newTop = (e.clientY / containerHeight * 100) - delta; // Calcula el porcentaje
    // Limita el movimiento dentro del contenedor
    if (newTop >= 0 && newTop <= 100) {
      setTopPosition(newTop);
    }
  };

  const handleMouseUp = () => {
    document.body.style.overflow = 'auto';
    setIsDragging(false);
  };

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

  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    document.body.style.overflow = 'hidden';
    handleMouseDown({
      clientX: touch.clientX,
      clientY: touch.clientY,
    });
  };

  const handleTouchMove = (e) => {
    const touch = e.touches[0];
    handleMouseMove({
      clientX: touch.clientX,
      clientY: touch.clientY,
    });
  };

  const handleTouchEnd = () => {
    document.body.style.overflow = 'auto';
    handleMouseUp();
  };


  return (
    <ViewEntrepreneurship
      grabRef={grabbingRef}
      handleMouseDown={handleMouseDown}
      handleMouseMove={handleMouseMove}
      handleMouseUp={handleMouseUp}
      handleTouchStart={handleTouchStart}
      handleTouchMove={handleTouchMove}
      handleTouchEnd={handleTouchEnd}
      topPosition={topPosition}
      listStore={listSearchStore}
      loadingStore={loadingSearchStore}
      city={city}
      viewType={viewType}
      setViewType={setViewType}
      hoveredMarker={hoveredMarker}
      setHoveredMarker={setHoveredMarker}
      clickMarker={clickMarker}
      setClickMarker={setClickMarker}
    />
  )
}

export default ContainerEntrepreneurship;