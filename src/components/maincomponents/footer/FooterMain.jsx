import React from 'react'
import { Layout, Row, Col } from 'antd';

const { Footer } = Layout;

const footerStyle = {
  
};
function FooterMain() {
  return (
    <Footer style={footerStyle}>
      <Row justify="space-around" align="middle">
        <Col span={12} style={{ display: 'flex', alignItems: 'center', justifyContent: 'right' }} offset={12}>
          SPTEC Copyright 2023
        </Col>
      </Row>
    </Footer>
  )
}

export default FooterMain