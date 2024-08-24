import React, { FC } from "react";
import { Image, ImageProps } from "@components/Atoms/Image/Image";

export interface NcImageProps extends ImageProps {
  containerClassName?: string;
}

const NcImage: FC<NcImageProps> = ({
  containerClassName = "w-full h-full",
  alt = "nc-imgs",
  className = "object-cover",
  sizes = "",
  ...args
}) => {
  return (
    <Image className={className} alt={alt} {...args} />
  );
};

export default NcImage;
