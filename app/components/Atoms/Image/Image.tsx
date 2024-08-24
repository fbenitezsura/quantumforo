import type {
  ImageLoaderProps,
  ImageProps as NextImageProps,
} from 'next/image';
import NextImage from 'next/image';
import { useCallback } from 'react';

export type ImageProps = {
  width: number;
  aspectRatio: AspectRatio;
  fill?: boolean;
  fit?: any;
} & DistributiveOmit<NextImageProps, 'height' | 'layout'>; // Omit the layout prop

export function Image({
  width,
  fill = true,
  fit = 'fill',
  aspectRatio,
  ...nextImageProps
}: ImageProps) {

  const height = calcAspectRatio(aspectRatio, width);

  const imageLoader = useCallback(
    (loaderArgs: ImageLoaderProps) => {
      const h = calcAspectRatio(aspectRatio, loaderArgs.width);
      return `${loaderArgs.src}?w=${loaderArgs.width}&h=${h}&fit=fill&fill=blu&auto=compress`;
    },
    [aspectRatio]
  );

  return (
    <NextImage
      {...nextImageProps}
      loader={imageLoader}
      width={width}
      height={height}
      objectFit={fit}
    />
  );
}

export type ImageFit = 'pad' | 'fill' | 'scale' | 'crop' | 'thumb';
export type AspectRatio =
  | '16:9'
  | '9:16'
  | '4:3'
  | '1:1'
  | '3:2'
  | '9:12'
  | '3:1'
  | '2:3';

type DistributiveOmit<T, K extends keyof T> = T extends unknown
  ? Omit<T, K>
  : never;

const aspectRatioToRatio: Record<AspectRatio, number> = {
  '1:1': 1,
  '16:9': 9 / 16,
  '9:16': 16 / 9,
  '4:3': 3 / 4,
  '2:3': 3 / 2,
  '3:2': 2 / 3,
  '3:1': 1 / 3,
  '9:12': 12 / 9,
};

function calcAspectRatio(aspectRatio: AspectRatio, width: number): number {
  const ratio = aspectRatioToRatio[aspectRatio];
  return Math.floor(width * ratio);
}
