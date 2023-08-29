import { Card, Col, Row, Space } from 'antd';
import Layout from '../../components/Layout';
import VirtualizedGamesList from '../../components/VirtualizedGamesList';
import { GamePlatformsOptions, GameSortingOptions, GameTagsOptions } from '../../api';
import Select from '../../components/Select';

function MainPageContent() {
  return (
    <Row
      gutter={16}
      style={{
        height: '100%',
      }}
    >
      <Col flex={2}>
        <Card
          title="Filters"
          headStyle={{
            color: '#ffff',
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
            <Select placeholder="Select a genre" options={GameTagsOptions} />
            <Select placeholder="Sort by" options={GameSortingOptions} />
          </Space>
        </Card>
      </Col>
      <Col flex={5}>
        <VirtualizedGamesList
          games={[
            {
              id: 1,
              title: 'выфвыфвыфвфвыфв',
              genre: 'sss',
              release_date: new Date(),
              publisher: 'sss',
              thumbnail: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            },
            {
              id: 2,
              title: 'sss',
              genre: 'sss',
              release_date: new Date(),
              publisher: 'sss',
              thumbnail: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            },
            {
              id: 3,
              title: 'sss',
              genre: 'sss',
              release_date: new Date(),
              publisher: 'sss',
              thumbnail: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            },
            {
              id: 4,
              title: 'sss',
              genre: 'sss',
              release_date: new Date(),
              publisher: 'sss',
              thumbnail: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            },
            { id: 5, title: 'sss', genre: 'sss', release_date: new Date(), publisher: 'sss', thumbnail: 'sss' },
            { id: 6, title: 'sss', genre: 'sss', release_date: new Date(), publisher: 'sss', thumbnail: 'sss' },
            { id: 7, title: 'sss', genre: 'sss', release_date: new Date(), publisher: 'sss', thumbnail: 'sss' },
            { id: 8, title: 'sss', genre: 'sss', release_date: new Date(), publisher: 'sss', thumbnail: 'sss' },
            { id: 9, title: 'sss', genre: 'sss', release_date: new Date(), publisher: 'sss', thumbnail: 'sss' },
            { id: 10, title: 'sss', genre: 'sss', release_date: new Date(), publisher: 'sss', thumbnail: 'sss' },
            { id: 11, title: 'sss', genre: 'sss', release_date: new Date(), publisher: 'sss', thumbnail: 'sss' },
          ]}
        />
      </Col>
    </Row>
  );
}

export default function MainPage() {
  return <Layout content={<MainPageContent />} header="Free-To-Play Games" />;
}
