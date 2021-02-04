import { IResponseProductData, TCreateAction } from '../../types'

const createAction = (type: string, payload?: any) => ({ type, payload })

export const LOAD_BANNER_REQUEST = 'LOAD_BANNER_REQUEST'
export const LOAD_BANNER_SUCCESS = 'LOAD_BANNER_SUCCESS'
export const LOAD_BANNER_FAILURE = 'LOAD_BANNER_FAILURE'

export const LOAD_PRODUCT_REQUEST = 'LOAD_PRODUCT_REQUEST'
export const LOAD_PRODUCT_SUCCESS = 'LOAD_PRODUCT_SUCCESS'
export const LOAD_PRODUCT_FAILURE = 'LOAD_PRODUCT_FAILURE'

export const ADD_CART_REQUEST = 'ADD_CART_REQUEST'
export const ADD_CART_SUCCESS = 'ADD_CART_SUCCESS'
export const ADD_CART_FAILURE = 'ADD_CART_FAILURE'

export const loadBannerReqeust: TCreateAction<any, any> = () => createAction(LOAD_BANNER_REQUEST)
export const loadBannerSuccess: TCreateAction<string, IResponseProductData> = (payload) =>
  createAction(LOAD_BANNER_SUCCESS, payload)
export const loadBannerError: TCreateAction<string, string> = (payload) => createAction(LOAD_BANNER_FAILURE, payload)

export const loadProductReqeust: TCreateAction<number, any> = (page) => createAction(LOAD_PRODUCT_REQUEST, page)
export const loadProductSuccess: TCreateAction<string, IResponseProductData> = (payload) =>
  createAction(LOAD_PRODUCT_SUCCESS, payload)
export const loadProductError: TCreateAction<string, string> = (payload) => createAction(LOAD_PRODUCT_FAILURE, payload)

export const addCartReqeust: TCreateAction<string, any> = (id) => createAction(ADD_CART_REQUEST, id)
export const addCartSuccess: TCreateAction<string, IResponseProductData> = (payload) =>
  createAction(ADD_CART_SUCCESS, payload)
export const addCartError: TCreateAction<string, string> = (payload) => createAction(ADD_CART_FAILURE, payload)

export type TProductAction =
  | ReturnType<typeof loadBannerReqeust>
  | ReturnType<typeof loadBannerSuccess>
  | ReturnType<typeof loadBannerError>
  | ReturnType<typeof loadProductReqeust>
  | ReturnType<typeof loadProductSuccess>
  | ReturnType<typeof loadProductError>
  | ReturnType<typeof addCartReqeust>
  | ReturnType<typeof addCartSuccess>
  | ReturnType<typeof addCartError>
