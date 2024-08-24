import React, { FC } from "react";
import Avatar from "@components/Atoms/Avatar/Avatar";
import { PostDataType } from "@data/types";
import { DEMO_POSTS } from "@data/posts";
import Link from "next/link";
import { format } from 'date-fns'; 

const metaDemo: PostMeta2Props["meta"] = DEMO_POSTS[0];

export interface PostMeta2Props {
  className?: string;
  meta?: Pick<PostDataType, "date" | "author" | "categories" | "readingTime">;
  hiddenCategories?: boolean;
  size?: "large" | "normal";
  avatarRounded?: string;
}

const PostMeta2: FC<PostMeta2Props> = ({
  className = "leading-none",
  meta = metaDemo,
  hiddenCategories = true,
  size = "normal",
  avatarRounded,
}) => {
  const { date, author, categories, readingTime } = meta;

  function tiempoTranscurrido(dateString) {
    try{
      const date = new Date(dateString);
      const now = new Date();
      let difference = Math.abs(now.getTime() - date.getTime()) / 1000;  // Diferencia en segundos
      const timeUnits = [
          { name: 'segundo', duration: 60 },
          { name: 'minuto', duration: 60 },
          { name: 'hora', duration: 24 },
          { name: 'día', duration: 7 },
          { name: 'semana', duration: 4.34 },
          { name: 'año', duration: 10000 }  // Dejamos un valor grande para años, no volveremos a dividir después de esto
      ];

      for (let unit of timeUnits) {
          if (difference < unit.duration) {
              return `${Math.round(difference)} ${unit.name}${difference !== 1 ? 's' : ''}`;
          }
          difference /= unit.duration;
      }
    }catch(e) {
      console.log(e)
    }    
  }

  return (
    <div
      className={`nc-PostMeta2 flex items-center flex-wrap text-neutral-700 text-left dark:text-neutral-200 ${
        size === "normal" ? "text-xs" : "text-sm"
      } ${className}`}
    >
      <Link
        href={`/author/${author?.id.toString()}`}
        className="flex items-center space-x-2 rtl:space-x-reverse"
      >
        <Avatar
          radius={avatarRounded}
          sizeClass={
            size === "normal"
              ? "h-6 w-6 text-sm"
              : "h-10 w-10 sm:h-11 sm:w-11 text-xl"
          }
          imgUrl={author?.attributes?.avatar}
          userName={author?.attributes?.displayName}
        />
      </Link>
      <div className="ms-3 flex justify-around">
        <div className="flex items-center border-r-2 pr-2">
          <Link href={`/author/${author?.id}`} className="block">
            <span>Redactado por: {' '}</span><br />
            <span className="font-bold">{author?.attributes?.firstName} {author?.attributes?.lastName}</span>
          </Link>
        </div>
        {/*<div className="flex items-center border-r-2 px-2">
          <Link href={`/author/${author.firstName}`} className="block">
            <span>Revisado por: {' '}</span><br />
            <span className="font-bold">{author.firstName} {author.lastName}</span>
          </Link>
        </div>*/}
        <div className="flex items-center pl-2">
            Última Actualización: {' '}<br />
            {tiempoTranscurrido(date)}
        </div>
      </div>
    </div>
  );
};

export default PostMeta2;
