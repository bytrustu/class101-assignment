import produce, { Draft } from 'immer'
import { ICartState } from '../../types'

import {
  TCartAction,
  ADD_CART_REQUEST,
  ADD_CART_SUCCESS,
  ADD_CART_FAILURE,
  REMOVE_CART_REQUEST,
  REMOVE_CART_SUCCESS,
  REMOVE_CART_FAILURE,
} from '../actions'
import { initFetchCycle, processFetchCycle } from '../utils'
import { fetchCycle } from '../../const'

const initialState: ICartState = {
  loading: fetchCycle,
  success: fetchCycle,
  error: fetchCycle,
  cartList: [],
}

export type TCartReducerState = typeof initialState

export default (state: TCartReducerState = initialState, action: TCartAction) => {
  return produce(state, (draft: Draft<TCartReducerState>) => {
    switch (action.type) {
      case ADD_CART_REQUEST: {
        draft.loading = processFetchCycle(draft.loading, ADD_CART_REQUEST, action.payload)
        draft.error = initFetchCycle(draft.error, ADD_CART_FAILURE)
        draft.success = initFetchCycle(draft.success, ADD_CART_SUCCESS)
        break
      }
      case ADD_CART_SUCCESS: {
        draft.loading = initFetchCycle(draft.loading, ADD_CART_REQUEST)
        draft.success = processFetchCycle(draft.success, ADD_CART_SUCCESS)
        draft.cartList = [...new Set([...draft.cartList, action.payload])]
        break
      }
      case ADD_CART_FAILURE: {
        draft.loading = initFetchCycle(draft.loading, ADD_CART_REQUEST)
        draft.error = processFetchCycle(draft.error, ADD_CART_FAILURE, action.payload)
        break
      }
      case REMOVE_CART_REQUEST: {
        draft.loading = processFetchCycle(draft.loading, REMOVE_CART_REQUEST, action.payload)
        draft.error = initFetchCycle(draft.error, REMOVE_CART_FAILURE)
        draft.success = initFetchCycle(draft.success, REMOVE_CART_SUCCESS)
        break
      }
      case REMOVE_CART_SUCCESS: {
        draft.loading = initFetchCycle(draft.loading, REMOVE_CART_REQUEST)
        draft.success = processFetchCycle(draft.success, REMOVE_CART_SUCCESS)
        draft.cartList = draft.cartList.filter((cartItem) => cartItem !== action.payload)
        break
      }
      case REMOVE_CART_FAILURE: {
        draft.loading = initFetchCycle(draft.loading, REMOVE_CART_REQUEST)
        draft.error = processFetchCycle(draft.error, REMOVE_CART_FAILURE, action.payload)
        break
      }
      default: {
        break
      }
    }
  })
}