import { useContext } from "react";
import { NavLink } from "react-router-dom";

import { CusinsContext } from "../Context/CusinsContext";
import { RestaurantsDetailsPage } from "./RestaurantsDetailsPage";
import { AllCuisines } from "./AllCuisines";
export const Restaurants = () => {
  const { selectedCuisineRestaurant } = useContext(CusinsContext);
  return (
    <div style={{ backgroundColor: "whitesmoke", height: "650px" }}>
      {/* <h3>All Restaurants Should Display Here...</h3> */}
      {selectedCuisineRestaurant.map((restaurants) => {
        return (
          <div key={restaurants.name}>
            <NavLink to="/">
              <button
                style={{
                  backgroundColor: "orangered",
                  color: "white",
                  fontWeight: "bold",
                  borderRadius: "0.5rem",
                  padding: "6px",
                  float: "left",
                  width: "80px"
                }}
              >
                CUSINES
              </button>
            </NavLink>
            <div>
              <h3 style={{ fontFamily: "cursive", fontSize: "36px" }}>
                Dishes By {restaurants.name}
              </h3>
              <div className="menuContainer">
                {restaurants.menu.map((dish) => {
                  return (
                    <div className="menuCard" key={dish.name}>
                      <NavLink to={`/RestaurantsDetailsPage/${restaurants.id}`}>
                        <div style={{ borderRadius: "2rem" }}>
                          <img
                            alt="img.."
                            src={dish.imgSrc}
                            style={{
                              width: "250px",
                              height: "270px",
                              borderRadius: "2rem"
                            }}
                          />
                          <h4 style={{ color: "white" }}> {dish.name} </h4>
                          <p
                            style={{
                              fontSize: "small",
                              color: "white",
                              textDecoration: "none"
                            }}
                          >
                            Rs {dish.price} for {dish.qty}
                          </p>
                          <p style={{ fontSize: "small", color: "white" }}>
                            {restaurants.name}
                          </p>
                        </div>
                      </NavLink>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
