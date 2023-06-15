import React from 'react';
import ReactDOM from 'react-dom/client';
import { ProductsContextProvider } from './context/ProductsContext';
import { ShoppingCartContextProvider } from './context/ShoppingCartContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ProductsContextProvider>
    <ShoppingCartContextProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ShoppingCartContextProvider>
  </ProductsContextProvider>
);
