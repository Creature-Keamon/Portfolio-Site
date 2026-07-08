import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import {BrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";


createRoot(document.getElementById("root")!).render(
      <StrictMode>
        <BrowserRouter>
          <RouterProvider router={App}>
            <App />
          </RouterProvider>
        </BrowserRouter>
        
      </StrictMode>
    )

