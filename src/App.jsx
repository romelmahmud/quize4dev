import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Blog from "./components/Blog";
import ErrorPage from "./components/ErrorPage";
import Home from "./components/Home";
import Quiz from "./components/Quiz";
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
        loader: () => fetch("https://openapi.programming-hero.com/api/quiz"),
      },
      {
        path: "home",
        element: <Home />,
        loader: () => fetch("https://openapi.programming-hero.com/api/quiz"),
      },
      {
        path: "topics",
        element: <Topics />,
        loader: () => fetch("https://openapi.programming-hero.com/api/quiz"),
      },
      {
        path: "topics/:topicId",
        element: <Quiz />,
        loader: ({ params }) =>
          fetch(
            `https://openapi.programming-hero.com/api/quiz/${params.topicId}`
          ),
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
  return (
    <>
      <RouterProvider router={router} />;
      <ToastContainer />
    </>
  );
}

export default App;
