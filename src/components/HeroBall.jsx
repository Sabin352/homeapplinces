import React from "react";
import ballItems from "../data.js/ballItems";
import "./heroStyle.css";

const Hero = () => {
  return (
    <>
      <h2 className="heroTitle" style={{ color: "red" }}>
        Get Playing Items At Sports Pitch
      </h2>
      <div className="hero">
        {ballItems.map((ball, key) => {
          return (
            <div key={key} className="h">
              <div className="card column" style={{ width: "18rem" }}>
                <img src={ball.image} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{ball.title}</h5>
                  <p className="card-text text-primary">{ball.desc}</p>
                  <div className="cardfoot">
                    <h3>Rs.{ball.price}</h3>
                    <button className="cart">
                      <i className="fa-solid fa-cart-shopping"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Hero;
