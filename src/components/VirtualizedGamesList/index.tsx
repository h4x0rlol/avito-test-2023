import VirtualList from 'rc-virtual-list';
import { List } from 'antd';
import { GamesList } from '../../api';
import { Link } from 'react-router-dom';
import GameListItem from '../GameListItem';

const ContainerHeight = 700;
const ItemHeight = 50;

type VirtualizedGamesListProps = {
  games: GamesList;
};

export default function VirtualizedGamesList({ games }: VirtualizedGamesListProps) {
  return (
    <List itemLayout="vertical" size="small">
      <VirtualList data={games} height={ContainerHeight} itemHeight={ItemHeight} itemKey="id">
        {game => (
          <Link key={game.id} to={`/${game.id}`}>
            <List.Item>
              <GameListItem game={game} />
            </List.Item>
          </Link>
        )}
      </VirtualList>
    </List>
  );
}
