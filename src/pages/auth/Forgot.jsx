import { Button, Form, Input, Card } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';


const onFinish = (values) => {
    console.log('Success:', values);
};
const Login = () => (
    <Card title="Şifremi Unuttum">


        <Form
            name="normal_login"
            className="login-form"
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            style={{
                width: 300,
              }}
        >
            <Form.Item
                name="email"
                rules={[
                    {
                        required: true,
                        message: 'Please input your Username!',
                    },
                ]}
            >
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="E-Posta Adresi" />
            </Form.Item>
            <Form.Item>
                <Link to={"/login"}><Button type="primary" block>
                    Gönder
                </Button>
                </Link>
            </Form.Item>



        </Form>
        veya
        <Link to={"/login"}> Giriş Yap </Link>
    </Card>
);
export default Login;