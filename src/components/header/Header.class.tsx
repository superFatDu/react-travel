import React from "react";
import { withTranslation, WithTranslation } from 'react-i18next'
import styles from './Header.module.css'
import { Button, Dropdown, Input, Layout, Menu, Typography } from 'antd'
import { GlobalOutlined } from '@ant-design/icons'
import logo from '../../assets/logo.svg'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { RootState } from '../../redux/store'
import { changeLanguageActionCreator, addLanguageActionCreator } from '../../redux/language/languageActions'
import { connect } from 'react-redux'
import { Dispatch } from "redux";

const mapStateToProps = (state: RootState) => {
  return {
    language: state.language.language,
    languageList: state.language.languageList
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    changeLanguage: (code: 'zh' | 'en') => {
      const action = changeLanguageActionCreator(code)
      dispatch(action)
    },
    addLanguage: (name: string, code: string) => {
      const action = addLanguageActionCreator(name, code)
      dispatch(action)
    }
  }
}
type PropType = RouteComponentProps & WithTranslation & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>
class HeaderComponent extends React.Component<PropType> {
  menuClickHandler = (e: any) => {
    if (e.key === 'new') {
      this.props.addLanguage('新语言', 'zh')
    } else {
      this.props.changeLanguage(e.key)
    }
  }
  render() {
    const { history, t } = this.props
    return (
      <div className={styles['app-header']}>
        {/* top-header */}
        <div className={styles['top-header']}>
          <Typography.Text>{t('header.slogan')}</Typography.Text>
          <Dropdown.Button
            style={{ marginLeft: 15 }}
            overlay={
              <Menu onClick={this.menuClickHandler}>
                {/* <Menu.Item>中文</Menu.Item>
                <Menu.Item>English</Menu.Item> */}
                {
                  this.props.languageList.map((item) => {
                    return <Menu.Item key={item.code}>{item.name}</Menu.Item>
                  })
                }
                <Menu.Item key="new">{t('header.add_new_language')}</Menu.Item>
              </Menu>
            }
            icon={<GlobalOutlined />}
          >{this.props.language === 'zh' ? '中文' : 'English'}</Dropdown.Button>
          <Button.Group className={styles['button-group']}>
            <Button onClick={() => history.push('/login')}>{t('header.register')}</Button>
            <Button onClick={() => history.push('/register')}>{t('header.signin')}</Button>
          </Button.Group>
        </div>
        {/* search-header */}
        <Layout.Header className={styles['main-header']}>
          <span onClick={() => history.push('/')}>
            <img src={logo} alt="" className={styles['App-logo']} />
            <Typography.Title level={3} className={styles.title}>{t('header.title')}</Typography.Title>
          </span>
          <Input.Search placeholder={"欢迎来到我的世界"} className={styles['search-input']} />
        </Layout.Header>
        <Menu mode={"horizontal"} className={styles['main-menu']}>
          <Menu.Item key={1}>旅游首页</Menu.Item>
          <Menu.Item key={2}>周末游</Menu.Item>
          <Menu.Item key={3}>跟团游</Menu.Item>
          <Menu.Item key={4}>自由行</Menu.Item>
          <Menu.Item key={5}>私家团</Menu.Item>
          <Menu.Item key={6}>邮轮</Menu.Item>
          <Menu.Item key={7}>酒店+景点</Menu.Item>
          <Menu.Item key={8}>当地玩乐</Menu.Item>
          <Menu.Item key={9}>主题游</Menu.Item>
          <Menu.Item key={10}>定制游</Menu.Item>
          <Menu.Item key={11}>游学</Menu.Item>
          <Menu.Item key={12}>签证</Menu.Item>
          <Menu.Item key={13}>企业游</Menu.Item>
          <Menu.Item key={14}>高端游</Menu.Item>
          <Menu.Item key={15}>爱玩户外</Menu.Item>
          <Menu.Item key={16}>保险</Menu.Item>
        </Menu>
      </div>
    )
  }
}

export const Header = connect(mapStateToProps, mapDispatchToProps)(withTranslation()(withRouter(HeaderComponent)))