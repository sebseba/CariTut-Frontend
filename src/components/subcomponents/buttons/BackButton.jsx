import React from 'react'
import { LeftOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';



const BackButton = () => {
    const navigate = useNavigate();

  return (
    <div>
        <Button  key="back" onClick={() => navigate(-1)} icon={<LeftOutlined />}>Geri</Button>
    </div>
  )
}

export default BackButton