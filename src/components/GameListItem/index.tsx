import { BankOutlined, BookOutlined, CalendarOutlined } from '@ant-design/icons';
import { Card } from 'antd';
import IconText from '../IconText';
import Image from '../Image';
import { GamesList } from '../../api';

type GameListItemProps = {
  game: GamesList[number];
};

export default function GameListItem({ game }: GameListItemProps) {
  return (
    <Card
      title={game.title}
      headStyle={{
        fontSize: '1.2rem',
        color: '#ffff',
      }}
      style={{
        backgroundColor: '#272b30',
        color: '#ffff',
        fontSize: '1rem',
        borderColor: 'rgba(28,28,28,.6)',
      }}
    >
      <div
        style={{
          display: 'flex',
          gap: '2rem',
        }}
      >
        <Image width={200} src={game.thumbnail} alt={game.title} />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
          }}
        >
          <IconText icon={BankOutlined} text={`Publisher: ${game.publisher}`} />
          <IconText icon={BookOutlined} text={`Genre: ${game.genre}`} />
          <IconText icon={CalendarOutlined} text={`Release date: ${game.release_date.toISOString()}`} />
        </div>
      </div>
    </Card>
  );
}
