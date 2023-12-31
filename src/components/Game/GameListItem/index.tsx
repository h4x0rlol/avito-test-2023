import { BankOutlined, BookOutlined, CalendarOutlined } from '@ant-design/icons';
import { Card } from 'antd';
import IconText from '../../IconText';
import { GamesList } from '../../../api';
import { Link } from 'react-router-dom';
import { formatDate } from '../../../utils';
import Image from '../../Image';

type GameListItemProps = {
  item: GamesList[number];
};

export default function GameListItem({ item: game }: GameListItemProps) {
  return (
    <Link to={`/${game.id}`}>
      <Card
        title={game.title}
        headStyle={{
          fontSize: '1.5rem',
          color: '#ffff',
        }}
        style={{
          backgroundColor: '#272b30',
          color: '#ffff',
          fontSize: '1.2rem',
          borderColor: 'rgba(28,28,28,.6)',
        }}
      >
        <div
          style={{
            display: 'flex',
            gap: '2rem',
          }}
        >
          <div
            style={{
              width: 200,
            }}
          >
            <Image preview={false} withSkeleton width="100%" src={game.thumbnail} alt={game.title} />
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start',
            }}
          >
            <IconText icon={BankOutlined} text={`Publisher: ${game.publisher}`} />
            <IconText icon={BookOutlined} text={`Genre: ${game.genre}`} />
            <IconText icon={CalendarOutlined} text={`Release date: ${formatDate(game.release_date)}`} />
          </div>
        </div>
      </Card>
    </Link>
  );
}
