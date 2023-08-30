import { Button, Result } from 'antd';
import { Link } from 'react-router-dom';
import { PATHS } from '../../utils/';

export default function NotFound() {
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Link to={PATHS.MAIN}>
          <Button type="primary">Back Home </Button>
        </Link>
      }
    />
  );
}
