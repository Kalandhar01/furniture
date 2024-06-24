import React from "react";
import Slider from "react-slick";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  newArrOne,
  newArrTwo,
  newArrThree,
  newArrFour,
  home1,
  sofa6,
  sofa5,
  set3,
  chair10,
  sofa10,
  sofa4,
} from "../../../assets/images/index";
import SampleNextArrow from "./SampleNextArrow";
import SamplePrevArrow from "./SamplePrevArrow";

const NewArrivals = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <div className="w-full pb-16">
      <Heading heading="New Arrivals" />
      <Slider {...settings}>
        <div className="px-2">
          <Product
            _id="100001"
            img={set3}
            productName="Furniture Set"
            price="9999.00"
            color="Brown and White"
            badge={true}
            des="Transform your living space with our versatile furniture set, combining style and functionality to create a cohesive and inviting environment."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100002"
            img={sofa6}
            productName="ColorFull Sofa"
            price="250.00"
            color="mixed"
            badge={true}
            des="Introducing our color-mixed sofa, a vibrant fusion of hues that brings both style and personality to your living space"
          />
        </div>
        <div className="px-2">
          <Product
            _id="100003"
            img={chair10}
            productName="New Model Chair"
            price="808.00"
            color="brown"
            badge={true}
            des="Discover our latest model chair, blending contemporary design with ergonomic comfort for a stylish and functional addition to any space."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100004"
            img={sofa10}
            productName="New Model Sofa"
            price="600.00"
            color="Browny White"
            badge={false}
            des="Elevate your living space with our luxurious sofa, designed for both comfort and style, offering a perfect blend of elegance and relaxation."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100005"
            img={sofa4}
            productName="Serenity Sofa" 
            price="470.00"
            color="Mixed"
            badge={false}
            des="Small yet stylish, the Serenity Sofa offers comfort and elegance in compact spaces."
          />
        </div>
      </Slider>
    </div>
  );
};

export default NewArrivals;
