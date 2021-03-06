import React from "react";
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import arrow from "../../Assets/Icons/arrow.svg";
import Navbar from "../Navbar/Navbar";

function SlideShow(props) {
  const zoomInProperties = {
    // indicators: true,
    scale: 1.2,
    duration: 5000,
    transitionDuration: 500,
    infinite: true,

    prevArrow: (
      <div style={{ width: "30px", marginRight: "-30px", cursor: "pointer" }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-arrow-left-circle"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 8 8 12 12 16"></polyline>
          <line x1="16" y1="12" x2="8" y2="12"></line>
        </svg>
      </div>
    ),

    nextArrow: (
      <div style={{ width: "30px", marginLeft: "-30px", cursor: "pointer" }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-arrow-right-circle"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 16 16 12 12 8"></polyline>
          <line x1="8" y1="12" x2="16" y2="12"></line>
        </svg>
      </div>
    ),
  };

  return (
    <>
      <div className="m-10">
        <Zoom {...zoomInProperties}>
          {props.wallpapers.map((each, index) => (
            <div key={index} className="flex justify-center w-full h-full">
              <img
                src={each.imageUrl}
                className="w-3/4 object-cover rounded-lg shadow-xl cursor-pointer"
              />
            </div>
          ))}
        </Zoom>
      </div>
    </>
  );
}

export default SlideShow;
