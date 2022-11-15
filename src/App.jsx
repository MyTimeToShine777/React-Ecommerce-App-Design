import React from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Cart from "./pages/Cart";

const App = () => {
  const user = false;
  return (
    <div>
      <Home user={user} />
      <Login />
      <Register />
      <Product />
      <ProductList />
      <Cart />
    </div>
  );
};

export default App;
