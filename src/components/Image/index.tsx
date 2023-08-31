import { Image as AntdImage, ImageProps as AntdImageProps, Skeleton } from 'antd';
import { useState } from 'react';

type ImageProps = AntdImageProps & {
  withSkeleton?: boolean;
};

export default function Image({ withSkeleton = false, ...props }: ImageProps) {
  const [isLoading, setIsLoading] = useState(true);

  if (!withSkeleton) {
    return <AntdImage {...props} />;
  }

  return (
    <>
      <AntdImage
        wrapperStyle={{
          display: isLoading ? 'none' : 'inline-block',
          width: props.width,
        }}
        onLoad={() => setIsLoading(false)}
        onError={() => setIsLoading(false)}
        {...props}
      />

      <Skeleton.Image
        style={{
          display: isLoading ? 'flex' : 'none',
          height: '100%',
          aspectRatio: '16 / 9',
          width: props.width,
        }}
      />
    </>
  );
}
