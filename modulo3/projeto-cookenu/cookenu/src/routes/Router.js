import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddRecipesPage from "../pages/AddRecipesPage/AddRecipesPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import RecipeDetailsPage from "../pages/RecipeDetailsPage/RecipeDetailsPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import RecipeListPage from "../pages/RecipesListPage/RecipesListPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/detalhe/:id" element={<RecipeDetailsPage />} />
        <Route path="/Adicionar" element={<AddRecipesPage />} />
        <Route path="/cadastro" element={<SignUpPage />} />
        <Route path="/" element={<RecipeListPage />} />

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
