import React from 'react'
import BackButton from "../../../components/subcomponents/buttons/BackButton"
import ContentHeader from "../../../components/maincomponents/content/ContentHeader";
import { Card, Col, Row, Form, Input } from 'antd';

  const buttons = [
    {
      id: 'back',
      element: <BackButton key="back" />,
    }
  ];

const UserSettings = () => {

    return (
        <>
            <Row gutter={[10, 24]} >
                <ContentHeader buttons={buttons} title="Ayarlar" subtitle="Kullanıcı Bilgileri" />
                <Col className="gutter-row" span={24}>
                    <Card>
                        <Form layout="vertical"  >
                            <div style={{ padding: 10 }}>
                                <Row gutter={10} >
                                    <Col span={24} >
                                        <Form.Item
                                            name="company_title"
                                            label="Ticari Ünvan"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Necati',
                                                },
                                            ]}
                                        >
                                            <Input />
                                        </Form.Item>
                                    </Col>
                                    <Col span={24}>
                                        <Form.Item
                                            name="company_tax_number"
                                            label="VKN/TCKN"
                                            rules={[
                                                {
                                                    message: 'Please enter user name',
                                                },
                                            ]}
                                        >
                                            <Input placeholder="1234567890" />
                                        </Form.Item>
                                    </Col>
                                </Row>
                            </div>
                        </Form>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default UserSettings