import React from 'react'
import { Button, Col, Drawer, Form, Input, Row, Space } from 'antd';
import { customerUpdate } from "../../../api/AppApi";
import { useEffect } from "react";

const CustomerUpdateDrawer = (props) => {


    const [formCustomerUpdate] = Form.useForm();


    useEffect(() => {
        if (props.openStatus) {
            onFill();
        }
    }, [props.openStatus, props.willUpdateCustomerData]);


    const onFill = () => {

        formCustomerUpdate.setFieldsValue({
            checking_account_title: props.willUpdateCustomerData.checking_account_title,
            checking_account_number: props.willUpdateCustomerData.checking_account_number,
            checking_account_email: props.willUpdateCustomerData.checking_account_email,
            checking_account_phone_number: props.willUpdateCustomerData.checking_account_phone_number,
            checking_account_description: props.willUpdateCustomerData.checking_account_description,
        });

    };


    const onFinish = (values) => {



        customerUpdate(
            props.willUpdateCustomerData._id,
            {
                checking_account_title: values.checking_account_title,
                checking_account_number: values.checking_account_number,
                checking_account_email: values.checking_account_email,
                checking_account_phone_number: values.checking_account_phone_number,
                checking_account_description: values.checking_account_description,
            }
        )
            .then(data => {
                console.log(data);

                const customerData = {
                    title: "abc",
                    amount: "dasda",
                    date: "dasd",
                };
                props.onUpdateCustomerData(customerData);

            })
            .catch(error => {
                console.error(error);
            });

    };

    return (
        <>
            <Drawer title="Cari Güncelle" bodyStyle={{ paddingBottom: 80, }} placement="right" onClose={props.onCloseStatus} open={props.openStatus}
                extra={
                    <Space>
                        <Button key="submit" htmlType="submit" form="customerUpdateForm" type="primary" >
                            Güncelle
                        </Button>
                    </Space>
                }>

                <Form form={formCustomerUpdate} layout="vertical" id="customerUpdateForm" onFinish={onFinish}>

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

export default CustomerUpdateDrawer