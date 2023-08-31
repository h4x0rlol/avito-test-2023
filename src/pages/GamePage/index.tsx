import { Link, useParams } from 'react-router-dom';
import NotFound from '../NotFound';
import { gameIdSchema, useGetGameByIdQuery } from '../../api';
import Layout from '../../components/Layout';
import { BREAKPOINTS, PATHS } from '../../utils';
import IconText from '../../components/IconText';
import { LeftOutlined } from '@ant-design/icons';
import Error from '../../components/Error';
import { useMediaQuery } from '../../hooks';
import Loader from '../../components/Loader';
import GameCard from '../../components/Game/GameCard';

function GamePageHeader() {
  const isTablet = useMediaQuery(BREAKPOINTS.tablet);

  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Link
        style={{
          fontSize: '1.2rem',
          zIndex: '1',
        }}
        to={PATHS.MAIN}
      >
        <IconText icon={LeftOutlined} text="Back Home" />
      </Link>
      <span
        style={{
          position: isTablet ? 'absolute' : 'static',
          left: '0',
          right: '0',
          marginLeft: '0',
          marginRight: '0',
        }}
      >
        Free-To-Play Games
      </span>
    </div>
  );
}

function GamePageContent({ id }: { id: string }) {
  const { data: game, isFetching, isError, error } = useGetGameByIdQuery(id);

  if (isFetching) {
    return <Loader />;
  }

  if (isError && error) {
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
        <Error error={error} />
      </div>
    );
  }

  if (!game) {
    return null;
  }

  return <GameCard game={game} />;
}

export default function GamePage() {
  const { id } = useParams();

  const { success: isGameIdValid } = gameIdSchema.safeParse(id);

  if (!id || !isGameIdValid) {
    return <NotFound />;
  }

  return <Layout content={<GamePageContent id={id} />} header={<GamePageHeader />} />;
}
