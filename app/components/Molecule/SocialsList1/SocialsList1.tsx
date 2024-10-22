import { SOCIALS_2 } from "@components/Molecule/SocialsList/SocialsList";
import { SocialType } from "@components/Atoms/SocialsShare/SocialsShare";
import React, { FC } from "react";

export interface SocialsList1Props {
  className?: string;
  socialMedia: Array<any>;
}

const socials: SocialType[] = SOCIALS_2;

const SocialsList1: FC<SocialsList1Props> = ({ socialMedia = [], className = "space-y-2.5" }) => {
  const renderItem = (item: SocialType, index: number) => {
    return (
      <a
        href={item.href}
        className="flex items-center text-2xl text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white leading-none space-x-3 rtl:space-x-reverse"
        key={index}
      >
        <img height="30" width="30" className="rounded-xl" src={item.icon}></img>
        <span className="hidden lg:block text-sm">{item.name}</span>
      </a>
    );
  };

  return (
    <div className={`nc-SocialsList1 ${className}`} data-nc-id="SocialsList1">
      {socialMedia.map(renderItem)}
    </div>
  );
};

export default SocialsList1;
