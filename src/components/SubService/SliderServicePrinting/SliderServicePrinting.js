import React, {useState} from 'react'
import './SliderServicePrinting.css'
import BtnSliderServicePrinting from './BtnSliderServicePrinting'
import dataSliderServicePrinting from './dataSliderServicePrinting'

export default function SliderServicePrinting() {

    const [slideIndex, setSlideIndex] = useState(1)

    const nextSlide = () => {
        if(slideIndex !== dataSliderServicePrinting.length){
            setSlideIndex(slideIndex + 1)
        } 
        else if (slideIndex === dataSliderServicePrinting.length){
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1){
            setSlideIndex(dataSliderServicePrinting.length)
        }
    }

    const moveDot = index => {
        setSlideIndex(index)
    }

    return (
        <div className="container-sliderprinting">
            {dataSliderServicePrinting.map((obj, index) => {
                return (
                    <div
                    key={obj.id}
                    className={slideIndex === index + 1 ? "slideprinting active-animprinting fadeprinting" : "slideprinting fadeprinting"}
                    >
                        <img 
                        src={process.env.PUBLIC_URL + `/assets/images/service/SocialMedia/printing/0${index + 1}.jpg`} 
                        />
                    </div>
                )
            })}
            <BtnSliderServicePrinting moveSlide={nextSlide} direction={"nextprinting"} />
            <BtnSliderServicePrinting moveSlide={prevSlide} direction={"prevprinting"}/>

            <div className="container-dotsprinting">
                {Array.from({length: 6}).map((item, index) => (
                    <div 
                    onClick={() => moveDot(index + 1)}
                    className={slideIndex === index + 1 ? "dotprinting activeprinting fadeprinting" : "dotprinting fadeprinting"}
                    ></div>
                ))}
            </div>
        </div>
    )
}
