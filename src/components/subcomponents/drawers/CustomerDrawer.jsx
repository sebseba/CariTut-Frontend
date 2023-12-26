import React from 'react'
import { Button, Col, Drawer, Form, Input, Row, Space, message } from 'antd';
import { customerAdd } from "../../../api/AppApi";

const ContentCustomerDrawer = (props) => {

    const [messageApi, contextHolder] = message.useMessage();

    const [formNewCustomer] = Form.useForm();

    const onFinish = (values) => {

        customerAdd(
            {
                checking_account_title: values.checking_account_title,
                checking_account_number: values.checking_account_number,
                checking_account_email: values.checking_account_email,
                checking_account_phone_number: values.checking_account_phone_number,
                checking_account_description: values.checking_account_description,
                checking_account_balance: "0"
            }
        )
            .then(data => {

                formNewCustomer.resetFields();
                props.onSaveCustomerData(data);
                console.log(data)
                messageApi.success(' Kayıt Eklendi!');

            })
            .catch(error => {
                console.error(error);
            });

    };

    return (
        <>
            {contextHolder}
            <Drawer title="Yeni Cari" bodyStyle={{ paddingBottom: 80, }} placement="right" onClose={props.onCloseStatus} open={props.openStatus}
                extra={
                    <Space>
                        <Button key="submit" htmlType="submit" form="customerForm" type="primary" >
                            Kaydet
                        </Button>
                    </Space>
                }>

                <Form form={formNewCustomer} layout="vertical" id="customerForm" onFinish={onFinish}>

                    <Row gutter={16}>
                        <Col span={24}>
                            <Form.Item
                                name="checking_account_title"
                                label="Başlık"
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
                    <Row gutter={16}>
                        <Col span={24}>
                            <Form.Item
                                name="checking_account_number"
                                label="TCKN/VKN"

                            >
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col span={24}>
                            <Form.Item
                                name="checking_account_email"
                                label="E-Posta"

                            >
                                <Input />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>



                        <Col span={24}>
                            <Form.Item
                                name="checking_account_phone_number"
                                label="Telefon"

                            >
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col span={24}>

                            <Form.Item
                                name="checking_account_description"
                                label="Not"
                            >
                                <Input.TextArea showCount maxLength={150} placeholder="" />
                            </Form.Item>
                        </Col>
                    </Row>

                </Form>


            </Drawer>
        </>
    )
}

export default ContentCustomerDrawer