import { createBrowserRouter } from "react-router-dom";
import Products from "../pages/Products";
import Home from "../pages/Home";

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
    element: <div>selected product details will be shown here</div>,
  },
]);
