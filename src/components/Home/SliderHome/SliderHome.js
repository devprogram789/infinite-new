import React, { useState } from "react";
import "./SliderHome.css";
import BtnSliderHome from "./BtnSliderHome";
import dataSliderHome from "./dataSliderHome";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SliderHome() {
  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    if (slideIndex !== dataSliderHome.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === dataSliderHome.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(dataSliderHome.length);
    }
  };

  const moveDot = (index) => {
    setSlideIndex(index);
  };

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    vertical: true,
    verticalSwiping: true,
  };
  return (

    <Slider {...settings}>
      {dataSliderHome.map((obj, index) => {
          return (
            <div
              key={obj.id}
              className={
                slideIndex === index + 1
                  ? "slidhome active-animhome fadehome"
                  : "slidehome fadehome"
              }
            >
              <img
                className="3xl:w-[1584px]"
                src={
                  process.env.PUBLIC_URL +
                  `/assets/images/home/sliderhome/${index + 1}-2.jpg`
                }
              />
            </div>
          );
        })}
      <div>
        <img
          alt="sss"
          src="http://localhost:3000/assets/images/home/sliderhome/1-2.jpg"
        />
      </div>
      <div>
        <img
          alt="sss"
          src="http://localhost:3000/assets/images/home/sliderhome/1-2.jpg"
        />
      </div>
      
    </Slider>
/*     <Slider {...settings}>
    <div className="container-sliderhome">
      
        {dataSliderHome.map((obj, index) => {
          return (
            <div
              key={obj.id}
              className={
                slideIndex === index + 1
                  ? "slidhome active-animhome fadehome"
                  : "slidehome fadehome"
              }
            >
              <img
                className="3xl:w-[1584px]"
                src={
                  process.env.PUBLIC_URL +
                  `/assets/images/home/sliderhome/${index + 1}-2.jpg`
                }
              />
            </div>
          );
        })}
      
      <BtnSliderHome moveSlide={nextSlide} direction={"nexthome"} />
      <BtnSliderHome moveSlide={prevSlide} direction={"prevhome"} />

      <div className="container-dotshome">
        {Array.from({ length: 7 }).map((item, index) => (
          <div
            onClick={() => moveDot(index + 1)}
            className={
              slideIndex === index + 1
                ? "dothome activehome fadehome"
                : "dothome fadehome"
            }
          ></div>
        ))}
      </div>
    </div>
    </Slider> */
  );
}
