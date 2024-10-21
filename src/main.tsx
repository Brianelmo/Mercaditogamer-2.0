import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home.tsx";
import "./index.css";
import React from "react";
import { ProductsService } from "./services/ProductsService.tsx";
import Consolas from "./pages/Consolas.tsx";  
import Products from "./pages/Products.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ProductsService>
        <Routes>
          <Route index element={<Home />} />
          <Route path="consolas" element={<Consolas />} />
          <Route path="products/:section/:title/:id" element={<Products />}/>
        </Routes>
      </ProductsService>
    </BrowserRouter>
  </React.StrictMode>
);
