import React from 'react';
import ReactDOM from 'react-dom/client';
import { ProductsContextProvider } from './context/ProductsContext';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ProductsContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ProductsContextProvider>
);
