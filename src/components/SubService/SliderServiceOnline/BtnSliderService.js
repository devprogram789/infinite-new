import React from "react";
import "./SliderService.css";
import leftArrow from "./icons/left-arrow.svg";
import rightArrow from "./icons/right-arrow.svg";

export default function BtnSliderService({ direction, moveSlide }) {
  console.log(direction, moveSlide);
  return (
    <button
      onClick={moveSlide}
      className={direction === "nextservice" ? "btn-slideservice nextservice" : "btn-slideservice prevservice"}
    >
      <img src={direction === "nextservice" ? rightArrow : leftArrow} />
    </button>
  );
}
