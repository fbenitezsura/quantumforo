"use client";

import React, { FC } from "react";
import CategoryBadgeList from "@components/Molecules/CategoryBadgeList/CategoryBadgeList";
import SingleTitle from "@components/Atoms/Content/SingleTitle";
import PostMeta2 from "@components/Molecules/PostMeta2/PostMeta2";
import SingleMetaAction2 from "@components/Molecules/Content/SingleMetaAction";
import { DEMO_CATEGORIES } from "@data/taxonomies";

export interface SingleHeaderProps { 
  hiddenDesc?: boolean;
  titleMainClass?: string;
  className?: string;
  title?: string;
  desc?: string;
  author?: any;
  date?: Date;
}

const SingleHeader: FC<SingleHeaderProps> = ({
  titleMainClass,
  hiddenDesc = false,
  className = "",
  title,
  desc,
  author,
  date
}) => {
  return (
    <>
      <div className={`nc-SingleHeader ${className}`}>
        <div className="space-y-5">
          <CategoryBadgeList
            itemClass="!px-3"
            categories={[DEMO_CATEGORIES[1]]}
          />
          <SingleTitle
            mainClass={titleMainClass}
            title={title}
          />
          {!hiddenDesc && (
            <span className="block text-base text-neutral-500 md:text-lg dark:text-neutral-400 pb-1">
              {desc}
            </span>
          )}
          <div className="w-full border-b border-neutral-200 dark:border-neutral-700"></div>
          <div className="flex flex-col sm:flex-row justify-between sm:items-end space-y-5 sm:space-y-0 sm:space-x-5 rtl:space-x-reverse">
            <PostMeta2
              size="large"
              className="leading-none flex-shrink-0"
              hiddenCategories
              avatarRounded="rounded-full shadow-inner"
              meta={{author, date }}
            />
            {/*<SingleMetaAction2 />*/}
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleHeader;
