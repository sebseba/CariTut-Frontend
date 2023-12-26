
import { Outlet } from 'react-router-dom';


import { Layout, Space } from 'antd';
import PageContainer from "../../containers/PageContainer";
const { Header, Footer, Content } = Layout;

const headerStyle = {
  textAlign: 'center',
  color: '#black',
  height: 100,
  lineHeight: '34px',
  backgroundColor: '#fff',
  fontSize: "50px"
};
const contentStyle = {
  padding: '50px',
  margin: 'auto'
};
const footerStyle = {
  textAlign: 'center',
  color: '#black',
  backgroundColor: '#fff',
};


const AuthLayout = (props) => (
  <>
    <PageContainer>
      <Layout>
        <Space
          direction="vertical"
          style={{
            width: '100%',
          }}
          size={[0, 48]}
        >
          <Layout style={{ backgroundColor: 'white' }}>
            <Header style={headerStyle}><h1>LOGO</h1></Header>
            <Content style={contentStyle}>

              <Space
                direction="vertical"
                size="middle"
                style={{
                  display: 'flex',
                }}
              >
                  <Outlet />
              </Space>

            </Content>
            <Footer style={footerStyle}>SPTEC</Footer>
          </Layout>
        </Space>
      </Layout>
    </PageContainer>
  </>

);
export default AuthLayout;