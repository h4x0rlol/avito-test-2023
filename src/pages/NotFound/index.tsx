import { Button, Result } from 'antd';
import { Link } from 'react-router-dom';
import { PATHS } from '../../utils/';

type NotFoundProps = {
  title?: string;
  text?: string;
  withBackButton?: boolean;
};

export default function NotFound({
  title = '404',
  text = 'Sorry, the page you visited does not exist',
  withBackButton = true,
}: NotFoundProps) {
  return (
    <Result
      status="404"
      title={
        <span
          style={{
            color: '#ffff',
          }}
        >
          {title}
        </span>
      }
      subTitle={
        <span
          style={{
            color: '#ffff',
            fontSize: '1.2rem',
          }}
        >
          {text}
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
