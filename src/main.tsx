import { StrictMode } from "react";
import { createRoot } from "react-dom/client"; 
import { RouterProvider, createBrowserRouter } from "react-router-dom"; 

import './index.css';
import App from './App';
import HomePage from "./HomePage/HomePage";
import Live from "./Live/Live";



const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
          {
        path: "/stream/live",
        element: <Live />,
      },
    ],
  },
]);



const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error(`Your HTML Document should contain a <div id="root"></div>`);
}

const root = createRoot(rootElement);
root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
