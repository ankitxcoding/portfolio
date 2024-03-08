import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Body from "./components/Body";
import About from "./components/About";
import Projects from "./components/Projects";

function App() {
  const Layout = () => {
    return (
      <>
        <Outlet />
      </>
    );
  };

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Body />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "projects",
          element: <Projects />,
        },
      ],
    },
  ]);

  return <RouterProvider router={appRouter} />;
}

export default App;
