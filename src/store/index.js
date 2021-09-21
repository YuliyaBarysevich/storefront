import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import ReduxThunk from 'redux-thunk'
import categories from './categories.js'
import products from './products.js'
import cart from './cart.js'

let reducers = combineReducers({ categories, products, cart })

const store = () => {
  // return createStore(reducers, composeWithDevTools());
  return createStore(reducers, composeWithDevTools(applyMiddleware(ReduxThunk)));
}

export default store();