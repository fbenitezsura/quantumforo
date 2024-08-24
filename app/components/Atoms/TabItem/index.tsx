import React from 'react';

type TabItemProps = {
  title: string;
  date: string;
  commentCount: number;
  shareCount: number;
};

const TabItem: React.FC<TabItemProps> = ({ title, date, commentCount, shareCount }) => (
  <li className="relative rounded-md p-3 text-sm/6 transition hover:bg-white/5">
    <a href="#" className="font-semibold text-white">
      <span className="absolute inset-0" />
      {title}
    </a>
    <ul className="flex gap-2 text-white/50" aria-hidden="true">
      <li>{date}</li>
      <li aria-hidden="true">&middot;</li>
      <li>{commentCount} comments</li>
      <li aria-hidden="true">&middot;</li>
      <li>{shareCount} shares</li>
    </ul>
  </li>
);

export default TabItem;