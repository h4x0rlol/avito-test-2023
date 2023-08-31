import { Card, Col, Result, Row, Space } from 'antd';
import Layout from '../../components/Layout';
import { gamePlatformsOptions, gameSortingOptions, gameCategoriesOptions, useGetGamesListQuery } from '../../api';
import Select from '../../components/Select';
import Error from '../../components/Error';
import { useMediaQuery } from '../../hooks';
import VirtualizedList from '../../components/VirtualizedList';
import GameListItem from '../../components/GameListItem';
import { BREAKPOINTS } from '../../utils';
import { useAppDispatch, useAppSelector } from '../../store';
import { gamesListFiltersSlice } from '../../store/reducers/GamesListFiltersSlice';
import Loader from '../../components/Loader';

function MainPageContent() {
  const isTablet = useMediaQuery(BREAKPOINTS.tablet);

  const dispatch = useAppDispatch();
  const filters = useAppSelector(state => state.gamesListFiltersReducer);
  const { setPlatform, setSorting, setCategory } = gamesListFiltersSlice.actions;

  const { data, isFetching, isError, error, isLoading } = useGetGamesListQuery(filters);

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
      <Col flex={isTablet ? '1 0 35%' : 'none'}>
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
        {isLoading && <Loader />}
        {!isError && !isFetching && (!data || data.length === 0) && (
          <Result
            status="404"
            subTitle={
              <span
                style={{
                  color: '#ffff',
                  fontSize: '1.2rem',
                }}
              >
                No games were found with these filters
              </span>
            }
          />
        )}
        {!isError && !isLoading && (
          <VirtualizedList items={data ?? []} ItemComponent={GameListItem} loading={isFetching} />
        )}
        {isError && <Error error={error} />}
      </Col>
    </Row>
  );
}

export default function MainPage() {
  return <Layout content={<MainPageContent />} header="Free-To-Play Games" />;
}
