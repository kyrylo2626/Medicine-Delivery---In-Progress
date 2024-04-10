import { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { LayoutComponent } from './components/Layout';

import ShopPage from './pages/ShopPage';
import CartPage from './pages/CartPage';


function App() {
  
  const [cart, setCartItem] = useState([]);

  return (
      <>
        <Routes>
          <Route path='/' element={ <LayoutComponent />}>
            <Route path='/shop' element={ <ShopPage cart={cart} setCartItem={setCartItem}/> } />
            <Route path='/cart' element={ <CartPage cart={cart} setCartItem={setCartItem}/> } />
            <Route index element={ <ShopPage cart={cart} setCartItem={setCartItem}/> } />
            <Route index element={ <ShopPage cart={cart} setCartItem={setCartItem}/> } />
            <Route path='*' element={ <ShopPage cart={cart} setCartItem={setCartItem}/> } />
          </Route>
        </Routes>
      </>
  );
}

export default App;
