import React from 'react'
import './Sidebar.css';
import SideMenu from "./SideMenu";
import SideLogo from "./SideLogo";
import { useState } from 'react';
import { Layout } from 'antd';
const { Sider } = Layout;




function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [isOnlyIcon, setIsOnlyIcon] = useState(false)
  const [logoSrc, setLogoSrc] = useState('/logo.png')

 

  const isOnlyLogoHandler = (value) => {
    setCollapsed(value)
    setIsOnlyIcon(value)

    if(value){
      setLogoSrc('/icon.png')
    }else{
      setLogoSrc('/logo.png')
    }
  }

  return (

    <Sider
      breakpoint="lg"
      collapsible collapsed={collapsed}
      onCollapse={(value) => isOnlyLogoHandler(value)}
    >
      <SideLogo onlyLogoIcon={isOnlyIcon} logoSrc={logoSrc}  />
      <SideMenu />
    </Sider>
  )
}

export default Sidebar