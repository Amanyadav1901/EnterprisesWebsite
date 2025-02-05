import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Product from "../Components/Product/Product";
import MainPage from "../Components/MainPage";
import NavBar from "../Components/Navigation/navbar";
import HomePage from "../Components/Pages/HomePage";
import Contact from "../Components/contact/Contact";
import ProductDetails from "../Components/ProductDetails/ProductDetails";
import ContactPage from "../Components/contact/ContactPage";

const CustomerRouters = () => {
  return (
    <div>
      <NavBar />

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<HomePage />} />
        <Route path="/product/:category" element={<Product />} />
        <Route
          path="/product/:category/:subCategory/:productId"
          element={<ProductDetails />}
        />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default CustomerRouters;
