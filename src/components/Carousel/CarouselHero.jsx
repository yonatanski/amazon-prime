import React, { useState } from "react"
import { Carousel } from "react-bootstrap"
import { carouselData } from "../../Data/courselData"
import "./Carousel.css"

const CarouselHero = () => {
  const [index, setIndex] = useState(0)

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
  }
  return (
    <>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {carouselData.map((item, index) => (
          <Carousel.Item>
            <img className="d-block w-100" src={item.image} alt={item.title} />
            {/* <Carousel.Caption>
              <h3>{item.title}</h3>
              <p>{item.title}</p>
            </Carousel.Caption> */}
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  )
}
export default CarouselHero
