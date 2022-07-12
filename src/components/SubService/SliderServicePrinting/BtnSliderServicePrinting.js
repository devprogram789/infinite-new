import React from "react";
import "./SliderServicePrinting.css";
import leftArrow from "./icons/left-arrow.svg";
import rightArrow from "./icons/right-arrow.svg";

export default function BtnSliderServicePrinting({ direction, moveSlide }) {
  console.log(direction, moveSlide);
  return (
    <button
      onClick={moveSlide}
      className={direction === "nextprinting" ? "btn-slideprinting nextprinting" : "btn-slideprinting prevprinting"}
    >
      <img src={direction === "nextprinting" ? rightArrow : leftArrow} />
    </button>
  );
}
