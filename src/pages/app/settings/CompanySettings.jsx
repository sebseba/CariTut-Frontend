import React, { useState } from 'react'
import BackButton from "../../../components/subcomponents/buttons/BackButton"
import ContentHeader from "../../../components/maincomponents/content/ContentHeader";
import axios from 'axios';
import { Col, Row, Form, Input, Card } from 'antd';
import SaveButton from '../../../components/subcomponents/buttons/SaveButton';



const buttons = [
    {
        id: 'save',
        element: <SaveButton key="save" />,
    },
    {
        id: 'back',
        element: <BackButton key="back" />,
    }
];


const CompanySettings = (props) => {

    const [enteredTitle, setEnteredTitle] = useState(false)

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.value.target)
    }

    const submitHandler = (event,) => {
        event.preventDefault();

        axios.post('http://localhost:5000/companies/create', {
            //Form data gelecek

        })
            .then((response) => {
                alert(response);

            })
            .catch((error) => {
                alert(error)
            });
    }


    return (
        <>
            <Row gutter={[10, 24]} >
                <ContentHeader buttons={buttons} title="Ayarlar" subtitle="Firma Bilgileri" />
                <Col className="gutter-row" span={24}>
                    <Card>
                        <Form layout="vertical" onSubmit={submitHandler} >
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
                                            <Input value={enteredTitle} onChange={titleChangeHandler} />
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

export default CompanySettings