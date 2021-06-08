import React from 'react';

import Header from './components/header/header.js'
import Footer from './components/footer/footer.js'
import Products from './components/storefront/products.js'


function App() {
  return(
    <>
      <Header />
      <main>
        <Products />
      </main>
      <Footer />
    </>
  )
}

export default App;