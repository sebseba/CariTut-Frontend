import React from 'react'
import { PlusOutlined } from '@ant-design/icons';
import CheckingAccountTransactionsDrawer from '../drawers/CheckingAccountTransactionsDrawer';
import { Button } from 'antd';
import { useState} from 'react';



const CheckingAccountTransactionsPlusButton = (props) => {




    const [openCheckingAccountTransactionsDrawer, setOpenCheckingAccountTransactionsDrawer] = useState(false);
    const onCloseCheckingAccountTransactionsDrawer = () => {
        setOpenCheckingAccountTransactionsDrawer(false);
      };
      const showCheckingAccountTransactionsDrawer = () => {
        setOpenCheckingAccountTransactionsDrawer(true);
      };

      const addExpenseHandler = result => {

        props.onTransferSubmitResult(result)
        setOpenCheckingAccountTransactionsDrawer(false)
    
      }

  return (
    <>
    <Button key="savie" type="primary" onClick={showCheckingAccountTransactionsDrawer} icon={<PlusOutlined />}>Yeni</Button>
    <CheckingAccountTransactionsDrawer onCloseStatus = {onCloseCheckingAccountTransactionsDrawer} openStatus = {openCheckingAccountTransactionsDrawer} onSaveCheckingAccountTransactionsData={addExpenseHandler} />
    </>
  )
}

export default CheckingAccountTransactionsPlusButton