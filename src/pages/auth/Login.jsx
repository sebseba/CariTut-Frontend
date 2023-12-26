import { useState } from 'react';
import { Button, Form, Input, Card } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';


const onFinish = (values) => {
  console.log('Success:', values);
};



const Login = () => {

  const navigate = useNavigate();

  const handleSubmit = e => {



    let data = JSON.stringify({
      "email": email,
      "password": password
    });

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'http://localhost:5000/login',
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };

    axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        // Giriş işlemi gerçekleştiğinde accessToken'ı al
        const setAccessToken = localStorage.setItem('access_token', JSON.stringify(response.data.access_token));


        // Diğer işlemler (örneğin yönlendirme)
        navigate("/");
      })
      .catch((error) => {
        console.log(error.response.data.message);

      });
  }

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  return (
    <Card title={"Giriş Yap"} >
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={handleSubmit}
        style={{
          width: 300,
        }}
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your Username!',
            },
          ]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="E-Posta"
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={e => setEmail(e.target.value)} />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your Password!',
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </Form.Item>
        <Form.Item>
          <Link to="/forgot">
            Şifremi Unuttum
          </Link>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Oturum Aç
          </Button>
        </Form.Item>
      </Form>
      <div >
        Hesabınız yok mu?  <Link to={"/register"}>Hemen Kayıt Ol!</Link>
      </div>
    </Card>
  )
};
export default Login;