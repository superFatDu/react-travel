import React from "react";
import { withTranslation, WithTranslation } from 'react-i18next'
import { Col, Row, Typography, Spin } from 'antd';
import { Header, Footer, Carousel, SideMenu, ProductCollection, BusinessPartners } from '../../components'
import { productList2, productList3 } from './mockups'
import { connect } from 'react-redux'
import { RootState } from "../../redux/store";
import { giveMeDataActionCreator } from "../../redux/recommendProducts/recommendProductsActions";
import styles from './Home.module.css'
import s1 from '../../assets/images/sider_2019_12-09.png'
import s2 from '../../assets/images/sider_2019_02-04.png'
import s3 from '../../assets/images/sider_2019_02-04-2.png'
import bp1 from '../../assets/images/facebook-807588_640.png'
import bp2 from '../../assets/images/follow-826033_640.png'
import bp3 from '../../assets/images/icon-720944_640.png'
import bp4 from '../../assets/images/microsoft-80658_640.png'
const companies = [{ src: bp1 }, { src: bp2 }, { src: bp3 }, { src: bp4 }]

const mapStateToProps = (state: RootState) => {
  return {
    loading: state.recommendProducts.loading,
    productList1: state.recommendProducts.productList1
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchData: () => dispatch(giveMeDataActionCreator())
  }
}
class HomeComponent extends React.Component<WithTranslation & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>> {

  componentDidMount() {
    this.props.fetchData()
  }

  render() {
    const { t, productList1, loading } = this.props
    if (loading) {
      return (
        <Spin
          size="large"
          style={{
            marginTop: 200,
            marginBottom: 200,
            marginLeft: "auto",
            marginRight: "auto",
            width: "100%"
          }}
        />
      )
    }
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
            title={<Typography.Title level={3} type="warning">{t('home_page.hot_recommended')}</Typography.Title>}
            sideImage={s1}
            products={productList1}
          ></ProductCollection>
          <ProductCollection
            title={<Typography.Title level={3} type="warning">{t('home_page.new_arrival')}</Typography.Title>}
            sideImage={s2}
            products={productList2}
          ></ProductCollection>
          <ProductCollection
            title={<Typography.Title level={3} type="warning">{t('home_page.domestic_travel')}</Typography.Title>}
            sideImage={s3}
            products={productList3}
          ></ProductCollection>
          <BusinessPartners
            title={<Typography.Title level={3}>{t('home_page.joint_venture')}</Typography.Title>}
            companies={companies}
          />
          <Footer />
        </div>
      </>
    )
  }
}

export const Home = connect(mapStateToProps, mapDispatchToProps)(withTranslation()(HomeComponent))