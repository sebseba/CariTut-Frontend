import React, { useEffect } from 'react'
import { useState } from "react";
import ContentHeader from "../../components/maincomponents/content/ContentHeader"
import { Col, Row } from 'antd';
import { RingProgress, DualAxes, Gauge } from '@ant-design/plots';
import axios from 'axios'
import Loader from "../../components/subcomponents/Loader";





const DemoRingProgress = () => {
  const config = {
    height: 100,
    width: 100,
    autoFit: true,
    percent: 0.6,
    color: ['#5B8FF9', '#E8EDF3'],
    innerRadius: 0.85,
    radius: 0.98,
    statistic: {
      title: {
        style: {
          color: '#363636',
          fontSize: '12px',
          lineHeight: '14px',
        },
        formatter: () => 'Firmalar',
      },
    },
  };
  return <RingProgress {...config} />;
};

const DemoRingProgress1 = () => {
  const config = {
    height: 100,
    width: 100,
    autoFit: true,
    percent: 0.9,
    color: ['#F4664A', '#E8EDF3'],
    innerRadius: 0.85,
    radius: 0.98,
    statistic: {
      title: {
        style: {
          color: '#363636',
          fontSize: '12px',
          lineHeight: '14px',
        },
        formatter: () => 'Firmalar',
      },
    },
  };
  return <RingProgress {...config} />;
};

const DemoRingProgress2 = () => {
  const config = {
    height: 100,
    width: 100,
    autoFit: true,
    percent: 0.56,
    color: ['#F4664A', '#E8EDF3'],
    innerRadius: 0.85,
    radius: 0.98,
    statistic: {
      title: {
        style: {
          color: '#363636',
          fontSize: '12px',
          lineHeight: '14px',
        },
        formatter: () => 'Hareketler',
      },
    },
  };
  return <RingProgress {...config} />;
};


const buttons = [];

const DemoDualAxes = () => {
  const data = [
    {
      year: '1991',
      value: 3,
      count: 10,
    },
    {
      year: '1992',
      value: 4,
      count: 4,
    },
    {
      year: '1993',
      value: 3.5,
      count: 5,
    },
    {
      year: '1994',
      value: 5,
      count: 5,
    },
    {
      year: '1995',
      value: 4.9,
      count: 4.9,
    },
    {
      year: '1996',
      value: 6,
      count: 35,
    },
    {
      year: '1997',
      value: 7,
      count: 7,
    },
    {
      year: '1998',
      value: 9,
      count: 1,
    },
    {
      year: '1999',
      value: 13,
      count: 20,
    },
  ];
  const config = {
    data: [data, data],
    xField: 'year',
    yField: ['value', 'count'],
    geometryOptions: [
      {
        geometry: 'line',
        color: '#5B8FF9',
      },
      {
        geometry: 'line',
        color: '#5AD8A6',
      },
    ],
  };
  return <DualAxes {...config} />;
};

const DemoGauge = () => {
  const config = {
    percent: 0.75,
    range: {
      color: 'l(0) 0:#B8E1FF 1:#3D76DD',
    },
    startAngle: Math.PI,
    endAngle: 2 * Math.PI,
    indicator: null,
    statistic: {
      title: {
        offsetY: -36,
        style: {
          fontSize: '36px',
          color: '#4B535E',
        },
        formatter: () => '70%',
      },
      content: {
        style: {
          fontSize: '24px',
          lineHeight: '44px',
          color: '#4B535E',
        },
        formatter: () => 'Mph',
      },
    },
  };
  return <Gauge {...config} />;
};


const Dashboard = () => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
       
       setLoading(false);
    })();
 }, []);
  return (
    <>
      <Row gutter={[10, 24]} >

      <Loader/>

        <ContentHeader buttons={buttons} title="Genel"  />
        <Col className="gutter-row" m={{ span: 24 }} md={{ span: 12 }} >
          <DemoDualAxes  />
        </Col>

        <Col className="gutter-row" sm={{ span: 24 }} md={{ span: 12 }} >
          <Row gutter={[10]} >
            <Col className="gutter-row" sm={{ span: 12 }} md={{ span: 6 }} >
              <DemoRingProgress />
            </Col>
            <Col className="gutter-row" sm={{ span: 12 }} md={{ span: 6 }} >
              <DemoRingProgress1 />
            </Col>

            <Col className="gutter-row" sm={{ span: 12 }} md={{ span: 6 }} >
              <DemoRingProgress2 />
            </Col>
            <Col className="gutter-row" sm={{ span: 12 }} md={{ span: 6 }} >
              <DemoRingProgress2 />
            </Col>
            <Col className="gutter-row" sm={{ span: 12 }} md={{ span: 12 }} >
              <DemoGauge />
            </Col>
            <Col className="gutter-row" sm={{ span: 12 }} md={{ span: 12 }} >
              <DemoGauge />
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  )
}

export default Dashboard