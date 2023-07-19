import "./styles.css";
import { Routes, Route, NavLink } from "react-router-dom";

import { Restaurants } from "./Src/Pages/Restaurants";
import { RestaurantsDetailsPage } from "./Src/Pages/RestaurantsDetailsPage";
import { AllCuisines } from "./Src/Pages/AllCuisines";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AllCuisines />} />
        <Route path="/Restaurants" element={<Restaurants />} />
        <Route
          path="/RestaurantsDetailsPage/:RestaurantId"
          element={<RestaurantsDetailsPage />}
        />
      </Routes>
    </div>
  );
}
