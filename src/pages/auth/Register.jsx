import { Button, Form, Input, Card } from 'antd';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

const RegisterPage = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  const handleSubmit = e => {
    let data = JSON.stringify({
      "name": name,
      "surname": surname,
      "mobile": mobile,
      "email": email,
      "password": password
    });
    console.log(data);
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'http://localhost:5000/register',
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };

    axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));

      })
      .catch((error) => {
        console.log(error.response.data.message);

      });
  }

  const [name, setName] = useState()
  const [surname, setSurname] = useState()
  const [mobile, setMobile] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  return (
    <Card title={"Kayıt Ol"} >
      <Form
        layout="vertical"
        form={form}
        name="register"
        onFinish={handleSubmit}
        style={{
          width: 300,
        }}
        scrollToFirstError
      >
        <Form.Item
          name="name"
          label="Ad"
          rules={[
            {
              type: 'text',
              message: 'The input is not valid text!',
            },
            {
              required: true,
              message: 'Please input your  Ad!',
            },
          ]}
        >
          <Input onChange={e => setName(e.target.value)} />
        </Form.Item>
        <Form.Item
          name="surname"
          label="Soyad"
          rules={[
            {
              type: 'text',
              message: 'The input is not valid soyad!',
            },
            {
              required: true,
              message: 'Please input your soyad!',
            },
          ]}
        >
          <Input onChange={e => setSurname(e.target.value)} />
        </Form.Item>
        <Form.Item
          name="email"
          label="E-Posta"
          rules={[
            {
              type: 'email',
              message: 'The input is not valid E-mail!',
            },
            {
              required: true,
              message: 'Please input your E-mail!',
            },
          ]}
        >
          <Input onChange={e => setEmail(e.target.value)} />
        </Form.Item>
        <Form.Item
          name="mobile"
          label="Telefon"
          rules={[
            {
              required: true,
              message: 'Please input your telefon!',
            },
          ]}
        >
          <Input onChange={e => setMobile(e.target.value)} />
        </Form.Item>
        <Form.Item
          name="password"
          label="Şifre"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
          hasFeedback
        >
          <Input.Password onChange={e => setPassword(e.target.value)} />
        </Form.Item>
        <Form.Item
          name="confirm"
          label="Şifre Tekrar"
          dependencies={['password']}
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Please confirm your password!',
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error('The two passwords that you entered do not match!'));
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Button type="primary" htmlType="submit" block>
          Kaydet
        </Button>
      </Form>
      <div style={{ paddingTop: '40px' }}>
        Hesabınız var mı?  <Link to={"/login"}>Giriş Yap!</Link>
      </div>

    </Card>
  );
};

export default RegisterPage;