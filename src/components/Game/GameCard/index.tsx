import { AndroidOutlined, BankOutlined, BookOutlined, CalendarOutlined } from '@ant-design/icons';
import { Card, Divider, Carousel, Image } from 'antd';
import Meta from 'antd/es/card/Meta';
import { Game } from '../../../api';
import { BREAKPOINTS, formatDate } from '../../../utils';
import IconText from '../../IconText';
import { useMediaQuery } from '../../../hooks';

type GameCardProps = {
  game: Game;
};

export default function GameCard({ game }: GameCardProps) {
  const isLaptop = useMediaQuery(BREAKPOINTS.laptop);
  const isDesktop = useMediaQuery(BREAKPOINTS.desktop);

  const carouselWidth = isDesktop ? '60vw' : isLaptop ? '50vw' : '90vw';

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
                whiteSpace: 'pre-wrap',
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
            width: carouselWidth,
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
