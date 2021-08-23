
import { GET_PRODUCTS_SUCCESS, DECREMENT_INSTOCK, INCREMENT_INSTOCK, GET_PRODUCTS_PENDING } from "./actions";

export const initialState = {
  products: [],
  showLoading: true
}

// let api = 'https://api-js401.herokuapp.com/api/v1/products'
// let api = 'https://barysevich-server-api.herokuapp.com/api/v1/products'



export default (state = initialState, action = {}) => {
  let {type, payload} = action;

  switch(type){
    case GET_PRODUCTS_SUCCESS:{
      return {
        ...state,
        showLoading: false,
        products: payload
      }
    }

    case GET_PRODUCTS_PENDING:{
      return{
        ...state,
        showLoading: true,
      }
    }

    case DECREMENT_INSTOCK:{
      let products = state.products.map(product => {
        if(product._id === payload._id){
          return {
            ...product,
            inStock: product.inStock - 1
          }
        }
        return product;
      });
      return {
        ...state,
        products
      }
    }

    case INCREMENT_INSTOCK:{
      let products = state.products.map(product => {
        if(product.name === payload.name){
          return {
            ...product,
            inStock: product.inStock + 1
          }
        }
        return product;
      });
      return {
        ...state,
        products
      };
    }

    default:
      return state

  }
}

// export const getRemoteData = () => dispatch => {
//   return superagent.get(api)
//     .then(response => {
//       dispatch(getAction(response.body))
//     })
// }

// export function getItems(category){
//   const items = initialState.listOfItems;
//   const filteredByCategory = items.filter(item => item.category === category);
//   return filteredByCategory;
// }

// export const getAction = data => {
//   return{
//     type: 'GET',
//     payload: data
//   }
// }

