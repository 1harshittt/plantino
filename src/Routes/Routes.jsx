import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./DefaultLayout";
import Home from "../Home";
import Products from "../Products";
import About from "../About";
import Account from "../Account";
import Register from "../Account/Register";
import Cart from "../Home/Cart";
import Error from "../Shared/Error";
import ForBeginners from "../HotDealsPages/For Beginners";
import FloweringPlants from "../HotDealsPages/Flowering Plants";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "*",
        element: <Error />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/account",
        element: <Account />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/forbeginners",
        element: <ForBeginners />,
      },
      {
        path: "/floweringplants",
        element: <FloweringPlants />,
      },
    ],
  },
]);

export default router;
