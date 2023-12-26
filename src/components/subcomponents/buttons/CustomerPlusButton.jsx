import React from 'react'
import { PlusOutlined } from '@ant-design/icons';
import CustomerDrawer from '../drawers/CustomerDrawer';
import { Button } from 'antd';
import { useState} from 'react';



const CustomerPlusButton = (props) => {




    const [openCustomerDrawer, setOpenCustomerDrawer] = useState(false);
    const onCloseCustomerDrawer = () => {
        setOpenCustomerDrawer(false);
      };
      const showCustomerDrawer = () => {
        setOpenCustomerDrawer(true);
      };

      const addExpenseHandler = result => {

        props.onTransferSubmitResult(result)
        setOpenCustomerDrawer(false)
    
      }

  return (
    <>
    <Button key="savie" type="primary" onClick={showCustomerDrawer} icon={<PlusOutlined />}>Yeni</Button>
    <CustomerDrawer onCloseStatus = {onCloseCustomerDrawer} openStatus = {openCustomerDrawer} onSaveCustomerData={addExpenseHandler} />
    </>
  )
}

export default CustomerPlusButton