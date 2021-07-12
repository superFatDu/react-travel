import React from "react";
import { Col, Row, Typography } from 'antd';
import { Header, Footer, Carousel, SideMenu, ProductCollection, BusinessPartners } from '../../components'
import { productList1, productList2, productList3 } from './mockups'
import styles from './Home.module.css'
import s1 from '../../assets/images/sider_2019_12-09.png'
import s2 from '../../assets/images/sider_2019_02-04.png'
import s3 from '../../assets/images/sider_2019_02-04-2.png'
import bp1 from '../../assets/images/facebook-807588_640.png'
import bp2 from '../../assets/images/follow-826033_640.png'
import bp3 from '../../assets/images/icon-720944_640.png'
import bp4 from '../../assets/images/microsoft-80658_640.png'
const companies = [{ src: bp1 }, { src: bp2 }, { src: bp3 }, { src: bp4 }]

export class Home extends React.Component {
  render() {
    return (
      <>
        <Header />
        <div className={styles['page-content']}>
          <Row style={{ marginTop: 20 }}>
            <Col span={6}>
              <SideMenu />
            </Col>
            <Col span={18}>
              <Carousel />
            </Col>
          </Row>
          <ProductCollection
            title={<Typography.Title level={3} type="warning">爆火推荐</Typography.Title>}
            sideImage={s1}
            products={productList1}
          ></ProductCollection>
          <ProductCollection
            title={<Typography.Title level={3} type="warning">新品上市</Typography.Title>}
            sideImage={s2}
            products={productList2}
          ></ProductCollection>
          <ProductCollection
            title={<Typography.Title level={3} type="warning">国内游推荐</Typography.Title>}
            sideImage={s3}
            products={productList3}
          ></ProductCollection>
          <BusinessPartners
            title={<Typography.Title level={3}>合作共赢</Typography.Title>}
            companies={companies}
          />
          <Footer />
        </div>
      </>
    )
  }
}