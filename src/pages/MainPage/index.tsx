import { Card, Col, Result, Row, Space } from 'antd';
import Layout from '../../components/Layout';
import { gamePlatformsOptions, gameSortingOptions, gameTagsOptions, useGetGamesListQuery } from '../../api';
import Select from '../../components/Select';
import Error from '../../components/Error';
import { useMediaQuery } from '../../hooks';
import VirtualizedList from '../../components/VirtualizedList';
import GameListItem from '../../components/GameListItem';
import { BREAKPOINTS, MAX_SELECT_ITEMS } from '../../utils';

function MainPageContent() {
  const isTablet = useMediaQuery(BREAKPOINTS.tablet);

  const { data, isFetching, isError, error } = useGetGamesListQuery(
    {
      platform: 'pc',
      tags: ['mmorpg'],
      sorting: 'alphabetical',
    },
    {
      skip: true,
    },
  );

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
            <Select placeholder="Select a platform" options={gamePlatformsOptions} />
            <Select
              placeholder="Select a genre"
              mode="multiple"
              maxTagCount={isTablet ? MAX_SELECT_ITEMS : 'responsive'}
              options={gameTagsOptions}
            />
            <Select placeholder="Sort by" options={gameSortingOptions} />
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
                  fontSize: '1rem',
                }}
              >
                No games were found with these filters
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
