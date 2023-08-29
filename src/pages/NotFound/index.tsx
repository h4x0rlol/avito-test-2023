import { Button, Result } from 'antd';
import { Link } from 'react-router-dom';
import { Paths } from '../../utils/';

export default function NotFound() {
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Link to={Paths.MAIN}>
          <Button type="primary">Back Home </Button>
        </Link>
      }
    />
  );
}
