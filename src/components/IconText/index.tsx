import { Space } from 'antd';
import { FC, createElement } from 'react';

type IconTextProps = {
  icon: FC;
  text: string;
};

export default function IconText({ icon, text }: IconTextProps) {
  return (
    <Space
      style={{
        color: '#ffff',
      }}
    >
      {createElement(icon)}
      {text}
    </Space>
  );
}
