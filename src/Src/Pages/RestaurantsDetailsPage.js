import { useContext, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { CusinsContext } from "../Context/CusinsContext";

import Modal from "react-modal";

export const RestaurantsDetailsPage = () => {
  const { selectedCuisineRestaurant, addReview } = useContext(CusinsContext);
  const { RestaurantId } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newRating, setNewRating] = useState([]);
  const [newComment, setNewComment] = useState([]);

  const handleRating = (event) => {
    const newRatingValue = event.target.value;
    setNewRating(newRatingValue);
  };

  const handleComment = (event) => {
    const newCommentValue = event.target.value;
    setNewComment(newCommentValue);
  };

  const restaurant = selectedCuisineRestaurant.find(
    (restaurant) => restaurant.id === parseInt(RestaurantId, 10)
  );

  const ReviewBtnClick = (name) => {
    setIsModalOpen(!isModalOpen);
    addReview(name, newRating, newComment);
  };
  return (
    <div>
      {restaurant && (
        <div>
          <NavLink to="/Restaurants">
            {" "}
            <button
              style={{
                backgroundColor: "orangered",
                color: "white",
                fontWeight: "bold",
                borderRadius: "0.5rem",
                padding: "6px",
                width: "60px",
                float: "left"
              }}
            >
              back
            </button>
          </NavLink>
          <div
            style={{
              width: "700px",
              height: "300px",
              border: "1px solid grey",
              display: "flex",
              alignItems: "center",
              paddingLeft: "35px",
              justifyContent: "center",
              margin: "auto",
              boxShadow: "6px 6px 12px"
            }}
          >
            <div style={{ marginLeft: "0px" }}>
              <h1
                style={{
                  fontSize: "40px",
                  fontFamily: "monospace",
                  marginLeft: "0px",
                  jmargin: "auto"
                }}
              >
                {restaurant.name}
              </h1>
              <p
                style={{ fontSize: "medium", color: "grey", marginLeft: "0px" }}
              >
                {" "}
                {restaurant.menu.map((item) => item.name)}
              </p>
              <p
                style={{ fontSize: "medium", color: "grey", marginLeft: "0px" }}
              >
                Address: {restaurant.address}
              </p>

              <p
                style={{ fontSize: "medium", color: "grey", marginLeft: "0px" }}
              >
                Average Rating : {restaurant.averageRating}
              </p>
            </div>
          </div>
          <button
            style={{
              float: "right",
              backgroundColor: "orangered",
              color: "white",
              fontWeight: "bold",
              borderRadius: "0.5rem",
              padding: "6px",
              width: "120px"
            }}
            onClick={() => ReviewBtnClick(restaurant.name)}
          >
            Add Review
          </button>
          <Modal
            className="modal"
            isOpen={isModalOpen}
            style={{
              color: "orangered",
              background: "rgba(0, 0, 0, 0.8)",
              padding: "20px"
            }}
          >
            <div style={{ display: "flex" }}>
              <h1
                style={{
                  color: "white",
                  marginBottom: "20px",
                  margin: "auto",
                  marginLeft: "80px"
                }}
              >
                ADD YOUR REVIEW
              </h1>
            </div>
            <div
              style={{
                display: "flex",
                borderBottom: "1px solid black"
              }}
            >
              <h1
                style={{
                  marginLeft: "50px",
                  marginTop: "60px",
                  marginBottom: "30px"
                }}
              >
                Rating
              </h1>
              <select
                style={{
                  marginLeft: "140px",
                  height: "35px",
                  margin: "auto",
                  borderRadius: "10px",
                  padding: "10px",
                  marginTop: "60px"
                }}
                onChange={handleRating}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>

            <div
              style={{ display: "flex", marginTop: "60px", marginLeft: "50px" }}
            >
              {" "}
              <h1>Comment</h1>{" "}
              <input
                style={{
                  height: "26px",
                  margin: "auto",
                  borderRadius: "10px",
                  padding: "10px"
                }}
                onChange={handleComment}
                placeholder="Enter The comment Here.."
              ></input>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                margin: "auto"
              }}
            >
              <button
                style={{
                  // background: "orangered",
                  color: "black",
                  padding: "10px 20px",
                  backgroundColor: "white",
                  cursor: "pointer",
                  border: "1px solid black",
                  margin: "auto",
                  display: "flex",
                  marginTop: "60px",
                  marginLeft: "60px",
                  borderRadius: "1rem",
                  fontWeight: "bolder",
                  fontSize: "16px"
                }}
                onClick={ReviewBtnClick}
              >
                SUBMIT
              </button>
              <button
                style={{
                  // background: "orangered",
                  color: "black",
                  padding: "10px 20px",
                  backgroundColor: "white",
                  cursor: "pointer",
                  border: "1px solid black",
                  margin: "auto",
                  display: "flex",
                  marginTop: "60px",
                  marginLeft: "40px",
                  borderRadius: "1rem",
                  fontWeight: "bolder",
                  fontSize: "16px",
                  float: "left"
                }}
                onClick={ReviewBtnClick}
              >
                BACK
              </button>
            </div>
          </Modal>

          <div
            style={{
              padding: "20px",
              margin: "auto",
              width: "700px"
            }}
          >
            <h2>Reviews</h2>
            {restaurant.ratings.map((person, index) => (
              <div
                key={index}
                style={{
                  marginBottom: "20px",
                  display: "flex",
                  alignItems: "center",
                  borderBottom: "1px solid black",
                  justifyContent: "space-between"
                }}
              >
                <img
                  alt="Profile"
                  src={person.pp}
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    marginRight: "10px"
                  }}
                />
                <div className="info" style={{ marginLeft: "30px" }}>
                  <h3
                    style={{
                      margin: "0",
                      marginBottom: "5px"
                    }}
                  >
                    {person.revName}
                  </h3>
                  <p style={{}}>{person.comment}</p>
                </div>
                <div
                  style={{
                    border: "1px solid grey",
                    width: "40px",
                    height: "40px",
                    backgroundColor: "green",
                    color: "yellow",
                    borderRadius: "50%",
                    display: "flex",
                    justifyContent: "center",
                    float: "right",
                    alignItems: "center"
                  }}
                >
                  {person.rating}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
