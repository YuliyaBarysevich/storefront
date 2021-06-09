import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import categoryReducer from './categories.js'
import itemsReducer from './products.js'
import cartReducer from './cart.js'

let reducers = combineReducers({ categories: categoryReducer, items: itemsReducer, cartArr: cartReducer })

const store = () => {
  return createStore(reducers, composeWithDevTools());
}

export default store();