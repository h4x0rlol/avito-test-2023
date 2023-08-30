import VirtualList from 'rc-virtual-list';
import { List } from 'antd';
import React from 'react';

const ContainerHeight = 400;
const ItemHeight = 50;

type VirtualizedListProps<T extends { id: string | number }> = {
  items: T[];
  ItemComponent: React.FC<{ item: T }>;
  loading: boolean;
  containerHeight?: number;
  itemHeight?: number;
};

export default function VirtualizedList<T extends { id: string | number }>({
  items,
  loading,
  ItemComponent,
  containerHeight,
  itemHeight,
}: VirtualizedListProps<T>) {
  return (
    <List
      itemLayout="vertical"
      grid={{
        gutter: 12,
      }}
      loading={loading}
    >
      <VirtualList
        data={items}
        height={containerHeight ?? ContainerHeight}
        itemHeight={itemHeight ?? ItemHeight}
        itemKey="id"
      >
        {item => (
          <List.Item key={item.id}>
            <ItemComponent item={item} />
          </List.Item>
        )}
      </VirtualList>
    </List>
  );
}
