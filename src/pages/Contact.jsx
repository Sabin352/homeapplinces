import "./contactStyle.css";
import React from "react";

const ContactForm = () => {
  return (
    <div className="cnt">
      <div className="container">
        <h1>Give Us a Review</h1>
        <form>
          <label>
            <h4>Name</h4>
          </label>
          <input placeholder="Enter your name" />
          <label>
            <h4>Email</h4>
          </label>
          <input placeholder="Enter your email" />
          <label>
            <h4>Topic</h4>
          </label>
          <input placeholder="Subject" />
          <label>
            <h4>Comment</h4>
          </label>
          <textarea placeholder="Please give us a review" rows={4}></textarea>
          <button>Comment</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
