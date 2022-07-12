import React, {useState} from 'react'
import './SliderService.css'
import BtnSliderService from './BtnSliderService'
import dataSliderService from './dataSliderService'

export default function SliderService() {

    const [slideIndex, setSlideIndex] = useState(1)

    const nextSlide = () => {
        if(slideIndex !== dataSliderService.length){
            setSlideIndex(slideIndex + 1)
        } 
        else if (slideIndex === dataSliderService.length){
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1){
            setSlideIndex(dataSliderService.length)
        }
    }

    const moveDot = index => {
        setSlideIndex(index)
    }

    return (
        <div className="container-sliderservice">
            {dataSliderService.map((obj, index) => {
                return (
                    <div
                    key={obj.id}
                    className={slideIndex === index + 1 ? "slideservice active-animservice fadeservice" : "slideservice fadeservice"}
                    >
                        <img 
                        src={process.env.PUBLIC_URL + `/assets/images/service/SocialMedia/online/${index + 1}.jpg`} 
                        />
                    </div>
                )
            })}
            <BtnSliderService moveSlide={nextSlide} direction={"nextservice"} />
            <BtnSliderService moveSlide={prevSlide} direction={"prevservice"}/>

            <div className="container-dotsservice">
                {Array.from({length: 22}).map((item, index) => (
                    <div 
                    onClick={() => moveDot(index + 1)}
                    className={slideIndex === index + 1 ? "dotservice activeservice fadeservice" : "dotservice fadeservice"}
                    ></div>
                ))}
            </div>
        </div>
    )
}
