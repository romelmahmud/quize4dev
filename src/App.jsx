import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Blog from "./components/Blog";
import ErrorPage from "./components/ErrorPage";
import Home from "./components/Home";
import Root from "./components/Root";
import Statistics from "./components/Statistics";
import Topics from "./components/Topics";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "topics",
        element: <Topics />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "statistics",
        element: <Statistics />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
