import { Image as AntdImage } from 'antd';

type ImageProps = {
  width: number;
  src: string;
  alt: string;
};

export default function Image(props: ImageProps) {
  return <AntdImage preview={false} width={props.width} alt={props.alt} src={props.src} />;
}
