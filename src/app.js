import React from 'react';

import Header from './components/header/header.js'
import Footer from './components/footer/footer.js'
import Products from './components/storefront/products.js'
import SimpleCart from './components/storefront/cart.js'


function App() {
  return(
    <>
      <Header />
      <SimpleCart />
      <main>
        <Products />
      </main>
      <Footer />
    </>
  )
}

export default App;