import { Divider, Row, Col } from 'antd';
import React from 'react';
// import styles from './BusinessPartners.module.css'

interface PropsType {
  title: JSX.Element,
  companies: { src: string }[]
}

export const BusinessPartners: React.FC<PropsType> = ({ title, companies }) => {
  return (
    <div>
      <Divider orientation="left">{title}</Divider>
      <Row>
        {
          companies.map((s, i) => (
            <Col span={6} key={`business-partner-${i}`}>
              <img
                src={s.src}
                alt="business-partner"
                style={{
                  width: '80%',
                  display: 'block',
                  margin: '0 auto'
                }}
              />
            </Col>
          ))
        }
      </Row>
    </div>
  )
}