import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Login from "./pages/Login/Login";
import Orders from "./pages/Orders/Orders";
import PlaceOrder from "./pages/Checkout/PlaceOrder";
import Cart from "./components/Cart";
import Product from "./pages/Product/Product";
import Shop from "./pages/Shop/Shop";
import Blog from "./pages/Blog/Blog";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import { MyProvider } from "./context";
import ProductBlog from "./pages/ProductBlog/ProductBlog";

const App = () => {
  return (
    <MyProvider>
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        
        <Route path="/cart" element={<Cart/>} />
        <Route path="/place-order" element={<PlaceOrder />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/login" element={<Login />} />

        <Route path="/blog/:id" element={<ProductBlog />} />



      </Routes>
      <Footer />
    </div>
    </MyProvider>
  );
};

export default App;
