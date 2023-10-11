import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import Preloader from "./components/Preloader/Preloader";
import Navbar from "./components/Navbar/Navbar";
import OnLoad from './components/OnLoad/OnLoad';
const CitiesPage = lazy(() => import("./pages/CitiesPage"));
const LocationPage = lazy(() => import("./pages/LocationPage"));
const ForecastPage = lazy(() => import("./pages/ForecastPage"));
const ForecastSelectedPage = lazy(() => import("./pages/ForecastSelectedPage"))

function App() {
  return (
    <div className="container">
      <div id="cloud-intro">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <React.Suspense fallback={<OnLoad />}>
                <LocationPage />
              </React.Suspense>
            }
          />
          <Route
            path="/cities"
            element={
              <React.Suspense fallback={<OnLoad />}>
                <CitiesPage />
              </React.Suspense>
            }
          />
          <Route
            path="/forecast"
            element={
              <React.Suspense fallback={<OnLoad />}>
                <ForecastPage />
              </React.Suspense>
            }
          />
          <Route
            path="/forecast-selected"
            element={
              <React.Suspense fallback={<OnLoad />}>
                <ForecastSelectedPage />
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
