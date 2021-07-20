import { ThunkAction, ThunkDispatch } from "redux-thunk"
import { RootState } from "../store"
import axios from 'axios'

export const FETCH_RECOMMEND_PRODUCTS_START = "FETCH_RECOMMEND_PRODUCTS_START"
export const FETCH_RECOMMEND_PRODUCTS_SUCCESS = "FETCH_RECOMMEND_PRODUCTS_SUCCESS"
// export const FETCH_RECOMMEND_PRODUCTS_FAIL = "FETCH_RECOMMEND_PRODUCTS_FAIL"

export interface FetchRecommendProductsStartAction {
  type: typeof FETCH_RECOMMEND_PRODUCTS_START
}
export interface FetchRecommendProductsSuccessAction {
  type: typeof FETCH_RECOMMEND_PRODUCTS_SUCCESS,
  payload: any
}

export type RecommendProductsAction = FetchRecommendProductsStartAction | FetchRecommendProductsSuccessAction

export const fetchRecommendProductsStartActionCreator = (): FetchRecommendProductsStartAction => {
  return {
    type: FETCH_RECOMMEND_PRODUCTS_START
  }
}

export const fetchRecommendProductsSuccessActionCreator = (data: any): FetchRecommendProductsSuccessAction => {
  return {
    type: FETCH_RECOMMEND_PRODUCTS_SUCCESS,
    payload: data
  }
}

export const giveMeDataActionCreator = (): ThunkAction<void, RootState, unknown, RecommendProductsAction> => (dispatch: ThunkDispatch<RootState, unknown, RecommendProductsAction>, getState) => {
  dispatch(fetchRecommendProductsStartActionCreator())
  try {
    axios.get('/mockups.json').then(res => {
      const { data } = res
      dispatch(fetchRecommendProductsSuccessActionCreator(data.productList1))
    })
  } catch (e) { }
}