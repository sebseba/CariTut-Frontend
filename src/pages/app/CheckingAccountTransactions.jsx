import React from 'react'
import { Table, Button, Popconfirm, message, Radio, Row, Col } from 'antd';

import { DeleteFilled} from '@ant-design/icons';
import { useEffect, useState } from 'react';
import ContentHeader from "../../components/maincomponents/content/ContentHeader";
import CheckingAccountTransactionsPlusButton from "../../components/subcomponents/buttons/CheckingAccountTransactionsPlusButton"
import BackButton from "../../components/subcomponents/buttons/BackButton"
import { customerTransactionList } from "../../api/AppApi";

import axios from 'axios'



function CheckingAccountTransactions() {

  const [selectedFilter, setSelectedFilter] = useState("");
  const [customerTransactionListFilter, setCustomerTransactionListFilter] = useState({});
  const [data, setData] = useState([]);

  const confirm = (_id) => {

    axios.delete('http://localhost:5000/checkingaccounttransactions/delete/'+ _id, {})
            .then((response) => {


                getData();
                message.success(_id + ' Kayıt Silindi!');

            })
            .catch((error) => {
                alert(error)
            });
  };

 

  

  const addCheckingAccountTransactionsSubmitResultHandler = result => {
    getData()
  }

  const handleCustomerTransactionListFilter = async (event) => {

    const selectedValue = event.target.value;
     setSelectedFilter(selectedValue);

    setCustomerTransactionListFilter({checking_account_transaction_type: selectedValue})

  }


  useEffect(() => { 
    setSelectedFilter("");
  }, []);


  useEffect(() => {
    
      setCustomerTransactionListFilter({ checking_account_transaction_type: selectedFilter });
      getData();
    
  }, [selectedFilter]);



  const getData = async () => {

    console.log('clistfilt', customerTransactionListFilter)

    customerTransactionList(customerTransactionListFilter)
      .then(data => {
        console.log('listten gelen', data);
        setData(data);

      })
      .catch(error => {
        console.error(error);
      });
  };


  const buttons = [
    {
      id: 'new',
      element: <CheckingAccountTransactionsPlusButton key="new" onTransferSubmitResult={addCheckingAccountTransactionsSubmitResultHandler} />,
    },
    {
      id: 'back',
      element: <BackButton key="back" />,
    }
  ];

  const columns = [
    {
      title: 'Cari',
      dataIndex: 'checking_account_id',
      render: (text, record) => (
        record.checking_account_id.checking_account_title
    ),
    },
    {
      title: 'İşlem Tipi',
      dataIndex: 'checking_account_transaction_type',
      render: (text, record) => (record.checking_account_transaction_type === '1') ? 'Borç' :'Alacak',
      width: '20%',
    },
    {
      title: 'Tutar',
      dataIndex: 'checking_account_transaction_amount',
      render: (text, record) => (new Intl.NumberFormat("tr-TR").format(record.checking_account_transaction_amount))
    },
    {
      title: 'Not',
      dataIndex: 'checking_account_transaction_description',
    },
    {
      title: '',
      key: 'key',
      dataIndex: 'key',
      render: (text, record) => (
        <Popconfirm
          title="Bu kaydı, silmek istediğinizden emin misiniz?"
          description="Bu işlem daha sonra geri alınamaz"
          onConfirm={() => {confirm(record._id)}}
          okText="Sil"
          cancelText="Kapat"
        >
          <Button key="back" type="none" icon={<DeleteFilled />} ></Button>
        </Popconfirm>
      ),
      fixed: 'right',
    },

  ];


  

  return (
    <>
      <Row gutter={[16, 16]} >
        <ContentHeader key="conthead" buttons={buttons} title="Cari Hesap Hareketleri" />
        <Col className="gutter-row" xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }}>
        <Radio.Group buttonStyle="solid" onChange={handleCustomerTransactionListFilter} value={selectedFilter}>
            <Radio.Button value="">Tümü</Radio.Button>
            <Radio.Button value="1">
              Borç
            </Radio.Button>
            <Radio.Button value="2">
              Alacak 
            </Radio.Button>
          </Radio.Group>
        </Col>

      
        <Col className="gutter-row" span={24}>
          <Table dataSource={data} columns={columns} scroll={{ x: "max-content" }}
            rowKey={data => data._id}
          />
        </Col>
      </Row>
    </>
  )
}

export default CheckingAccountTransactions