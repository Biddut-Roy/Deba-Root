import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Root from "../Root";
import Login from "../Component/Login & signin/Login";
import SignUp from "../Component/Login & signin/SignUp";



export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/signup",
          element: <SignUp />,
        },
      ],
    },
  ]);