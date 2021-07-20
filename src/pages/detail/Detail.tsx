import React, { useEffect, useState } from "react";
// import styles from './Detail.module.css'
import { RouteComponentProps, useParams } from 'react-router-dom'
import axios from 'axios'
import { Spin } from 'antd'
import { Header, Footer } from '../../components'

interface matchParams {
  touristRouteId: string
}

export const Detail: React.FC<RouteComponentProps<matchParams>> = (props) => {
  const { touristRouteId } = useParams<matchParams>()
  const [loading, setLoading] = useState<boolean>(true)
  const [product, setProduct] = useState<any>(null)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const { data } = await axios.get('/mockups.json')
        setLoading(false)
        setProduct(data.productList1)
      } catch (e) {
        setLoading(true)
      }
    }
    setTimeout(fetchData, 2000)
  }, [])
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
      <div></div>
      <Footer />
    </>
  )
}