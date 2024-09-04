'use client'
import StoreCard from '@/app/components/Molecule/shop/card/index';
import { TabGroup, TabList, TabPanel, TabPanels, Tab } from '@headlessui/react';
import TabButton from '@components/Atoms/TabButton/index';
import TabPanelContent from '@/app/components/Molecule/Tabs/index';
import { useState } from 'react';
import LoadingSpinner from '@/app/components/Molecule/LoadingSpinner';
import NoData from '@/app/components/Molecule/noData/index';
import Link from 'next/link';

const ViewSectionShop = ({
    storesData,
    loadingGetStore,
    listStore,
    handleSelectedCategory,
    categorySelected
}) => {

    const [selectedIndex, setSelectedIndex] = useState(0);

    return (
        <div className="flex h-screen w-full justify-center pt-8 px-4">
            <div className="w-full">
                {loadingGetStore && <LoadingSpinner text="Cargando tiendas..." />}
                {!loadingGetStore && listStore?.length === 0 &&
                    <div className="mt-[100px]">
                        <NoData />
                    </div>}
                {listStore?.length > 0 && (
                    <ul className="grid grid-cols-12 gap-4">
                        {listStore?.map((store) => {
                            return (
                                <StoreCard
                                    className="col-span-12 md:col-span-3"
                                    id={store?.id}
                                    key={store?.url}
                                    name={store?.Name}
                                    description={store?.Description}
                                    categories={store?.categories}
                                    image={store?.imgUrl}
                                    color={store?.backgroundColor || 'bg-white'}
                                    url={store?.Url}
                                />
                            );
                        })}
                    </ul>
                )}
            </div>
        </div>
    );
}

export default ViewSectionShop;