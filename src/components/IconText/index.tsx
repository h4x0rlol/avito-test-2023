import React from 'react';
import { Space } from 'antd';

type IconTextProps = {
  icon: React.FC;
  text: string;
};

export default function IconText({ icon, text }: IconTextProps) {
  return (
    <Space
      style={{
        color: '#ffff',
      }}
    >
      {React.createElement(icon)}
      {text}
    </Space>
  );
}
