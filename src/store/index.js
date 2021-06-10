import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import categoryReducer from './categories.js'
import itemsReducer from './products.js'
import cartReducer from './cart.js'

let reducers = combineReducers({ categories: categoryReducer, items: itemsReducer, cartArr: cartReducer })

const store = () => {
  // return createStore(reducers, composeWithDevTools());
  return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
}

export default store();