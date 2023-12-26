import React from 'react'
import { Button, Col, Drawer, Form, Input, InputNumber, Row, Select, Space } from 'antd';
import axios from 'axios'
import { useState, useEffect } from "react";
import { customerList } from "../../../api/AppApi";


const CheckingAccountTransactionsDrawer = (props) => {

    const [customerRmData, setCustomerRmData] = useState({})


    const [form] = Form.useForm();

    const onFinish = (values) => {


        axios.post('http://localhost:5000/checkingaccounttransactions/create', {
            checking_account_id: values.checking_account_id,
            checking_account_transaction_type: values.checking_account_transaction_type,
            checking_account_transaction_amount: values.checking_account_transaction_amount,
            checking_account_transaction_description: values.checking_account_transaction_description,

        })
            .then((response) => {
                form.resetFields();

                const customerData = {
                    title: "abc",
                    amount: "dasda",
                    date: "dasd",
                };

                props.onSaveCheckingAccountTransactionsData(customerData);



            })
            .catch((error) => {
                alert(error)
            });

    };

    useEffect(() => {
        getData();
    }, [props.openStatus])

    const listi = [];
    const getData = async () => {

        customerList()
            .then(data => {

                const arri = data;

                const listItems = arri.map((arri) =>

                    listi.push({ value: arri._id, label: arri.checking_account_title })

                );

                setCustomerRmData(listi);

                console.log(customerRmData)
            })
            .catch(error => {
                console.error(error);
            });


    };

    return (
        <>

            <Drawer title="Yeni Cari Hareket" bodyStyle={{ paddingBottom: 80, }} placement="right" onClose={props.onCloseStatus} open={props.openStatus}
                extra={
                    <Space>
                        <Button key="submit" htmlType="submit" form="checkingAccountTransactionsForm" type="primary" >
                            Kaydet
                        </Button>
                    </Space>
                }>

                <Form form={form} layout="vertical" id="checkingAccountTransactionsForm" onFinish={onFinish}>

                    <Row gutter={16}>
                        <Col span={24}>
                            <Form.Item
                                name="checking_account_id"
                                label="Cari"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Bu alan boş bırakılamaz',
                                    },
                                ]}
                            >
                                <Select
                                    placeholder='Seçiniz'
                                    options={customerRmData}
                                />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={24}>
                            <Form.Item
                                name="checking_account_transaction_type"
                                label="İşlem Tipi"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Bu alan boş bırakılamaz',
                                    },
                                ]}
                            >
                                <Select
                                    placeholder='Seçiniz'
                                    options={[
                                        { value: '1', label: 'Borç' },
                                        { value: '2', label: 'Alacak' }
                                    ]
                                    }
                                />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={24}>
                            <Form.Item
                                name="checking_account_transaction_amount"
                                label="Toplam Tutar"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Bu alan boş bırakılamaz',
                                    },
                                ]}
                            >
                                <InputNumber
                                    style={{ width: '100%' }}
                                    min={1} max={1000000}
                                />
                            </Form.Item>
                        </Col>

                    </Row>
                    <Row gutter={16}>

                        <Col span={24}>

                            <Form.Item
                                name="checking_account_transaction_description"
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

export default CheckingAccountTransactionsDrawer