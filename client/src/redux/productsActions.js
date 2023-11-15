import axios from 'axios'
import {
  PRODUCT_HOME_REQUEST,
  PRODUCT_HOME_SUCCESS,
  PRODUCT_HOME_FAIL,
  // PRODUCT_DETAILS_REQUEST,
  // PRODUCT_DETAILS_SUCCESS,
  // PRODUCT_DETAILS_FAIL
} from './productsConstants'

export const homeProducts = async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_HOME_REQUEST })

    const { data } = await axios.get('http://localhost:4000/products')
    dispatch({
      type: PRODUCT_HOME_SUCCESS,
      payload: data
    })
  }
  catch (error) {
    dispatch({
      type: PRODUCT_HOME_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}



// export const detailsProducts = async (dispatch) => {
//   try {
//     dispatch({ type: PRODUCT_DETAILS_REQUEST })

//     const { data } = await axios.get('http://localhost:4000/products')
//     dispatch({
//       type: PRODUCT_DETAILS_SUCCESS,
//       payload: data
//     })
//   }
//   catch (error) {
//     dispatch({
//       type: PRODUCT_DETAILS_FAIL,
//       payload: error.response && error.response.data.message ? error.response.data.message : error.message
//     })
//   }
// }