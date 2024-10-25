import React from "react";
import Logo from "@components/Atoms/Logo/index";
import SocialsList1 from "@components/Molecule/SocialsList1/SocialsList1";
import { CustomLink } from "@data/types";
import NcLink from '@components/Atoms/NcLink/NcLink';
export interface WidgetFooterMenu {
  id: string;
  title: string;
  menus: CustomLink[];
}

const ViewFooter: React.FC<any> = ({
  menuFooter = [],
  socialMedia
}) => {
  const renderWidgetMenuItem = (menu: WidgetFooterMenu, index: number) => {
    return (
      <div key={index} className="text-md">
        <h2 className="font-semibold text-neutral-700 dark:text-neutral-200">
          {menu?.section?.title}
        </h2>
        <ul className="mt-5 space-y-4">
          {menu?.section?.menu?.map((item, index) => (
            <li key={index}>
              <NcLink
                key={index}
                className="text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white"
                href={`/${item.href}`}
              >
                {item.text}
              </NcLink>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className="max-w-[1200px] mx-auto border-t-2 py-10">
      <div className="md:container grid grid-cols-2 gap-y-5 gap-x-5 sm:gap-x-8 md:grid-cols-3 lg:grid-cols-5 lg:gap-x-10 mx-5 md:mx-0">
        <div className="grid grid-cols-4 gap-5 col-span-2 md:col-span-4 lg:md:col-span-2 lg:flex lg:flex-col">
          <div className="col-span-2 md:col-span-1 ml-5">
            <Logo
              width={120}
            />
          </div>
          <div className="col-span-2 flex items-center md:col-span-3">
            <SocialsList1
              socialMedia={socialMedia}
              className="flex items-center space-x-3 lg:space-x-0 rtl:space-x-reverse lg:flex-col lg:space-y-2.5 lg:items-start" />
          </div>
        </div>
        {[{
          section: {
            title: 'Quantum',
            menu: [
              {
                text: 'Acerca de nosotros',
                href: 'about',
              },
              {
                text: 'Legal',
                href: 'contact',
              },
              {
                text: 'Blog',
                href: 'blog',
              },
            ]
          }
        },{
          section: {
            title: 'Support',
            menu: [
              {
                text: 'Pregunta Frecuentes',
                href: 'about',
              },
              {
                text: 'Ayuda',
                href: 'contact',
              },
              {
                text: 'Contacto',
                href: 'careers',
              }
            ]
          }
        },{
          section: {
            title: 'Productos',
            menu: [
              {
                text: 'Plan Tienda',
                href: 'about',
              },
              {
                text: 'Plan Servicios Personales',
                href: 'contact',
              }
            ]
          }
        }]?.map(renderWidgetMenuItem)}
      </div>
    </div>
  );
};

export default ViewFooter;
