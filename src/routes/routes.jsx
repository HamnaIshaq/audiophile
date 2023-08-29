import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import Products from "../pages/Products";
import Index from "../pages/ProductAbout/index";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/category/:slug",
    element: <Products />,
  },
  {
    path: "/category/:slug/:productSlug",
    element: <Index />,
  },
]);
