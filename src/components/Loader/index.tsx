import { Spin } from 'antd';

export default function Loader() {
  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Spin />
    </div>
  );
}
