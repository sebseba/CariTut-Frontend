import React from 'react'
import {Col, Dropdown, Space } from 'antd';
import {UserOutlined, DownOutlined} from '@ant-design/icons';
import { Link, useNavigate } from "react-router-dom";


const items = [
  {
    label: 'Profil',
    key: '0',
  },
  { 
    label: 'Hesap Bilgileri',
    key: '1',
  },
  {
    type: 'divider',
  },
  {
    label: 'a',
    key: '3',
  },
];


function TopnavRight() {

  return (
      <Col span={12} style={{display: 'flex', alignItems: 'center', justifyContent: 'right'}}>
        <Dropdown
            menu={{
              items,
            }}
            trigger={['click']}
          >
            <a href='/' onClick={(e) => e.preventDefault()}>
              <Space>
                <UserOutlined style={{paddingRight:'5px'}}/>
                Sercan Sözeri
                <DownOutlined />
              </Space>
            </a>
        </Dropdown>
        
      </Col>
  )
}

export default TopnavRight