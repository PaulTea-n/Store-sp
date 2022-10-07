import React from "react";
import { Routes, Route } from "react-router-dom";
import CartPage from "./pages/CartPage/CartPage";
import FavoritePage from "./pages/FavoritePage/FavoritePage";
import HomePage from "./pages/HomePage/HomePage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route path="/cart" element={<CartPage />} />

      <Route path="/favorite" element={<FavoritePage />} />
    </Routes>
  );
};

export default AppRoutes;
