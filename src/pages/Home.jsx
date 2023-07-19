import React from "react";
import axios from "axios";
import "../components/heroStyle.css";
import { useState, useEffect } from "react";

const Home = () => {
  const [products, setProducts] = useState([]);
  const getProducts = async () => {
    const res = await axios.get("http://localhost:8000/products");
    setProducts(res.data);
  };
  useEffect(() => {
    getProducts();
  }, []);

  const getOneProduct = async (name, price, image, desc) => {

    let ip = { name, price, image, desc };
    await axios.post("http://localhost:8000/cart", ip);
  };
  return (
    <>
      <h2 className="heroTitle">Appliances For Your Home</h2>
      <div className="hero">
        {products.map((d, key) => {
          return (
            <div key={key} className="h">
              <div className="card column" style={{ width: "18rem" }}>
                <img src={d.image} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{d.name}</h5>
                  <p className="card-text text-primary">{d.desc}</p>
                  <div className="cardfoot">
                    <h3>Rs.{d.price}</h3>
                    <button
                      onClick={() => {
                        getOneProduct(d.name, d.price, d.image, d.desc);
                      }}
                      className="cart"
                    >
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

export default Home;
