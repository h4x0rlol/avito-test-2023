import VirtualList, { ListRef } from 'rc-virtual-list';
import { List } from 'antd';
import React, { Ref, useEffect, useMemo, useRef } from 'react';
import { useMediaQuery } from '../../hooks';
import { BREAKPOINTS } from '../../utils';

const MOBILE_CONTAINER_HEIGHT = 500;
const ITEM_HEIGHT = 50;

function getContainerHeight() {
  if (typeof window === 'undefined') {
    return 0;
  }

  // 100vh - header, footer and padding
  return window.innerHeight - 160;
}

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
  const listRef: Ref<ListRef> | null = useRef(null);

  const isTablet = useMediaQuery(BREAKPOINTS.tablet);

  const height = useMemo(() => {
    if (containerHeight) {
      return containerHeight;
    }

    if (isTablet) {
      return getContainerHeight();
    }

    return MOBILE_CONTAINER_HEIGHT;
  }, [containerHeight, isTablet]);

  useEffect(() => {
    if (!listRef.current) return;

    listRef.current.scrollTo({ index: 0 });
  }, [items]);

  return (
    <List
      itemLayout="vertical"
      grid={{
        gutter: 12,
      }}
      loading={loading}
    >
      <VirtualList ref={listRef} data={items} height={height} itemHeight={itemHeight ?? ITEM_HEIGHT} itemKey="id">
        {item => (
          <List.Item key={item.id}>
            <ItemComponent item={item} />
          </List.Item>
        )}
      </VirtualList>
    </List>
  );
}
