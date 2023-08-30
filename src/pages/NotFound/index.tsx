import { Button, Result } from 'antd';
import { Link } from 'react-router-dom';
import { PATHS } from '../../utils/';

type NotFoundProps = {
  withBackButton?: boolean;
};

export default function NotFound({ withBackButton = true }: NotFoundProps) {
  return (
    <Result
      status="404"
      title={
        <span
          style={{
            color: '#ffff',
          }}
        >
          404
        </span>
      }
      subTitle={
        <span
          style={{
            color: '#ffff',
            fontSize: '1.2rem',
          }}
        >
          Sorry, the page you visited does not exist
        </span>
      }
      extra={
        withBackButton ? (
          <Link to={PATHS.MAIN}>
            <Button>Back Home</Button>
          </Link>
        ) : null
      }
    />
  );
}
