import React from 'react';
import { Tab } from '@headlessui/react';

type TabButtonProps = {
  children: React.ReactNode;
};

const TabButton: React.FC<TabButtonProps> = ({ children }) => (
  <Tab
    className="rounded-full py-1 px-3 text-sm/6 font-semibold text-white focus:outline-none 
    data-[selected]:bg-white/10 data-[hover]:bg-white/5 data-[selected]:data-[hover]:bg-white/10 
    data-[focus]:outline-1 data-[focus]:outline-white"
  >
    {children}
  </Tab>
);

export default TabButton;