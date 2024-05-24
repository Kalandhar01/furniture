import React from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  bestSellerOne,
  bestSellerTwo,
  bestSellerThree,
  bestSellerFour,
  home5,
} from "../../../assets/images/index";

const BestSellers = () => {
  return (
    <div className="w-full pb-20">
      <Heading heading="Our Bestsellers" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
        <Product
          _id="1011"
          img={home5}
          productName="Premium Furniture"
          price="35.00"
          color="Blank and White"
          badge={true}
          des="Introducing our latest addition to the living room oasis: The Harmony Haven Sofa. Sink into a world of comfort and style with this elegantly crafted centerpiece. Designed with plush cushions and luxurious upholstery, the Harmony Haven Sofa offers the perfect balance of relaxation and refinement."
        />
        <Product
          _id="1012"
          img={home5}
          productName="Premium Furniture"
          price="180.00"
          color="Gray"
          badge={false}
          des="Introducing our latest addition to the living room oasis: The Harmony Haven Sofa. Sink into a world of comfort and style with this elegantly crafted centerpiece. Designed with plush cushions and luxurious upholstery, the Harmony Haven Sofa offers the perfect balance of relaxation and refinement."
        />
        <Product
          _id="1013"
          img={home5}
          productName="Premium Furniture"
          price="25.00"
          color="Mixed"
          badge={true}
          des="Introducing our latest addition to the living room oasis: The Harmony Haven Sofa. Sink into a world of comfort and style with this elegantly crafted centerpiece. Designed with plush cushions and luxurious upholstery, the Harmony Haven Sofa offers the perfect balance of relaxation and refinement.."
        />
        <Product
          _id="1014"
          img={home5}
          productName="Premium Furniture"
          price="220.00"
          color="Black"
          badge={false}
          des=" Introducing our latest addition to the living room oasis: The Harmony Haven Sofa. Sink into a world of comfort and style with this elegantly crafted centerpiece. Designed with plush cushions and luxurious upholstery, the Harmony Haven Sofa offers the perfect balance of relaxation and refinement."
        />
      </div>
    </div>
  );
};

export default BestSellers;
