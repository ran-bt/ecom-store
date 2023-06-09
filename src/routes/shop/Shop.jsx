import { Fragment, useContext } from "react";
import { Route, Routes } from "react-router-dom";
import CategoriesPreview from "../categories-previews/CategoriesPreview";
import Category from "../category/Category";
import "./shop.scss";

const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
