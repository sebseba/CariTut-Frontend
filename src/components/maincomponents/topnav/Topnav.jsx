import React from 'react'
import { Row, Layout } from 'antd';
import TopnavLeft from './TopnavLeft';
import TopnavRight from './TopnavRight';
const { Header } = Layout;

function Topnav() {
  return (
    <Header style={{ backgroundColor: 'white', borderBottom: '1px solid whiteSmoke' }}>
      <Row justify="space-around" align="middle" style={{ color: 'black' }}>
        <TopnavLeft />
        <TopnavRight />
      </Row>
    </Header>
  )
}

export default Topnav