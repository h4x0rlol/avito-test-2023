import { Card, Col, Result, Row, Space } from 'antd';
import Layout from '../../components/Layout';
import { gamePlatformsOptions, gameSortingOptions, gameCategoriesOptions, useGetGamesListQuery } from '../../api';
import Select from '../../components/Select';
import Error from '../../components/Error';
import { useMediaQuery } from '../../hooks';
import VirtualizedList from '../../components/VirtualizedList';
import GameListItem from '../../components/GameListItem';
import { BREAKPOINTS, isFiltersEmpty } from '../../utils';
import { useAppDispatch, useAppSelector } from '../../store';
import { gamesListFiltersSlice } from '../../store/reducers/GamesListFiltersSlice';

function MainPageContent() {
  const isTablet = useMediaQuery(BREAKPOINTS.tablet);

  const dispatch = useAppDispatch();
  const filters = useAppSelector(state => state.gamesListFiltersReducer);
  const { setPlatform, setSorting, setCategory } = gamesListFiltersSlice.actions;

  const isEmptyFilters = isFiltersEmpty(filters);

  const { data, isFetching, isError, error } = useGetGamesListQuery(filters, {
    skip: isEmptyFilters,
  });

  return (
    <Row
      wrap={false}
      style={{
        height: '100%',
        display: 'flex',
        gap: '16px',
        flexDirection: isTablet ? 'row' : 'column',
      }}
    >
      <Col flex="1 0 35%">
        <Card
          title="Filters"
          headStyle={{
            color: '#ffff',
            fontSize: '1.5rem',
          }}
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: '#272b30',
            borderColor: 'rgba(28,28,28,.6)',
          }}
        >
          <Space
            direction="vertical"
            size="middle"
            style={{
              width: '100%',
            }}
          >
            <Select
              placeholder="Select a platform"
              value={filters.platform}
              onChange={e => dispatch(setPlatform(e))}
              options={gamePlatformsOptions}
            />
            <Select
              placeholder="Select a category"
              value={filters.category}
              onChange={e => dispatch(setCategory(e))}
              options={gameCategoriesOptions}
            />
            <Select
              placeholder="Sort by"
              value={filters['sort-by']}
              onChange={e => dispatch(setSorting(e))}
              options={gameSortingOptions}
            />
          </Space>
        </Card>
      </Col>
      <Col flex={isTablet ? '1 0 60%' : 'auto'}>
        {!isError && (!data || data.length === 0) && (
          <Result
            status="404"
            subTitle={
              <span
                style={{
                  color: '#ffff',
                  fontSize: '1.2rem',
                }}
              >
                {isEmptyFilters
                  ? 'To find some games select filters from the menu'
                  : ' No games were found with these filters'}
              </span>
            }
          />
        )}
        {!isError && data && <VirtualizedList items={data} ItemComponent={GameListItem} loading={isFetching} />}
        {isError && <Error error={error} />}
      </Col>
    </Row>
  );
}

export default function MainPage() {
  return <Layout content={<MainPageContent />} header="Free-To-Play Games" />;
}
