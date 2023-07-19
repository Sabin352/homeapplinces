import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./cartStyle.css"

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const getCartItems = async () => {
    const res = await axios.get("http://localhost:8000/cart");
    setCartItems(res.data);
  };
  useEffect(() => {
    getCartItems();
  }, []);
  const handleDelete = async (id) => {
    const res = await axios.delete(`http://localhost:8000/cart/${id}`);
    console.log(res.data);
    if (res.data._id) {
      setCartItems(cartItems.filter((p) => p._id !== res.data._id));
    }
  };
  return (
    <>
      <h2 className="heroTitle">Your Items</h2>
      <div className="heroo">
        {cartItems.map((d, key) => {
          return (
            <div key={key} >
              <div className="he" >
                <img src={d.image} className="img" alt="..." />
                <div className="">
                  <h5 className="">{d.name}</h5>
                  <p className="">{d.desc}</p>
                  <div className="">
                    <h3>Rs.{d.price}</h3>
                    <button
                      onClick={() => handleDelete(d._id)}
                      className="cart"
                    >
                      <i class="fa-solid fa-trash"></i>
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

export default Cart;
