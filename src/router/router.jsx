import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import SportsBook from "../pages/SportsBook/SportsBook";
import Login from "../pages/Login/Login";
import EventDetails from "../pages/EventDetails/EventDetails";
import ForgotPassword from "../pages/ForgotPassword/ForgotPassword";
import Register from "../pages/Register/Register";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,

      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/sports-book/:eventName/:eventTypeId",
          element: <SportsBook />,
        },
        {
          path: "/event-details/:eventTypeId/:eventId",
          element: <EventDetails />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/forgot-password",
      element: <ForgotPassword />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ],
  {
    basename: import.meta.env.BASE_URL ?? "/",
  }
);
