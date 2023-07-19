import { useState } from "react";
import { createContext } from "react";
import { cuisineData } from "../Pages/RestaurantsDB";
import { restaurantsData } from "../Pages/RestaurantsDB";

export const CusinsContext = createContext();

export const CusinsContextProvider = ({ children }) => {
  const [AllcuisineData, setAllCuisineData] = useState(cuisineData);
  const [AllrestaurantsData, setAllrestaurantsData] = useState(restaurantsData);
  const [selectedCuisineRestaurant, setSelectedCuisineRestaurant] = useState(
    []
  );
  const [updatedRestaurantData, setUpdatedRestaturantData] = useState(
    restaurantsData
  );

  const handleCuisineBtn = (cuisineID) => {
    const selectedRestaurant = AllrestaurantsData.filter(
      (restaurant) => restaurant.id === cuisineID
    )[0];
    if (selectedRestaurant) {
      setSelectedCuisineRestaurant([selectedRestaurant]);
    }
  };

  const addReview = (name, newRating, newComment) => {};

  return (
    <CusinsContext.Provider
      value={{
        AllcuisineData,
        selectedCuisineRestaurant,
        handleCuisineBtn,
        addReview
      }}
    >
      {children}
    </CusinsContext.Provider>
  );
};
