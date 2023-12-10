import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { Home, Login, Posts } from "./pages";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { store } from "./store/store.js";
import { Provider } from "react-redux";
import AuthProtectedLayout from "./components/AuthProtectedLayout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <AuthProtectedLayout isAuthNeeded={true}>
            <Home />,
          </AuthProtectedLayout>
        ),
      },
      {
        path: "/login",
        element: (
          <AuthProtectedLayout isAuthNeeded={false}>
            <Login />
          </AuthProtectedLayout>
        ),
      },
      {
        path: "/posts",
        element: (
          <AuthProtectedLayout isAuthNeeded={true}>
            <Posts />,
          </AuthProtectedLayout>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
