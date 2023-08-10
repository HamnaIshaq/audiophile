import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/css/normalize.css";
import "./assets/css/index.css";
//import Header from "./components/Header";
import ProductCard from "./components/ProductCard";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProductCard />
  </React.StrictMode>
);
