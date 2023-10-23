import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import SecondPage from "./pages/second";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/second",
    element: <SecondPage />,
  },
]);

export default router;
