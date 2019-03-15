import React, { useState } from 'react';
import { Layout, Row, Col, Button, Menu } from 'antd';
import logo from './logo.svg';

const { Footer, Content, Sider } = Layout;

const App = () => {
  const [isCollapsed, handleCollapse] = useState(false);

  return (
    <Layout>
      <Sider
        style={{
          overflow: 'auto',
          position: 'fixed',
          left: 0,
        }}
        theme="light"
        breakpoint="lg"
        onCollapse={(collapsed) => {
          handleCollapse(collapsed);
        }}
      >
        <div>
            <img src={logo} alt="Logo" />
        </div>
        <Menu style={{ minHeight: '100vh' }} mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">
            <span className="nav-text">Item #1</span>
          </Menu.Item>
          <Menu.Item key="2">
            <span className="nav-text">Item #2</span>
          </Menu.Item>
          <Menu.Item key="3">
            <span className="nav-text">Item #3</span>
          </Menu.Item>
          <Menu.Item key="4">
            <span className="nav-text">Item #4</span>
          </Menu.Item>
          <Menu.Item key="5">
            <span className="nav-text">Item #5</span>
          </Menu.Item>
          <Menu.Item key="6">
            <span className="nav-text">Item #6</span>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout style={{ marginLeft: isCollapsed ? 80 : 200 }}>
        <Content style={{ padding: '2rem 0', overflow: 'initial' }}>
          <Row>
            <Col span={22} offset={1}>
              <Button>Learn React</Button>
            </Col>
          </Row>
        </Content>
        <Footer style={{ textAlign: 'center' }}>©2019 Company</Footer>
      </Layout>
    </Layout>
  );
};

export default App;
