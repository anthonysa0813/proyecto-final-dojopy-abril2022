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
import ProductProvider from "./context/ProductContext";
import Dashboard from "./components/pages/Dashboard";
import Pay from "./components/pages/Pay";
import TotalProductsProvider from "./context/TotalProductsContext";
import AuthProvider from "./context/Auth";
import PrivateRoute from "./components/molecules/PrivateRoute";

const App = () => {
  return (
    <AuthProvider>
      <TotalProductsProvider>
        <ProductProvider>
          <Header />
          <BrowserRouter>
            <main>
              <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/products" element={<ProductPage />} />
                <Route path="/products/:id" element={<ProductDetails />} />
                <Route
                  path="/pay"
                  element={
                    <PrivateRoute>
                      <Pay />
                    </PrivateRoute>
                  }
                />
                <Route path="/dashboard-admin" element={<Dashboard />} />
              </Routes>
            </main>
          </BrowserRouter>
        </ProductProvider>
      </TotalProductsProvider>
    </AuthProvider>
  );
};

export default App;
