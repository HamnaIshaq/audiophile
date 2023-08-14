import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/css/normalize.css";
import "./assets/css/index.css";
import Checkout from "./pages/Checkout";
//import Header from "./components/Header";
//import ProductCard from "./components/ProductCard";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Checkout />
  </React.StrictMode>
);
