import { Link, useParams } from 'react-router-dom';
import NotFound from '../NotFound';
import { gameIdSchema, useGetGameByIdQuery } from '../../api';
import Layout from '../../components/Layout';
import { BREAKPOINTS, PATHS, formatDate } from '../../utils';
import IconText from '../../components/IconText';
import { AndroidOutlined, BankOutlined, BookOutlined, CalendarOutlined, LeftOutlined } from '@ant-design/icons';
import { Card, Carousel, Divider, Image, Spin } from 'antd';
import Meta from 'antd/es/card/Meta';
import Error from '../../components/Error';
import { useMediaQuery } from '../../hooks';

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
  const isTablet = useMediaQuery(BREAKPOINTS.tablet);

  const { data: game, isFetching, isError, error } = useGetGameByIdQuery(id);

  if (isFetching) {
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

  if (game) {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '16px',
          flexWrap: 'wrap',
        }}
      >
        <Card
          style={{
            width: 400,
            fontSize: '1.2rem',
            backgroundColor: '#272b30',
            border: '1px solid rgba(28,28,28,.6)',
            boxShadow: '0 .125rem .25rem rgba(0,0,0,.075)',
          }}
          cover={<Image alt={game.title} src={game.thumbnail} />}
        >
          <Meta
            title={
              <span
                style={{
                  fontSize: '1.5rem',
                  color: '#ffff',
                }}
              >
                {game.title}
              </span>
            }
          />

          <Divider />
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              marginTop: '8px',
              gap: '8px',
            }}
          >
            <IconText icon={AndroidOutlined} text={`Developer: ${game.developer}`} />
            <IconText icon={BankOutlined} text={`Publisher: ${game.publisher}`} />
            <IconText icon={BookOutlined} text={`Genre: ${game.genre}`} />
            <IconText icon={CalendarOutlined} text={`Release date: ${formatDate(game.release_date)}`} />
            {game.minimum_system_requirements && (
              <>
                <Divider
                  style={{
                    margin: '8px',
                  }}
                />
                <span
                  style={{
                    fontSize: '1.2rem',
                    color: '#ffff',
                  }}
                >
                  Minimum system requirements
                </span>

                <div
                  style={{
                    fontSize: '1rem',
                    color: '#ffff',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'start',
                    textAlign: 'left',
                    gap: '5px',
                  }}
                >
                  <span>OS: {game.minimum_system_requirements.os}</span>
                  <span>Processor: {game.minimum_system_requirements.processor}</span>
                  <span>Graphics: {game.minimum_system_requirements.graphics}</span>
                  <span>RAM: {game.minimum_system_requirements.memory}</span>
                  <span>Storage: {game.minimum_system_requirements.storage}</span>
                </div>
              </>
            )}
          </div>
        </Card>

        {game.screenshots.length > 0 && (
          <Carousel
            lazyLoad="progressive"
            style={{
              width: isTablet ? '50vw' : '90vw',
            }}
          >
            {game.screenshots.map(s => (
              <Image key={s.id} loading="eager" width="100%" src={s.image} />
            ))}
          </Carousel>
        )}
      </div>
    );
  }

  return null;
}

export default function GamePage() {
  const { id } = useParams();

  const { success: isGameIdValid } = gameIdSchema.safeParse(id);

  if (!id || !isGameIdValid) {
    return <NotFound />;
  }

  return <Layout content={<GamePageContent id={id} />} header={<GamePageHeader />} />;
}
