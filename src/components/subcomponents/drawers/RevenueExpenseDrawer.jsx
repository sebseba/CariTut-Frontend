import React from 'react'
import { Button, Radio, Col, Drawer, Form, Input, Row, Select, Space, Divider } from 'antd';
import { useState } from 'react';

const { Option } = Select;

const ContentRevenueExpenseDrawer = (props) => {




    return (
        <Drawer title="Yeni Gelir/Gider" width={720} bodyStyle={{ paddingBottom: 80, }} placement="right" onClose={props.onCloseStatus} open={props.openStatus} extra={
            <Space>
                <Button type="primary">
                    Kaydet
                </Button>
            </Space>
        }>

            <Form layout="vertical">

            <Row gutter={24}>
                <Col span={24}>
                        <Form.Item
                            name="operation"
                            label="İşlem"
                            rules={[
                                {
                                    required: true,
                                    message: 'Bu alan boş bırakılamaz',
                                },
                            ]}

                        >
                            <Select placeholder="İşlem">
                                <Option value="Türkiye">Gelir</Option>
                                <Option value="gbj">Gider</Option>
                              
                            </Select>
                        </Form.Item>
                    </Col>
                    </Row>
                <Row gutter={24}>
          
                <Col span={24}>
                        <Form.Item
                            name="cari"
                            label="Cari"
                            rules={[
                                {
                                    required: true,
                                    message: 'Bu alan boş bırakılamaz',
                                },
                            ]}

                        >
                            <Select placeholder="Bir cari seçiniz">
                                <Option value="Türkiye">+ Yeni</Option>
                                <Option value="fghj">Ahmet</Option>
                                <Option value="Hollanda">Hüseyin</Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    </Row>
                    <Row gutter={12}>
                <Col span={12}>
                        <Form.Item
                            name="currency"
                            label="Para Birimi"
                            rules={[
                                {
                                    required: true,
                                    message: 'Bu alan boş bırakılamaz',
                                },
                            ]}

                        >
                            <Select placeholder="Para Birimi">
                                <Option value="asd">TRY</Option>
                                <Option value="dasdasd">USD</Option>
                              
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            name="currencyRate"
                            label="Kur"
                            rules={[
                                {
                                    required: true,
                                    message: 'Bu alan boş bırakılamaz',
                                },
                            ]}

                        >
                           <Input/>
                        </Form.Item>
                    </Col>
                    </Row>
                    <Row gutter={24}>

                    <Col span={24}>
                        <Form.Item
                            name="title"
                            label="Tutar"
                            rules={[
                                {
                                    required: true,
                                    message: 'Bu alan boş bırakılamaz',
                                },
                            ]}
                        >

                            <Input />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={24}>

                    <Col span={24}>

                        <Form.Item
                            name="Not"
                            label="Not"
                        >
                            <Input.TextArea showCount maxLength={150} placeholder="" />
                        </Form.Item>
                    </Col>
                </Row>



            </Form>


        </Drawer>

    )
}

export default ContentRevenueExpenseDrawer