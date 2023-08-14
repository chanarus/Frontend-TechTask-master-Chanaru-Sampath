import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import CategoryContextProvider from '../../providers/CategoryContextProvider';
import Cart from '../Cart';
import ProductList from '../ProductList';

interface AppProps {}

const App = () => {
  return (
    <BrowserRouter basename="">
      <CategoryContextProvider>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </CategoryContextProvider>
    </BrowserRouter>
  );
};

export default App;
