import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import { Result } from 'antd';

export default function Error({ error }: { error: FetchBaseQueryError | SerializedError }) {
  if (
    'data' in error &&
    error?.data &&
    typeof error.data === 'object' &&
    'message' in error.data &&
    typeof error.data.message === 'string' &&
    'status' in error
  ) {
    return <Result status="error" title={error.status} subTitle={error.data.message} />;
  }

  return <Result status="error" title="Error" subTitle="Something went wrong" />;
}
