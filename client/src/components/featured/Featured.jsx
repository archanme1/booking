import React from "react";
import "./featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://www.investopaper.com/wp-content/uploads/2020/10/soaltee-hotel-792x445.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Soaltee Crown Plaza</h1>
          <h2>100 Rooms</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://live.staticflickr.com/5131/5541900443_4fc57ebf30_b.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Everest Hotel</h1>
          <h2>1045 Rooms</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://gos3.ibcdn.com/fd168a7c11ba11eab1f30242ac110002.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Hyatt Residency</h1>
          <h2>275 Rooms</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
