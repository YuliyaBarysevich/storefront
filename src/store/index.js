import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import categoryReducer from './categories.js'
import itemsReducer from './products.js'

let reducers = combineReducers({ categories: categoryReducer, items: itemsReducer })

const store = () => {
  return createStore(reducers, composeWithDevTools());
}

export default store();