import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import { Result } from 'antd';
import NotFound from '../../pages/NotFound';

export default function Error({ error }: { error: FetchBaseQueryError | SerializedError }) {
  if ('status' in error && error.status === 404) {
    return <NotFound withBackButton={false} />;
  }

  if (
    'data' in error &&
    error?.data &&
    typeof error.data === 'object' &&
    'message' in error.data &&
    typeof error.data.message === 'string' &&
    'status' in error
  ) {
    return (
      <Result
        status="error"
        title={
          <span
            style={{
              color: '#ffff',
            }}
          >
            error.status
          </span>
        }
        subTitle={
          <span
            style={{
              color: '#ffff',
              fontSize: '1.2rem',
            }}
          >
            error.data.message
          </span>
        }
      />
    );
  }

  return (
    <Result
      status="error"
      title={
        <span
          style={{
            color: '#ffff',
          }}
        >
          Error
        </span>
      }
      subTitle={
        <span
          style={{
            color: '#ffff',
            fontSize: '1.2rem',
          }}
        >
          Something went wrong
        </span>
      }
    />
  );
}
