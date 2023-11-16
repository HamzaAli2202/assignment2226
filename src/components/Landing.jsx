import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CategoriesList } from "./CategoriesList";
import { ProductList } from "./ProductList";



export const Landing = () => {
  return (
    <BrowserRouter>
      <CategoriesList />
      <Routes>
        
        <Route path="/product" element={<ProductList />} />
      </Routes>
    </BrowserRouter>
  );
};
