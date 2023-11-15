import {
  PRODUCT_HOME_REQUEST,
  PRODUCT_HOME_SUCCESS,
  PRODUCT_HOME_FAIL,
  // PRODUCT_DETAILS_REQUEST,
  // PRODUCT_DETAILS_SUCCESS,
  // PRODUCT_DETAILS_FAIL
} from './productsConstants'

export const productHomeReducer = (state = { products: [] }, action) => {

  switch (action.type) {
    case PRODUCT_HOME_REQUEST:
      return { loading: true, products: [] }
    case PRODUCT_HOME_SUCCESS:
      return { loading: false, products: action.payload }
    case PRODUCT_HOME_FAIL:
      return { loading: false, error: action.payload }

    default:
      return state
  }
}

// export const productDetailsReducer = (state = { product:{reviews:[]} }, action) => {

//   switch (action.type) {
//     case PRODUCT_DETAILS_REQUEST:
//       return { loading: true, ...state }
//     case PRODUCT_DETAILS_SUCCESS:
//       return { loading: false, product: action.payload }
//     case PRODUCT_DETAILS_FAIL:
//       return { loading: false, error: action.payload }

//     default:
//       return state
//   }
// }