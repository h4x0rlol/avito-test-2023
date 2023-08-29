import VirtualList from 'rc-virtual-list';
import { List } from 'antd';
import { GamesList } from '../../api';
import { Link } from 'react-router-dom';
import GameListItem from '../GameListItem';

const ContainerHeight = 400;
const ItemHeight = 50;

type VirtualizedGamesListProps = {
  games: GamesList;
  loading: boolean;
};

export default function VirtualizedGamesList({ games, loading }: VirtualizedGamesListProps) {
  return (
    <List
      itemLayout="vertical"
      grid={{
        gutter: 12,
      }}
      loading={loading}
    >
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
