import Sidebar from "../../components/maincomponents/sidebar/Sidebar";
import Topnav from "../../components/maincomponents/topnav/Topnav";
import FooterMain from "../../components/maincomponents/footer/FooterMain";
import { Outlet } from 'react-router-dom';
import { Layout, theme } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";

const { Content,Header } = Layout;

const AppLayout = () => {


  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = localStorage.getItem('access_token');
    if (!accessToken) {
      navigate('/login'); // Token yoksa giriş sayfasına yönlendir
    }
  }, []);

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <>

      <Layout style={{
        minHeight: '100vh',
         
      
      }}>
        <Sidebar />
        
        <Layout>
          <Topnav />
          
          <Content style={{ backgroundColor: 'white', margin: '16px', padding:'20px' }}>
            <Outlet />
          </Content>
          <FooterMain />
        </Layout>
        </Layout>
      </>

      );
}
      export default AppLayout;