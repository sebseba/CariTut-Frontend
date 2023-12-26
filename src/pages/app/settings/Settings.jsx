import React from 'react'
import BackButton from "../../../components/subcomponents/buttons/BackButton"
import ContentHeader from "../../../components/maincomponents/content/ContentHeader";
import { Col, Row, Card, Avatar } from 'antd';
import { UsergroupAddOutlined, AppstoreOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";
const { Meta } = Card;

const buttons = [
  {
    id: 'back',
    element: <BackButton key="back" />
  }
];

const Ayarlar = () => {
  return (
    <>
      <Row gutter={[16, 16]} >
        <ContentHeader buttons={buttons} title="Ayarlar" />
        <Row gutter={[28, 28]} style={{ padding: '20px' }}>
          <Col className="gutter-row" sm={{ span: 24 }} md={{ span: 12 }} lg={{ span: 12 }} >
            <div>
              <Link to="/settings/companysettings">
                <Card >
                  <Meta
                    avatar={<Avatar size="large" icon={<AppstoreOutlined />} />}
                    title="Firma Bilgileri"
                    description="Firma bilgilerinizi düzenleyebilirsiniz"
                  />
                </Card>

              </Link>
            </div>
          </Col>
          <Col className="gutter-row" sm={{ span: 24 }} md={{ span: 12 }} lg={{ span: 12 }} >
            <div>
              <Link to="/settings/usersettings">

                <Card >
                  <Meta
                    avatar={<Avatar size="large" icon={<UsergroupAddOutlined />} />}
                    title="Kullanıcı Bilgileri"
                    description="Kullanıcı bilgilerinizi yönetebilirsiniz"
                  />
                </Card>
              </Link>
            </div>
          </Col>

        </Row >
      </Row>
    </>
  )
}

export default Ayarlar