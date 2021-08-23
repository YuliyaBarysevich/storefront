import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Main from './main.js'
import store from './store/index.js'

import './styles/reset.css'
// import './styles/base.css'
import './styles/base.css'
import './styles/layout.css'
// import './styles/base.css'

function Entry(){
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  )
}

const root = document.getElementById('root');
ReactDOM.render(<Entry />, root)