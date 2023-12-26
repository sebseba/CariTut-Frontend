import { DashboardOutlined, UserOutlined, UnorderedListOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';

const usePathname = () => {
  const location = useLocation();
  return location.pathname;
}


function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const SideMenu = () => { 
  const items = [
    getItem(<Link to="/">Genel</Link>, '/', <DashboardOutlined />),
    getItem(<Link to="/customers">Cari Hesaplar</Link>, '/customers', <UserOutlined />),
    getItem(<Link to="/checkingaccounttransactions">Cari Hesap Hareketleri</Link>, '/checkingaccounttransactions', <UnorderedListOutlined />),
    //getItem(<Link to="/revenues">Gelirler</Link>, '/revenues', <ArrowDownOutlined />),
    //getItem(<Link to="/expenses">Giderler</Link>, '/expenses', <ArrowUpOutlined />),
    getItem(<Link to="/settings">Ayarlar</Link>, '/settings', <SettingOutlined />),
  ];

  
  
  return (
    <>
    <Menu
      defaultSelectedKeys={['/']}
      mode="inline"
      items={items}
      selectedKeys={usePathname()}
      theme="dark" 
    />
    </>
  );
};
export default SideMenu;