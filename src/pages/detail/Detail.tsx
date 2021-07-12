import React from "react";
import styles from './Detail.module.css'
import { RouteComponentProps } from 'react-router-dom'

interface matchParams {
  touristRouteId: string
}

export const Detail: React.FC<RouteComponentProps<matchParams>> = (props) => {
  return <div>参数：{props.match.params.touristRouteId}</div>
}