import {
    PRODUCT_LIST_FAILED,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_REQUEST,
  } from "../constants/productConstants";
  import axios from "axios";
  export const listProducts = (page) => async (dispatch) => {
    try {
      dispatch({ type: PRODUCT_LIST_REQUEST });
      const {data} = await axios.get(`/api/products/?page=${page}`);
      console.log(data.products)
      dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: PRODUCT_LIST_FAILED,
        payload: (error.response && error.response.data.message) || error.message,
      });
    }
  };
  