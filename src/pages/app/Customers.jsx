import React from 'react'
import { customerList, customerDetail, deleteCustomer } from '../../api/AppApi';
import { Table, Button, Popconfirm, Radio, Row, Col } from 'antd';

import { DeleteFilled, EditFilled, EyeOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import ContentHeader from "../../components/maincomponents/content/ContentHeader";
import CustomerPlusButton from "../../components/subcomponents/buttons/CustomerPlusButton"
import BackButton from "../../components/subcomponents/buttons/BackButton"
import CustomerUpdateDrawer from "../../components/subcomponents/drawers/CustomerUpdateDrawer";


function Customers() {
  const [selectedFilter, setSelectedFilter] = useState("");
  const [customerListFilter, setCustomerListFilter] = useState({});
  const [data, setData] = useState([]);
  const [willUpdateData, setWillUpdateData] = useState([])

  const [openCustomerUpdateDrawer, setOpenCustomerUpdateDrawer] = useState(false);
  const onCloseCustomerUpdateDrawer = () => {
    setOpenCustomerUpdateDrawer(false);
  };


  const confirm = (_id) => {

    if (_id === null) {
      throw new Error("Müşteri kimliği geçersiz.");
    }

    deleteCustomer(_id)
      .then((response) => {
        console.log('responis', response)
        getData();


      })
      .catch((error) => {
        alert(error)
      });
  };





  const addCustomerSubmitResultHandler = result => {
    getData()

  }

  const addCustomerUpdateResultHandler = result => {

    getData()
    setOpenCustomerUpdateDrawer(false)

  }

  const handleCustomerListFilter = async (event) => {

    const selectedValue = event.target.value;
     setSelectedFilter(selectedValue);

    setCustomerListFilter({checking_account_balance: selectedValue})
    getData()
  }



  const customerUpdateHandler = async (_id) => {

    customerDetail(_id)
      .then(data => {
        setWillUpdateData(data);
        setOpenCustomerUpdateDrawer(true);
        console.log(data)

      })
      .catch(error => {
        console.error(error);
      });

  }



  useEffect(() => { 
    setSelectedFilter("");
  }, []);


  useEffect(() => {
    
    setCustomerListFilter({ checking_account_balance: selectedFilter });
      getData();
    
  }, [selectedFilter]);


  const getData = async () => {

    console.log('clistfilt', customerListFilter)

    customerList(customerListFilter)
      .then(data => {
        console.log('listten gelen', data);
        setData(data);

      })
      .catch(error => {
        console.error(error);
      });

  };


  const columns = [
    {
      title: 'VKN/TCKN',
      dataIndex: 'checking_account_number',
    },
    {
      title: 'Adı',
      dataIndex: 'checking_account_title',
      width: '20%',
    },
    {
      title: 'Eposta',
      dataIndex: 'checking_account_email',
    },
    {
      title: 'Telefon',
      dataIndex: 'checking_account_phone_number',
    },
    {
      title: 'Açıklama',
      dataIndex: 'checking_account_description',
    },
    {
      title: 'Bakiye',
      dataIndex: 'checking_account_balance',
      render: (text, record) => (new Intl.NumberFormat("tr-TR").format(record.checking_account_balance))
    },
    {
      title: '...',
      render: (text, record) => (
        <Button key={`show-${record._id}`} type="none" onClick={() => alert(record._id)} icon={<EyeOutlined />} ></Button>

      ),
      fixed: 'right',
    },
    {
      title: '...',
      render: (text, record) => (
        <Button key={`show-${record._id}`} type="none" onClick={() => { customerUpdateHandler(record._id) }} icon={<EditFilled />} ></Button>

      ),
      fixed: 'right',
    },
    {
      title: '...',
      render: (text, record) => (
        <Popconfirm
          title="Bu kaydı, silmek istediğinizden emin misiniz?"
          description="Dikkat, bu işlem cari ile ilişkili tüm hareketleri de silecektir!"
          onConfirm={() => { confirm(record._id) }}
          okText="Sil"
          cancelText="Kapat"
        >
          <Button key={`show-${record._id}`} type="none" icon={<DeleteFilled />} ></Button>
        </Popconfirm>
      ),
      fixed: 'right',
    },

  ];

  const buttons = [
    {
      id: 'save',
      element: <CustomerPlusButton key="plus" onTransferSubmitResult={addCustomerSubmitResultHandler} />
    },
    {
      id: 'back',
      element: <BackButton key="back" />,
    }
  ];


  return (
    <>
      <Row gutter={[16, 16]} >
        <ContentHeader key="conthead" buttons={buttons} title="Cari Hesaplar" />
        <Col className="gutter-row" xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }}>
          <Radio.Group buttonStyle="solid" onChange={handleCustomerListFilter} value={selectedFilter}>
            <Radio.Button value="">Tümü</Radio.Button>
            <Radio.Button value="1">
              Borçlu
            </Radio.Button>
            <Radio.Button value="2">
              Alacaklı
            </Radio.Button>
          </Radio.Group>
        </Col>
        <Col className="gutter-row" span={24}>
          <Table dataSource={data} columns={columns} scroll={{ x: "max-content" }}
            rowKey={data => data._id}
          />
        </Col>
      </Row>
      <CustomerUpdateDrawer willUpdateCustomerData={willUpdateData} onCloseStatus={onCloseCustomerUpdateDrawer} openStatus={openCustomerUpdateDrawer} onUpdateCustomerData={addCustomerUpdateResultHandler} />
    </>
  )
}

export default Customers