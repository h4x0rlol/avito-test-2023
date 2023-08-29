import { Card, Col, Row, Space } from 'antd';
import Layout from '../../components/Layout';
import VirtualizedGamesList from '../../components/VirtualizedGamesList';
import { GamePlatformsOptions, GameSortingOptions, GameTagsOptions, useGetGamesListQuery } from '../../api';
import Select from '../../components/Select';
import Error from '../../components/Error';
import { useMediaQuery } from '../../hooks';

function MainPageContent() {
  const matches = useMediaQuery('(min-width: 768px)');

  const { data, isFetching, isError, error } = useGetGamesListQuery(
    {
      platform: 'pc',
      tags: ['mmorpg'],
      sorting: 'alphabetical',
    },
    {},
  );

  return (
    <Row
      wrap={false}
      style={{
        height: '100%',
        display: 'flex',
        gap: '16px',
        flexDirection: matches ? 'row' : 'column',
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
            <Select placeholder="Select a platform" options={GamePlatformsOptions} />
            <Select placeholder="Select a genre" mode="multiple" options={GameTagsOptions} />
            <Select placeholder="Sort by" options={GameSortingOptions} />
          </Space>
        </Card>
      </Col>
      <Col flex="1 0 60%">
        {!isError && <VirtualizedGamesList games={data ?? []} loading={isFetching} />}
        {isError && <Error error={error} />}
      </Col>
    </Row>
  );
}

export default function MainPage() {
  return <Layout content={<MainPageContent />} header="Free-To-Play Games" />;
}
