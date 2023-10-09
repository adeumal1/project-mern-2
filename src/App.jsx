import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import Preloader from "./components/Preloader/Preloader";
import Navbar from "./components/Navbar/Navbar";
const CitiesPage = lazy(() => import("./pages/CitiesPage"));
const LocationPage = lazy(() => import("./pages/LocationPage"));
const ForecastPage = lazy(() => import("./pages/ForecastPage"));

function App() {
  return (
    <div className="container">
      <div id="cloud-intro">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <React.Suspense fallback={<h2>Cargando...</h2>}>
                <LocationPage />
              </React.Suspense>
            }
          />
          <Route
            path="/cities"
            element={
              <React.Suspense fallback={<h2>Cargando...</h2>}>
                <CitiesPage />
              </React.Suspense>
            }
          />
          <Route
            path="/forecast"
            element={
              <React.Suspense fallback={<h2>Cargando...</h2>}>
                <ForecastPage />
              </React.Suspense>
            }
          />
        </Routes>
        <Preloader />
      </div>
    </div>
  );
}

export default App;
