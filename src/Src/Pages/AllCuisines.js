import { useContext } from "react";

import { NavLink } from "react-router-dom";

import { CusinsContext } from "../Context/CusinsContext";

export const AllCuisines = () => {
  const { AllcuisineData, handleCuisineBtn } = useContext(CusinsContext);
  return (
    <div>
      <h1 style={{ fontFamily: "cursive", fontSize: "36px" }}>
        Food Ordering App
      </h1>
      <h3 style={{ fontFamily: "cursive", fontSize: "22px" }}>
        Select Your Cuisine
      </h3>
      <div
        style={{
          display: "flex",
          margin: "auto",
          padding: "20px",
          marginLeft: "220px"
        }}
      >
        {AllcuisineData.map((cuisine, index) => {
          return (
            <div
              key={cuisine.name}
              style={{
                marginRight: "30px",
                width: "100px",
                marginLeft: "40px"
              }}
            >
              <NavLink to="/Restaurants">
                <button
                  className="btn"
                  onClick={() => handleCuisineBtn(cuisine.id)}
                >
                  <span>{cuisine.name}</span>
                </button>
              </NavLink>
            </div>
          );
        })}
      </div>
    </div>
  );
};
