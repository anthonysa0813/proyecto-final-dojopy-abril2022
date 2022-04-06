import React from "react";
import Header from "./components/molecules/Header";
import "./index.css";
import "../style.css";
import Hero from "./components/molecules/Hero";
import Products from "./components/pages/Products";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./components/pages/Inicio";
import ProductPage from "./components/pages/ProductPage";
import ProductDetails from "./components/pages/ProductDetails";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
