import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { SideBar } from "./component/SideBar";
import { Dashboard } from "./page/Dashboard";
import { Department } from "./page/Department";
import { DetailedProduct } from "./page/DetailedProduct";
import { ProductListing } from "./page/ProductListing";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <SideBar />

      <div className="left-box">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/department" element={<Department />} />
          <Route path="/product" element={<ProductListing />} />
          <Route path="/product/:productID" element={<DetailedProduct />} />
        </Routes>
      </div>
    </div>
  );
}
