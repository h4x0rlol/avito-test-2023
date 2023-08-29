import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import { Result } from 'antd';

export default function Error({ error }: { error: FetchBaseQueryError }) {
  if (
    error?.data &&
    typeof error.data === 'object' &&
    'message' in error.data &&
    typeof error.data.message === 'string'
  ) {
    return <Result status="error" title={error?.status ?? ''} subTitle={JSON.stringify(error.data.message)} />;
  }

  return (
    <Result
      status="error"
      title={error?.status ?? ''}
      subTitle={JSON.stringify(error?.data ?? 'Something went wrong')}
    />
  );
}
