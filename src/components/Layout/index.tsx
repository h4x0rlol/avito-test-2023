import { Layout as AntdLayout, Space } from 'antd';

const { Header, Footer, Content } = AntdLayout;
import { ReactNode } from 'react';

type LayoutProps = {
  header: ReactNode;
  content: ReactNode;
};

const headerStyle: React.CSSProperties = {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  color: 'rgba(255,255,255,.5)',
  minHeight: 64,
  paddingInline: 50,
  fontSize: '2rem',
  lineHeight: '64px',
  backgroundColor: '#272b30',
  borderBottom: '1px solid rgba(28,28,28,.6)',
  boxShadow: '0 .125rem .25rem rgba(0,0,0,.075)',
};

const contentStyle: React.CSSProperties = {
  textAlign: 'center',
  height: 'calc(100vh - 130px)',
  width: '100%',
  padding: '10px 20px',
  backgroundColor: '#30363d',
  color: '#aaa',
};

const footerStyle: React.CSSProperties = {
  position: 'fixed',
  bottom: 0,
  width: '100%',
  fontSize: '1rem',
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#1c1e22',
};

export default function Layout({ header, content }: LayoutProps) {
  return (
    <Space direction="vertical" style={{ width: '100%' }}>
      <AntdLayout>
        <Header style={headerStyle}>{header}</Header>
        <Content style={contentStyle}>{content}</Content>
        <Footer style={footerStyle}>
          Made by{' '}
          <a href="https://github.com/h4x0rlol" target="_blank">
            h4x0rlol
          </a>{' '}
          © 2023
        </Footer>
      </AntdLayout>
    </Space>
  );
}
