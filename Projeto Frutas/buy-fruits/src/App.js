import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Cart from "./routes/Cart"
import Home from "./routes/Home"
import Layout from './components/Layout';


function App() {
  return (
    
      <Routes>
        <Route element={<Layout/>}>
        <Route path="/" element={<Home />}/>
        <Route path="/cart" element={<Cart/>}/>
        </Route>
      </Routes>
  );
}

export default App;