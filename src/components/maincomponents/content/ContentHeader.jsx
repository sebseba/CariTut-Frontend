import React from 'react'
import ContentHeaderRight from "./ContentHeaderRight"
import ContentHeaderLeft from "./ContentHeaderLeft"
import { Row, Col } from 'antd';



const ContentHeader = (props) => {
  return (
    <Col className="gutter-row" span={24}>
    <Row gutter={[5, 5]} >
      <Col className="gutter-row" xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 14 }}>
        <ContentHeaderLeft key="chleft" title={props.title} subtitle={props.subtitle} />
      </Col>
      <Col sm={{ span: 24 }} md={{ span: 10 }} style={{ display: 'flex', alignItems: 'center', justifyContent: 'right' }}>
        <ContentHeaderRight key="chright" buttons={props.buttons} />
      </Col>
    </Row>
    </Col>

  )
}

export default ContentHeader