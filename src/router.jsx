import { createBrowserRouter } from "react-router-dom";
import NotFound from "./routers/NotFound";
import InitialPage from "./routers/InitialPage";
import SignUp from "./routers/SignUp";
import SignIn from "./routers/SignIn";
import Root from "./components/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: "",
        element: <InitialPage />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "signin",
        element: <SignIn />,
      },
    ],
  },
]);

export default router;
