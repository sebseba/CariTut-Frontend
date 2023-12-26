import React from 'react'
import { Col, Select } from 'antd';
import { HomeOutlined } from '@ant-design/icons';


const handleChange = () => {
  console.log()
}


function TopnavLeft() {
  return (

    <Col span={12} style={{ display: 'flex', alignItems: 'center', justifyContent: 'left' }}>
      <HomeOutlined  style={{ fontSize: '22px', marginRight: '10px', color:'gray' }} />
      <p style={{ margin:'0px', fontSize: '17px', fontWeight: 'bold', color:'gray'}} >SP TECH</p>
      
    </Col>
  )
}

export default TopnavLeft