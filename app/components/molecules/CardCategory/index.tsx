import React, { FC } from "react";
import { TaxonomyType } from "@data/types";
import Link from "next/link";
import { Image } from "@components/Atoms/Image/Image";
import useCheckMobileScreen from '@hooks/useCheckMobile';
export interface CardCategoryProps {
  className?: string;
  taxonomy: TaxonomyType;
}

const CardCategory: FC<CardCategoryProps> = ({
  className = "",
  taxonomy,
  key
}) => { 
  const isMobile = useCheckMobileScreen();
  const { count, name, href = "/", thumbnail } = taxonomy;
  return (
    <Link href={href} className={`nc-CardCategory3 flex flex-col ${className}`}>
      <div className="flex-shrink-0 relative w-full aspect-w-5 aspect-h-5 h-0 rounded-2xl overflow-hidden group">
        {thumbnail && (
        <Image
          width={isMobile ? 96 : 50}
          aspectRatio="3:2"
          src={thumbnail}
          alt={''}
        />
        )}
        <span className="opacity-0 group-hover:opacity-100 absolute inset-0 bg-black bg-opacity-10 transition-opacity"></span>
      </div>
      <div className="mt-4 ">
        <h2
          className={`text-base text-neutral-900 dark:text-neutral-100 font-semibold `}
        >
          {name}
        </h2>
        <span
          className={`block mt-1 text-sm text-neutral-6000 dark:text-neutral-400`}
        >
          {count} Articles
        </span>
      </div>
    </Link>
  );
};

export default CardCategory;
