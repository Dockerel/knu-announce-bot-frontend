import { createBrowserRouter } from "react-router-dom";
import NotFound from "./routers/NotFound";
import InitialPage from "./routers/InitialPage";
import SignUp from "./routers/SignUp";
import SignIn from "./routers/SignIn";
import Root from "./components/Root";
import Send from "./routers/Send";
import MyPage from "./routers/MyPage";

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
      {
        path: "mypage",
        element: <MyPage />,
      },
      {
        path: "send",
        element: <Send />,
      },
    ],
  },
]);

export default router;
