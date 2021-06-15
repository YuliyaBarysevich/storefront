import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './components/header/header.js'
import Footer from './components/footer/footer.js'
import Products from './components/storefront/products.js'
import SimpleCart from './components/storefront/cart.js'
import ProductDetails from './components/storefront/details.js'

import { connect } from 'react-redux'; 
import { useEffect } from 'react'

import { inactive, active } from './store/categories.js';
import { getItems } from './store/products.js'
import { getRemoteData } from './store/products.js'
import { addItem } from './store/cart.js'

import './style.css'
function App(props) {

  useEffect(() => {
    props.getRemoteData();
  }, []);

  return(
    <BrowserRouter>
    <>
      <Header />
      <Switch>
        <Route exact path="/">
          <SimpleCart />
          <main>
            <Products />
          </main>
        </Route>
        <Route exact
          path={`/details/:${props.items._id}`}
          component={(props) => <ProductDetails {...props} />}>

        </Route>
      </Switch>
      <Footer />
    </>
    </BrowserRouter>
    
  )
}

const mapStateToProps = state => {
  return { items: state.items, activeCategory: state.categories.activeCategory }
}

const mapDispatchToProps = {
  inactive,
  active,
  getItems,
  addItem,
  getRemoteData
}
export default connect (mapStateToProps, mapDispatchToProps)(App);
// export default App;