import React from 'react';
import Header from './components/header/header.js'
import App from './app.js';
import Footer from './components/footer/footer.js'
import { BrowserRouter } from 'react-router-dom';


const Main = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Header />
        <App />
        <Footer />
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default Main;