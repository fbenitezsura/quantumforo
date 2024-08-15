'use client'
import StoreCard from '@components/molecules/shop/card/index';
import { TabGroup, TabList, TabPanel, TabPanels, Tab } from '@headlessui/react';
import TabButton from '@components/atom/TabButton/index';
import TabPanelContent from '@components/molecules/Tabs/index';
import { useState } from 'react';
import Loading from '@components/molecules/loading/index';
import NoData from '@components/molecules/noData/index';

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
                <TabGroup selectedIndex={selectedIndex} onChange={setSelectedIndex}>
                    <TabList className="flex justify-around gap-4">
                        {storesData?.map(({ name }, index) => (
                            <Tab
                                key={name}
                                className={categorySelected === name ? "text-black text-[24px] font-bold" :
                                    "text-[#58c5f1] text-[24px]"}
                                onClick={() => handleSelectedCategory(name)}
                            >
                                {name}
                            </Tab>
                        ))}
                    </TabList>
                    <TabPanels className="mt-3">
                        {loadingGetStore && <Loading text="Cargando tiendas..." />}
                        {!loadingGetStore && listStore.length === 0 &&
                            <div className="mt-[100px]">
                                <NoData />
                            </div>}
                        {listStore.length > 0 && listStore.map((store, index) => {
                            return (
                                <TabPanel key={store.title || index} className="rounded-xl bg-white/5 p-3">
                                    <ul className="grid grid-cols-12 gap-4">
                                        <StoreCard
                                            key={store.url}  // Usar 'url' o un identificador único si está disponible
                                            name={store.Name}
                                            description={store.Description}
                                            categories={store.categories}
                                            image={store.imgUrl}
                                            color={store.backgroundColor || 'bg-white'}
                                            url={store.Url}
                                        />
                                    </ul>
                                </TabPanel>
                            );
                        })}
                    </TabPanels>
                </TabGroup>
            </div>
        </div>
    );
}

export default ViewSectionShop;