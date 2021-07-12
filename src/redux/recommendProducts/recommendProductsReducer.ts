import { RecommendProductsAction, FETCH_RECOMMEND_PRODUCTS_START, FETCH_RECOMMEND_PRODUCTS_SUCCESS } from './recommendProductsActions'

interface RecommendProductsState {
  loading: boolean,
  productList1: any[]
}

const defaultState: RecommendProductsState = {
  loading: true,
  productList1: []
}

export const recommendProductsReducer = (state = defaultState, action: RecommendProductsAction) => {
  switch (action.type) {
    case FETCH_RECOMMEND_PRODUCTS_START:
      return { ...state, loading: true }
    case FETCH_RECOMMEND_PRODUCTS_SUCCESS:
      return { ...state, loading: false, productList1: action.payload }
    default:
      return state
  }
}