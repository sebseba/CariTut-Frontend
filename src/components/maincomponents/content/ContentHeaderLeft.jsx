import React from 'react'
import { Col, Typography } from 'antd';

const { Title } = Typography;

const headerSubtitle = {
  color: "#bfbfbf",
  fontSize: "18px",
  marginTop: 0
}


function ContentHeaderLeft(props) {
  return (
    <Col span={10}  style={{alignItems: 'center', justifyContent: 'left'}}>   
    <Title level={3}>{props.title}</Title>
    <Title style={headerSubtitle} level={4}>{props.subtitle}</Title>
    </Col>
  )
}

export default ContentHeaderLeft