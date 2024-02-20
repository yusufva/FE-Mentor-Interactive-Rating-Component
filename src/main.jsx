import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App.jsx'
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RatingPage from "./Pages/rating";
// import ThankyouPage from "./Pages/thankyou";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RatingPage />,
    },
    // {
    //   path: "/thankyou/:id",
    //   element: <ThankyouPage />,
    // },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
