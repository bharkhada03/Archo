import React, { useState, useEffect } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useNavigation,
} from "react-router-dom";

// App Layout
import { AppLayout } from "./components/Layout/AppLayout";

// All Web Pages
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { Portfolio } from "./Pages/Portfolio";
import { Blog } from "./Pages/Blog";
import { Contact } from "./Pages/Contact";
import { Loading } from "./components/Loading/Loading";

// Wrapper Component for Loading Logic
const PageWrapper = () => {
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation(); // Detect navigation state

  useEffect(() => {
    // Show loading spinner during navigation
    if (navigation.state === "loading") {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [navigation.state]);

  return (
    <>
      {loading && <Loading />} {/* Show loading spinner */}
      <Outlet /> {/* Render nested routes */}
    </>
  );
};

// Define Routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <PageWrapper />, // Wrap all routes for loading spinner
    children: [
      {
        path: "/",
        element: <AppLayout />, // Main layout with Outlet for nested routes
        children: [
          {
            path: "/",
            element: <Home />,
          },
          {
            path: "about",
            element: <About />,
          },
          {
            path: "portfolio",
            element: <Portfolio />,
          },
          {
            path: "blog",
            element: <Blog />,
          },
          {
            path: "contact",
            element: <Contact />,
          },
        ],
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
