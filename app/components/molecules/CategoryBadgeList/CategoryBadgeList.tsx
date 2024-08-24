'use client'
import { PostDataType } from "@data/types";
import React, { FC } from "react";
import Badge from "@components/Atoms/Badge/Badge";

export interface CategoryBadgeListProps {
  className?: string;
  itemClass?: string;
  category: any;
}

const CategoryBadgeList: FC<CategoryBadgeListProps> = ({
  className = "flex flex-wrap space-x-2",
  itemClass,
  category
}) => {
  return (
    <div
      className={`nc-CategoryBadgeList ${className}`}
      data-nc-id="CategoryBadgeList"
    >
      <Badge
        className={itemClass}
        key={category?.data?.id}
        name={category?.data?.attributes.name}
        href={category?.data?.attributes.href}
        color={category?.data?.attributes.color as any}
      />
    </div>
  );
};

export default CategoryBadgeList;
