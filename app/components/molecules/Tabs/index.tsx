import React from 'react';
import TabItem from '@components/atom/TabItem/index';

type Post = {
  id: number;
  title: string;
  date: string;
  commentCount: number;
  shareCount: number;
};

type TabPanelContentProps = {
  posts: Post[];
};

const TabPanelContent: React.FC<TabPanelContentProps> = ({ posts }) => (
  <ul>
    {posts.map((post) => (
      <TabItem
        key={post.id}
        title={post.title}
        date={post.date}
        commentCount={post.commentCount}
        shareCount={post.shareCount}
      />
    ))}
  </ul>
);

export default TabPanelContent;