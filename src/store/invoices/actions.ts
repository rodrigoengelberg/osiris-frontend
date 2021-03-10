import {
  GET_INVOICES,
  GET_INVOICES_FAIL,
  GET_INVOICES_SUCCESS,
  GET_INVOICE_DETAIL,
  GET_INVOICE_DETAIL_FAIL,
  GET_INVOICE_DETAIL_SUCCESS,
} from './actionTypes'

export const getInvoices = () => ({
  type: GET_INVOICES,
})

export const getInvoicesSuccess = (invoices: any) => ({
  type: GET_INVOICES_SUCCESS,
  payload: invoices,
})

export const getInvoicesFail = (error: any) => ({
  type: GET_INVOICES_FAIL,
  payload: error,
})

export const getInvoiceDetail = (invoiceId: any) => ({
  type: GET_INVOICE_DETAIL,
  invoiceId,
})

export const getInvoiceDetailSuccess = (invoices: any) => ({
  type: GET_INVOICE_DETAIL_SUCCESS,
  payload: invoices,
})

export const getInvoiceDetailFail = (error: any) => ({
  type: GET_INVOICE_DETAIL_FAIL,
  payload: error,
})
