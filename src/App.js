import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import useRoute from "./utils/useRoute";
import { BrowserRouter } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));

const appRoute = useRoute();

root.render(<RouterProvider router={appRoute} />);
