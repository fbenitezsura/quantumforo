'use client'
import { useState } from "react";
import ViewDraggable from "@components/Organisms/Draggable/index";
import { useAppSelector } from "@clean/application/redux/hook";

const ContainerDraggable = () => {

  const {
    loadingSearchStore,
    listSearchStore,
} = useAppSelector((state) => state.Store);

  return (
    <ViewDraggable
      listStore={listSearchStore}
      loadingStore={loadingSearchStore}
    />
  )
}

export default ContainerDraggable;