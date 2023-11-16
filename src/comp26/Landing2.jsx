import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigation } from "./Navigation";
import { About } from "./About";
import { Home } from "./Home";
import { Contact } from "./Contact";
import { CategoriesList } from "../components/CategoriesList";
import { ProductList } from "../components/ProductList";

export const Landing2 = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
        <Route path="/cnct" element={<Contact />} />
        <Route path="/cat" element={<CategoriesList />} />
        <Route path="/product" element={<ProductList />} />
      </Routes>
    </BrowserRouter>
  );
};
