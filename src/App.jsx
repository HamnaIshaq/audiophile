import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Root from "./pages/Root";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Headphone from "./pages/Headphone";
import Checkout from "./pages/Checkout";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route path="/" element={<Home />} />
        <Route path=":productsId" element={<Product />} />
        <Route path=":productsId/:singleProductId" element={<Headphone />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
