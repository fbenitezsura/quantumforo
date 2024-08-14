'use client'
import StoreCard from '@components/molecules/shop/card/index';
import { TabGroup, TabList, TabPanel, TabPanels, Tab } from '@headlessui/react';
import TabButton from '@components/atom/TabButton/index';
import TabPanelContent from '@components/molecules/Tabs/index';
import { useState } from 'react';

const ViewSectionShop = ({
    storesData
}) => {

    const [selectedIndex, setSelectedIndex] = useState(0)

    return (
        <div className="flex h-screen w-full justify-center pt-8 px-4">
            <div className="w-full">
                <TabGroup selectedIndex={selectedIndex} onChange={setSelectedIndex}>
                    <TabList className="flex justify-around gap-4">
                        {storesData.map(({ name }, index) => (
                            <Tab
                                key={name}
                                className={selectedIndex === index ? "text-black text-[24px] font-bold" :
                                    "text-[#58c5f1] text-[24px]"}
                            >
                                {name}
                            </Tab>
                        ))}
                    </TabList>
                    <TabPanels className="mt-3">
                        {storesData.map(({ name, posts }) => (
                            <TabPanel key={name} className="rounded-xl bg-white/5 p-3">
                                <ul
                                className="grid grid-cols-12 gap-4">
                                    {posts.map((post, postIndex) => {
                                        return (
                                            <StoreCard
                                                key={postIndex}
                                                name={post.title}
                                                description={post.description}
                                                categories={post.categories}
                                                image={post.image}
                                                color={post.color || 'bg-white'}
                                                url={post.url}
                                            />
                                        )
                                    }
                                    )}
                                </ul>
                            </TabPanel>
                        ))}
                    </TabPanels>
                </TabGroup>
            </div>
        </div>
    );
}

export default ViewSectionShop;