
import './App.css';
import Header from './Components/header/Header'
import All from './Components/products/all/All'
import Electronics from './Components/products/electronics/Electronics'
import Jewelery from './Components/products/jewelery/Jewelery';
import Mens from './Components/products/mensClothing/MensClothing';
import WoMens from './Components/products/womenClothing/WomensClothing';
import { useState } from "react";
import React from 'react';
import Login from './Components/login/Login'
import SignUp from './Components/signUp/SignUp'
import Cart from './Components/cart/Cart';
import Favorites from './Components/favourite/Favorites';
import { Route,Routes } from 'react-router-dom';


function App() {

  const [cart,setCart] = useState([]);
  const [Favorite,setFavorites] = useState([]);

  function addToCart(params){
  
    if(cart.includes(params)){
      cart.splice(cart.indexOf(params),1)
    }else{
      cart.push(params)
    }
    setCart([...cart])
    console.log(cart)
    
}

function addToFavorites(params){
       
  if(Favorite.includes(params)){
    Favorite.splice(Favorite.indexOf(params),1)
  }else{
    Favorite.push(params)
  }
  setFavorites([...Favorite])
  console.log(Favorite)

  
  // setHeart(heart)
}
// function Rating(rate){
//   return (rate / 5 ) * 100;
  
// }

  return (
    <div className="App">
      
      <Header  cartCount={cart.length}  />

      <Routes>
      <Route path='/' element={ <All  Favorite={Favorite} addToFavorites={addToFavorites} cart={cart} addToCart={addToCart}/>} ></Route>
      <Route path='/electronics' element={ <Electronics  Favorite={Favorite} addToFavorites={addToFavorites} cart={cart} addToCart={addToCart}/>} ></Route>
      <Route path='/Jewelery' element={ <Jewelery  Favorite={Favorite} addToFavorites={addToFavorites} cart={cart} addToCart={addToCart}/>} ></Route>
      <Route path='/Menclothing' element={ <Mens  Favorite={Favorite} addToFavorites={addToFavorites} cart={cart} addToCart={addToCart}/>} ></Route>
      <Route path='/Womenclothing' element={ <WoMens  Favorite={Favorite} addToFavorites={addToFavorites} cart={cart} addToCart={addToCart}/>} ></Route>

      <Route path='/login' element={ <Login />} ></Route>
      <Route path='/signup' element={ <SignUp />} ></Route>
      <Route path='/cart' element={ <Cart cart={cart} addToCart={addToCart}/>} ></Route> 
      <Route path='/favorites' element={ <Favorites  Favorite={Favorite} cart={cart} addToFavorites={addToFavorites} addToCart={addToCart}/>} ></Route>
       
      </Routes>

      
    </div>
  );
}

export default App;
