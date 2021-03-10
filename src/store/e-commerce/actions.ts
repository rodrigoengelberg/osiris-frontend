import {
  GET_CART_DATA,
  GET_CART_DATA_FAIL,
  GET_CART_DATA_SUCCESS,
  GET_ORDERS,
  GET_ORDERS_FAIL,
  GET_ORDERS_SUCCESS,
  GET_PRODUCTS,
  GET_PRODUCTS_FAIL,
  GET_PRODUCTS_SUCCESS,
  GET_CUSTOMERS,
  GET_CUSTOMERS_FAIL,
  GET_CUSTOMERS_SUCCESS,
  GET_SHOPS,
  GET_SHOPS_FAIL,
  GET_SHOPS_SUCCESS,
  GET_PRODUCT_DETAIL,
  GET_PRODUCT_DETAIL_FAIL,
  GET_PRODUCT_DETAIL_SUCCESS,
} from './actionTypes'

export const getProducts = () => ({
  type: GET_PRODUCTS,
})

export const getProductsSuccess = (products: any) => ({
  type: GET_PRODUCTS_SUCCESS,
  payload: products,
})

export const getProductsFail = (error: any) => ({
  type: GET_PRODUCTS_FAIL,
  payload: error,
})

export const getProductDetail = (productId: any) => ({
  type: GET_PRODUCT_DETAIL,
  productId,
})

export const getProductDetailSuccess = (products: any) => ({
  type: GET_PRODUCT_DETAIL_SUCCESS,
  payload: products,
})

export const getProductDetailFail = (error: any) => ({
  type: GET_PRODUCT_DETAIL_FAIL,
  payload: error,
})

export const getOrders = () => ({
  type: GET_ORDERS,
})

export const getOrdersSuccess = (orders: any) => ({
  type: GET_ORDERS_SUCCESS,
  payload: orders,
})

export const getOrdersFail = (error: any) => ({
  type: GET_ORDERS_FAIL,
  payload: error,
})

export const getCartData = () => ({
  type: GET_CART_DATA,
})

export const getCartDataSuccess = (cartData: any) => ({
  type: GET_CART_DATA_SUCCESS,
  payload: cartData,
})

export const getCartDataFail = (error: any) => ({
  type: GET_CART_DATA_FAIL,
  payload: error,
})

export const getCustomers = () => ({
  type: GET_CUSTOMERS,
})

export const getCustomersSuccess = (customers: any) => ({
  type: GET_CUSTOMERS_SUCCESS,
  payload: customers,
})

export const getCustomersFail = (error: any) => ({
  type: GET_CUSTOMERS_FAIL,
  payload: error,
})

export const getShops = () => ({
  type: GET_SHOPS,
})

export const getShopsSuccess = (shops: any) => ({
  type: GET_SHOPS_SUCCESS,
  payload: shops,
})

export const getShopsFail = (error: any) => ({
  type: GET_SHOPS_FAIL,
  payload: error,
})
