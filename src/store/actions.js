import superagent from 'superagent';
// import { getAction } from './products';

let api = 'https://barysevich-server-api.herokuapp.com/api/v1/products';

export const GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS';
export const GET_PRODUCTS_PENDING = 'GET_PRODUCTS_PENDING';
export const SET_CATEGORY = 'SET_CATEGORY';
export const DECREMENT_INSTOCK = 'DECREMENT_INSTOCK';
export const INCREMENT_INSTOCK = 'INCREMENT_INSTOCK';

export const ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART';
export const REMOVE_ITEM_FROM_CART = 'REMOVE_ITEM_FROM_CART';

export const getRemoteData = () => dispatch => {
  dispatch(loadingToggleAction())
  return superagent.get(api)
    .then(res => {
      dispatch(getAction(res.body))
    })
}

export const decrementRemoteData = (data) => async (dispatch) => {
  let res = await superagent.put(`${api}/${data._id}`).send(data);
  dispatch(decrementInstock(res.body))
};

export const incrementRemoteData = (data) => async (dispatch) => {
  let res = await superagent.put(`${api}/${data._id}`).send(data);
  dispatch(incrementInstock(res.body));
};

export const getAction = data => {
  return {
    type: GET_PRODUCTS_SUCCESS,
    payload: data
  }
};

export const decrementInstock = data => {
  return {
    type: DECREMENT_INSTOCK,
    payload: data
  }
};

export const incrementInstock = data => {
  return {
    type: INCREMENT_INSTOCK,
    payload: data
  }
};

export const loadingToggleAction = () => {
  return {
    type: GET_PRODUCTS_PENDING
  }
};

export const addItemToCart = (item) => {
  return {
    type: ADD_ITEM_TO_CART,
    payload: item
  }
};

export const removeItemFromCart = (item) => {
  return {
    type: REMOVE_ITEM_FROM_CART,
    payload: item
  }
};

export const setActiveCategory = (category) => {
  return {
    type: SET_CATEGORY,
    payload: category
  }
};