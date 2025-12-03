import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client"; // import correct pour React 18
import { RouterProvider, createBrowserRouter } from "react-router-dom"; // react-router-dom pour tout
import './index.css';
import App from './App';
import HomePage from './HomePage.tsx'; // Assure-toi d'importer ton composant

// Sélection de la div racine
const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error(`Your HTML Document should contain a <div id="root"></div>`);
}

// Configuration du routeur
const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
]);

// Création de la racine et rendu
const root = createRoot(rootElement);
root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
