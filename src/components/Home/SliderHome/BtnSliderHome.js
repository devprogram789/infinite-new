import React from "react";
import "./SliderHome.css";
import leftArrow from "./icons/left-arrow.svg";
import rightArrow from "./icons/right-arrow.svg";

export default function BtnSliderHome({ direction, moveSlide }) {
  console.log(direction, moveSlide);
  return (
    <button
      onClick={moveSlide}
      className={direction === "nexthome" ? "btn-slidehome nexthome" : "btn-slidehome prevhome"}
    >
      <img src={direction === "nexthome" ? rightArrow : leftArrow} />
    </button>
  );
}
