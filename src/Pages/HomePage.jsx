
import React, { useState, useContext } from "react";
import { TechGearContext } from "../Components/TechGearContext";
import { PhotographyContext  } from "../Components/PhotographyContext";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function HomePage(props) {
  const { techGear } = useContext(TechGearContext);
  const { photoGear } = useContext(PhotographyContext);




  return (
  <div className="homepage">
    <div className="flowers">
    <h2 className="flowers-text">Spring into adventure with style and comfort.</h2>
    </div>

    <div className="techGear-slider">
      <h1 className="techGear-title">Tech Gear</h1>
    <Slider dots={true} infinite={true} autoplay={true} autoplaySpeed={2000} speed={500} slidesToShow={3} slidesToScroll={1}>
  {techGear.map((item) => (
    <a href="/techGear" className="item-container" key={item._id}>
      <img src={item.imgURL} alt={item.title} id='tech-gear-img' />
      <h1 className="item-brand">{item.brand}</h1>
      <h2 className="item-name">{item.name}</h2>
      {/* <p>{item.description.slice(0, 200)}{item.description.length > 200 ? "..." : ""}</p> */}
    </a>
  ))}
  </Slider>
  </div>

  <div className="home-tagline">
    <hr className="tag-break-top" />
    <h2 className="tagline-text">Tech-up your travels with gear that goes the extra mile</h2>
    <hr className="tag-break-bottom" />
  </div>

  <div className="photoGear-slider">
    <h1 className="photoGear-title">Photography Gear</h1>
    <Slider dots={true} infinite={true} autoplay={true} autoplaySpeed={2000} speed={500} slidesToShow={3} slidesToScroll={1}>
  {photoGear.map((item) => (
    <a href="/photography" className="item-container" key={item._id}>
      <img className="gear-img" src={item.imgURL} alt={item.title} id='tech-gear-img' />
      <h1 className="item-brand">{item.brand}</h1>
      <h2 className="item-name">{item.name}</h2>
      {/* <p>{item.description.slice(0, 200)}{item.description.length > 200 ? "..." : ""}</p> */}
    </a>
  ))}
</Slider>
</div>


  </div>
  )  
}


export default HomePage;