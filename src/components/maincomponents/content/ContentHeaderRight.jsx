import React from 'react'
import { Space } from 'antd';

const ContentHeaderRight = ({ buttons }) => {
  return (
    <>
      <Space direction="vertical">
      <Space wrap>     
        {buttons.map((button, index) => (
          button.element
        ))}
        </Space>
      </Space>
    </>
  );
};

export default ContentHeaderRight